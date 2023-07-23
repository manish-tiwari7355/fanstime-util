const createError = require("http-errors");

const Notification = require("../../models/Notification.model");

const insertManyNotification = async (req, res, next) => {
  try {
    const { notificationList } = req.body;

    await Notification.insertMany(notificationList);
    return res.status(200).send({
      message: "success",
    });
  } catch (error) {
    console.error("Error in create notification: ", error);
    next(error);
  }
};

module.exports = insertManyNotification;
