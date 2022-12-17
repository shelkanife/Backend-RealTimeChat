var socket = io();
var messages = document.getElementById("messages");
var form = document.getElementById("form");
var input = document.getElementById("input");
var button = document.getElementById("button");
var id = document.getElementById("id");
const chat = document.getElementById('chat')

input.addEventListener("input", function (e) {
  if (input.value) {
    button.classList.add("enable");
  } else {
    button.classList.remove("enable");
  }
});
const appendMsg = (msg, out) => {
  var li = document.createElement("li");
  li.classList.add(out ? "out" : "in");
  var p = document.createElement("p");
  p.classList.add(out ? "out" : "in");
  p.textContent = msg;
  var span = document.createElement("span");
  span.classList.add(out ? "out" : "in");
  p.appendChild(span);
  li.appendChild(p);
  messages.appendChild(li);
  chat.scrollTop = chat.scrollHeight;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let msg = input.value;
  if (msg) {
    socket.emit("message", msg);
    input.value = "";
    appendMsg(msg, true);
  }
});

socket.on("chat message", function (msg) {
  appendMsg(msg, false);
});
