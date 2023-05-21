const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'benaliiheb21@gmail.com',
    pass: 'detroit76A',
  },
});

const mailOptions = {
  from: 'benaliiheb21@gmail.com',
  to: 'benaliiheb21@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error while sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
