const nodemailer = require("nodemailer");

const fromEmail = 'arnavpackers@outlook.com';
const password = '1033&wa=w';
const toEmail = 'maheshwarirohit06@gmail.com';

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  auth: {
    user: fromEmail,
    pass: password,
  },
});

async function sendEmail(subject, html, text) {
  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (e) {
    console.error('Error sending email', e);
    return false;
  }
}

module.exports = sendEmail;