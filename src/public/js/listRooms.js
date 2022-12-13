const ul = document.getElementById("room-list");
let id = "";

function addRoomsToList(rooms) {
  // if (!rooms.length) {
  //   const p = document.createElement("p");
  //   p.textContent =
  //     "It seems there is not any room available but you can create one ";
  //   const a = document.createElement("a");
  //   a.textContent = "here";
  //   a.href = "http://localhost:3000";
  //   p.append(a);
  //   ul.appendChild(p);
  // }
  for (let room of rooms) {
    const i = document.createElement("i");
    i.classList.add("room-item");
    i.textContent = room;
    const btn = document.createElement("button");
    btn.textContent = "Join";
    btn.id = room;
    btn.onclick = () => {
      id = document.getElementById("join").dataset.roomname = room;
      showModal();
    };
    i.appendChild(btn);
    ul.appendChild(i);
  }
}
const btnJoin = document.getElementById("join");
btnJoin.addEventListener("click", function () {
  checkName();
});
function checkName() {
  const nickname = document.getElementById("nickname").value;
  if (nickname) window.location = `rooms/${id}?nickname=${nickname}&join=true`;
  else alert("Necesitas un nickname para entrar a una sala");
}

var socket = io();
socket.emit("room.list");
socket.on("rooms", function (rooms) {
  addRoomsToList(rooms);
});
