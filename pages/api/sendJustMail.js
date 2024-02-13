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
    to: "assistenza@eleva-corporate.com",
    subject: `PurH₂O  message from ${req.body.name}`,
    text: req.body.name + " | Sent by: " + req.body.mail,
    html: `<div>${req.body.name} ${req.body.name2}, Email: ${req.body.mail}</div>`,
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
