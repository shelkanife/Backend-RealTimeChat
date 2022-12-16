const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { APP_HOST, APP_PORT } = require("./config/config");
const socket = require("./utils/socket");

if (process.env.NODE_ENV !== "production")
  require("dotenv").config({ path: ".env" });

app.set("port", APP_PORT);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
socket(io);

app.use("/", require("./routes/index"));
app.use("/public", express.static(path.join(__dirname, "public")));

server.listen(app.get("port"));

module.exports = server;
