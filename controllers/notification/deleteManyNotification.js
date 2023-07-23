const Notification = require("../../models/Notification.model");

const deleteManyNotification = async (req, res, next) => {
  try {
    await Notification.deleteMany({
      ...req.body,
    });
    return res.status(200).send({
      message: "success",
    });
  } catch (error) {
    console.error("Error in create notification: ", error);
    next(error);
  }
};

module.exports = deleteManyNotification;
