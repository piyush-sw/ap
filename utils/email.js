const nodemailer = require("nodemailer");

const email = 'mahe_piyush@outlook.com';
const password = 'pIyush!@#$';

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  auth: {
    user: email,
    pass: password,
  },
});

async function sendEmail(subject, html, text) {
  const mailOptions = {
    from: 'mahe_piyush@outlook.com',
    to: 'maheshwarirohit06@gmail.com',
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