import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Button from "./atoms/Button";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Troppo corto")
    .max(64, "Troppo lungo")
    .required("Necessario"),
});

export default function SendEmailAddress({
  btnClassname = "hover:opacity-80 duration-200 focus-visible:opacity-80 rounded-md py-2 text-white uppercase  px-5 mt-6 md:mt-0",
  colors = {
    themeBgColor: "",
    errorBgColor: "bg-red-500",
    errorBorderColor: "border-red-500",
    successBgColor: "bg-green-500",
    loadingColor: "bg-blue-500",
    btnHover: "",
    btnColor: "text-black",
    inputColor: "bg-white",
    inputFocusColor: "focus:border-black",
    inputBorderColor: "border-[#00000033]",
  },
  buttonText = {
    defaultText: "Invia",
    errorText: "Error",
    successText: "Message sent",
    loadingtext: "Send",
  },
  formText = {
    nameLabel: "",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    namePlaceholder: "",
    emailPlaceholder: "Enter your mail",
    messagePlaceholder: "Your Message",
  },
  inputHeight = "h-14",
}) {
  const [sendingStatus, setSendingStatus] = useState("notSending");
  const inputStyles = `outline-none px-4 !text-black rounded-md appearance-none shadow-none box-border align-middle border-2 border-transparent ${colors.inputColor} ${colors.inputBorderColor} ${colors.inputFocusColor}`;

  function showError() {
    setSendingStatus("error");
    setTimeout(() => {
      setSendingStatus("notSending");
    }, 5000);
  }

  function showSuccess(actions) {
    setSendingStatus("sent");
    setTimeout(() => {
      setSendingStatus("notSending");
      clearForm(actions);
    }, 5000);
  }

  function handleSubmit(values, actions) {
    setSendingStatus("sending");

    const data = {
      mail: values.email,
    };

    fetch("/api/sendMailOnly", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          showSuccess(actions);
        } else {
          showError();
        }
      })
      .catch(() => {
        showError();
      });
  }
  function clearForm(actions) {
    actions.resetForm();
    setSendingStatus("notSending");
  }
  const BUTTON_STATES = {
    notSending: {
      state: colors.themeBgColor + " " + colors.btnHover,
      buttonText: buttonText.defaultText,
    },
    sending: {
      state: colors.loadingColor,
      buttonText: buttonText.defaultText,
    },
    error: {
      state: colors.errorBgColor,
      buttonText: buttonText.defaultText,
    },
    sent: {
      state: colors.successBgColor,
      buttonText: buttonText.defaultText,
    },
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        {({ touched, errors }) => (
          <Form className="flex flex-col text-base md:flex-row">
            <Field
              className={`${
                touched.email && errors.email ? "!border-[#EF4444]" : ""
              } ${inputStyles} ${inputHeight} w-56`}
              placeholder={formText.emailPlaceholder}
              name="email"
            />

            <Button
              type="submit"
              size="lg"
              StyleType="custom"
              isLoading={sendingStatus === "sending"}
              className={`!text-lg h-14  bg-white !text-black mt-4 md:mt-0  md:ml-3  md:!w-auto w-56  ${btnClassname} ${colors.btnColor} ${BUTTON_STATES[sendingStatus]["state"]}`}
            >
              {BUTTON_STATES[sendingStatus]["buttonText"]}
            </Button>
          </Form>
        )}
      </Formik>
      <style global jsx>{`
        input,
        textarea {
          line-height: normal;
          border-radius: 0;
          transition: border-color 0.2s;
        }
      `}</style>
    </>
  );
}
