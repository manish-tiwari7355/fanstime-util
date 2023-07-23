const express = require("express");
const mongoose = require("mongoose");
const app = express();
const http = require("http").Server(app);
const chalk = require("chalk");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { port } = require("./config/keys").host;
const bodyParser = require("body-parser");

const { database } = require("./config/keys");

require("./utils/Mongo.util");

const routes = require("./routes");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json({ limit: "50mb", extended: true }));

app.use(express.urlencoded({ limit: "50mb", extended: true }));

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3000/",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3000/",
    "http://192.168.0.123:3000",
    "https://test.khushbir.info",
    "https://www.myfanstime.com/",
    "https://www.myfanstime.com",
    "https://myfanstime.com",
    "https://myfanstime.com/",
    "https://fanstime-web.vercel.app",
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(morgan("combined"));

app.use(routes);

// app.use(passport.initialize());
// app.use(passport.session());

// Connect to MongoDB
mongoose.set("useCreateIndex", true);
mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: process.env.MONGO_DB_NAME,
  })
  .then(() =>
    console.log(`${chalk.green("✓")} ${chalk.blue("MongoDB Connected!")}`)
  )
  .then(() => {
    http.listen(port, () => {
      console.log(
        `${chalk.green("✓")} ${chalk.blue(
          "Server Started on port"
        )} http://localhost:${chalk.bgMagenta.white(port)}`
      );
    });
    // socketMessaging(io);
  })
  .catch((err) => console.log(err));
