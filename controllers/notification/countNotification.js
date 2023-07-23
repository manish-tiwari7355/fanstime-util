const Notification = require("../../models/Notification.model");

const countNotification = async (req, res, next) => {
  try {
    const unreadCount = await Notification.countDocuments({
      ...req.body,
    });
    return res.status(200).send({
      message: "success",
      data: unreadCount,
    });
  } catch (error) {
    console.error("Error in create notification: ", error);
    next(error);
  }
};

module.exports = countNotification;
