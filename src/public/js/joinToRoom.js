socket.emit(
  "connetion.new",
  document.getElementById("nickname").dataset.nickname
);
console.log(document.getElementById("id-chat").textContent);
socket.emit("room.join", document.getElementById("id-chat").textContent);
