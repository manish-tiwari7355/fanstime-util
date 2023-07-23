const createError = require("http-errors");

const Notification = require("../../models/Notification.model");

const createNotification = async (req, res, next) => {
  try {
    const { id: notificationId } = req.params;

    const notificationExists = await Notification.exists({
      _id: notificationId,
    });
    if (!notificationExists)
      throw createError.BadRequest("This notification does not exist");

    await Notification.findOneAndDelete({ _id: notificationId });
    return res.status(200).send({
      message: "success",
    });
  } catch (error) {
    console.error("Error in create notification: ", error);
    next(error);
  }
};

module.exports = createNotification;
