import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Button from "./atoms/Button";

// const errorStyles = "text-sm text-red-500 text-left";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Troppo corto")
    .max(64, "Troppo lungo")
    .required("Necessario"),
  name2: Yup.string()
    .min(2, "Troppo corto")
    .max(64, "Troppo lungo")
    .required("Necessario"),
  mail: Yup.string()
    .min(2, "Troppo corto")
    .max(64, "Troppo lungo")
    .required("Necessario"),
});

export default function FormicJustMail({
  btnClassname = "font-medium rounded border-2 border-[#00000033] px-24 py-4",
  colors = {
    themeBgColor: "bg-transparent",
    errorBgColor: "bg-red-500",
    errorBorderColor: "border-red-500",
    successBgColor: "bg-green-500",
    loadingColor: "bg-blue-500",
    btnHover: "hover:bg-transparent",
    btnColor: "text-black",
    inputColor: "bg-white",
    inputFocusColor: "focus:border-[#00000033]",
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
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
  },
  inputHeight = "h-10",
}) {
  const [sendingStatus, setSendingStatus] = useState("notSending");
  const inputStyles = `outline-none px-0 appearance-none shadow-none box-border align-middle border-b-2 ${colors.inputColor} ${colors.inputBorderColor} ${colors.inputFocusColor} w-full`;

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
      name: values.name,
      name2: values.name2,
      mail: values.mail,
    };

    fetch("/api/sendJustMail", {
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
      buttonText: buttonText.errorText,
    },
    sent: {
      state: colors.successBgColor,
      buttonText: buttonText.successText,
    },
  };
  return (
    <div className="pt-8">
      <Formik
        initialValues={{
          name: "",
          name2: "",
          mail: "",
          tel: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        {({ touched, errors }) => (
          <Form className="text-base ">
            <p className="pb-1 text-sm text-[#00080DB2]">NOME:</p>
            <Field
              placeholder={formText.namePlaceholder}
              className={`${
                touched.name && errors.name ? "!border-[#EF4444]" : ""
              } ${inputStyles} ${inputHeight} mb-4`}
              name="name"
            />
            {/* <ErrorMessage component="p" className={errorStyles} name="name" /> */}
            <p className="pb-1 text-sm text-[#00080DB2]">COGNOME:</p>
            <Field
              placeholder={formText.namePlaceholder}
              className={`${
                touched.name2 && errors.name2 ? "!border-[#EF4444]" : ""
              } ${inputStyles} ${inputHeight} mb-4`}
              name="name2"
            />
            {/* <ErrorMessage component="p" className={errorStyles} name="name2" /> */}
            <p className="pb-1 text-sm text-[#00080DB2]">MAIL: </p>
            <Field
              className={`${
                touched.mail && errors.mail ? "!border-[#EF4444]" : ""
              } ${inputStyles} ${inputHeight} mb-4`}
              placeholder={formText.namePlaceholder}
              name="mail"
            />
            {/* <ErrorMessage component="p" className={errorStyles} name="city" /> */}

            <Button
              type="submit"
              size="lg"
              StyleType="custom"
              isLoading={sendingStatus === "sending"}
              className={`text-lg !w-full !px-0 mt-6 ${btnClassname} ${colors.btnColor} ${BUTTON_STATES[sendingStatus]["state"]}`}
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
        textarea {
          min-height: 6.25rem;
        }
      `}</style>
    </div>
  );
}
