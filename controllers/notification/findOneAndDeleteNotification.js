const Notification = require("../../models/Notification.model");

const FindOneAndDeleteNotification = async (req, res, next) => {
  try {
    const deletedNotification = await Notification.deleteOne({
      ...req.body,
    });
    return res.status(200).send({
      message: "success",
      data: deletedNotification,
    });
  } catch (error) {
    console.error("Error in create notification: ", error);
    next(error);
  }
};

module.exports = FindOneAndDeleteNotification;
