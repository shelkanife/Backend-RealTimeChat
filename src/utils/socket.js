const users = [];
const rooms = [];

module.exports = function (io) {
  function getCurrentRooms() {
    const rooms = [];
    for (let i of io.sockets.adapter.rooms) {
      if (i[0].includes("room/")) rooms.push(i[0].split("/")[1]);
    }
    return rooms;
  }

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
      const rooms = getCurrentRooms();
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
};
