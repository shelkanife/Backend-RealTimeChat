const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
const { Server } = require("socket.io");
const io = new Server(server);

const users = [];
const rooms = [];

app.use("/public", express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/chat", (req, res) =>
  res.sendFile(path.join(__dirname, "views/chat_index.html"))
);
app.get("/create", (req, res) => {
  res.render("createRoom.ejs");
});
app.get("/rooms", (req, res) => {
  res.render("listRooms.ejs");
});
app.get("/rooms/:id", (req, res) => {
  res.render("chat.ejs", {
    id: req.params.id,
    nickname: req.query.nickname,
    join: req.query.join === "true",
  });
});

io.on("connection", (socket) => {
  socket.on("connection.new", (nickname) => {
    socket.nickname = nickname;
    users.push(nickname);
  });
  socket.on("room.create", (roomname) => {
    rooms.push(roomname);
    socket.join(`room/${roomname}`);
    socket.emit("rooms", rooms);
  });
  socket.on("room.join", (roomname) => {
    socket.join(`room/${roomname}`);
  });
  socket.on("room.list", () => {
    const rooms = [];
    for (let i of io.sockets.adapter.rooms) {
      if (i[0].includes("room/")) rooms.push(i[0].split("/")[1]);
    }
    socket.emit("rooms", rooms);
  });
  socket.broadcast.emit("new conexion", `${socket.id} has connected`);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("message", (msg) => {
    socket.broadcast.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
