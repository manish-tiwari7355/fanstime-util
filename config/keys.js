require("dotenv").config();

module.exports = {
  host: {
    port: process.env.PORT || 5004,
  },
  serviceMap: {
    server: process.env.BACKEND_SERVER_URL,
    messaging: process.env.MESSAGING_SERVER_URL,
    webSocket: process.env.WEBSOCKET_SERVER,
    util: process.env.UTIL_SERVER_URL,
    feed: process.env.FEED_SERVER_URL,
  },
  app: {
    name: "myFanstime Util",
    serverURL: process.env.BASE_SERVER_URL,
    apiURL: process.env.BASE_API_URL,
    clientURL: process.env.BASE_CLIENT_URL,
  },
  aws: {
    bucketName: process.env.AWS_BUCKET_NAME,
    fileURL: `https://s3-${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_BUCKET_NAME}`,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    sesSenderAddress: "no-reply@myfanstime.com",
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  database: process.env.DB_CONNECT,
  jwt: {
    accessSecret: process.env.ACCESS_TOKEN_SECRET,
    accessTokenLife: process.env.ACCESS_TOKEN_LIFE,
    refreshSecret: process.env.REFRESH_TOKEN_SECRET,
    refreshTokenLife: process.env.REFRESH_TOKEN_LIFE,
  },
  nodemailer: {
    sender: process.env.NODEMAILER_EMAIL_SENDER,
    pass: process.env.NODEMAILER_EMAIL_PASS,
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
  },
  coins: {
    buyPrice: 0.05,
    redeemPrice: 0.035,
    minAmount: 200,
    commissionRate: 0.5,
    purchaseCommission: 0.7,
    bundles: [
      {
        id: 1,
        amount: 200,
        // cost: 10,
      },
      {
        id: 2,
        amount: 400,
        // cost: 20,
      },
      {
        id: 3,
        amount: 1000,
        // cost: 50,
      },
      {
        id: 4,
        amount: 1400,
        // cost: 70,
      },
      {
        id: 5,
        amount: 2000,
        // cost: 100,
      },
    ],
  },
};
