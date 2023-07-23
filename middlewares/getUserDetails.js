const { escape } = require("lodash");

const getUserDetails = (req, res, next) => {
  try {
    if (req.headers["x-user-data"]) {
      const userDetails = JSON.parse(decodeURIComponent(escape(req.headers["x-user-data"])));
      req.user = userDetails;
    }
    next();
  } catch (error) {
    console.error("error in getting user details: ", error);
    next(error);
  }
};

module.exports = getUserDetails;
