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
    subject: `PurH₂O  message from ${req.body.mail}`,
    text: `New email subscriber, email: ${req.body.mail}`,
    html: `<p>New email subscriber, email: ${req.body.mail}</p>`,
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
