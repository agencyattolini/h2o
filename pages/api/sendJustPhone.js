export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "contentpanel.xyz",
    auth: {
      user: "mail@contentpanel.xyz",
      pass: "xxuhb73UGFNipRS",
    },
    secure: true,
  });

  const mailData = {
    from: "mail@contentpanel.xyz",
    to: "mail@attoliniagency.com",
    subject: `PurH²O  message from ${req.body.name}`,
    text: req.body.name + " | Sent by: " + req.body.tel,
    html: `<p>${req.body.name} ${req.body.name2}, Tel: ${req.body.tel}</p>`,
  };

  transporter.sendMail(mailData, (err) => {
    if (err) {
      res.statusCode = 500;
      res.send();
    } else {
      res.send();
    }
  });
}
