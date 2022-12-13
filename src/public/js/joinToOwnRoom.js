console.log(document.getElementById("nickname").dataset.nickname);
console.log(document.getElementById("id-chat").textContent);
socket.emit(
  "connetion.new",
  document.getElementById("nickname").dataset.nickname
);

socket.emit("room.create", document.getElementById("id-chat").textContent);
