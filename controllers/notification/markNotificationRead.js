const createError = require("http-errors");

const Notification = require("../../models/Notification.model");

const createNotification = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const { notificationId } = req.params;

    const notificationExists = await Notification.exists({
      _id: notificationId,
    });
    if (!notificationExists)
      throw createError.BadRequest("This notification does not exist");

    const updatedNotification = await Notification.findOneAndUpdate(
      { _id: notificationId, receiver: userId },
      {
        isRead: true,
      },
      { new: true }
    );
    return res.status(200).send({
      message: "success",
      data: updatedNotification,
    });
  } catch (error) {
    console.error("Error in create notification: ", error);
    next(error);
  }
};

module.exports = createNotification;
