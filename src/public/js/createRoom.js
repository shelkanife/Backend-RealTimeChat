const btn = document.getElementById("create");

btn.addEventListener("click", () => {
  const nickname = document.getElementById("nickname").value;
  const roomname = document.getElementById("roomname").value;
  var socket = io();
  socket.emit("connection.new", nickname);
  socket.emit("room.create", roomname);
  alert("created");
  window.location = `rooms/${roomname}?nickname=${nickname}&join=false`;
});
