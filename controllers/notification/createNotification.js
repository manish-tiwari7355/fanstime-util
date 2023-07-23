const createError = require("http-errors");

const Notification = require("../../models/Notification.model");

const createNotification = async (req, res, next) => {
  try {
    const { actor, verb, message, subject, avatar, receiver } = req.body;

    const payload = { actor, verb, message, receiver };
    if (subject) payload.subject = subject;
    if (avatar) payload.avatar = avatar;

    const newNotification = new Notification(payload);
    await newNotification.save();
    return res.status(200).send({
      message: "success",
      data: newNotification,
    });
  } catch (error) {
    console.error("Error in create notification: ", error);
    next(error);
  }
};

module.exports = createNotification;
