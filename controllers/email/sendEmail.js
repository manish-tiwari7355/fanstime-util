const sendEmailService = require("../../services/Email/sendEmail");

const sendEmail = async (req, res, next) => {
  try {
    const { recipients, subject, body } = req.body;
    await sendEmailService(recipients, subject, body);
    res.status(200).send({
      success: "true",
    });
  } catch (error) {
    console.error("error in sending email");
    next(error);
  }
};

module.exports = sendEmail;
