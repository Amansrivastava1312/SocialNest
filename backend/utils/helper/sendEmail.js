import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error in sending email:", error.message);
    throw new Error("Failed to send email");
  }
};

export default sendEmail;
