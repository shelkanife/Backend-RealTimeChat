const modal = document.getElementById("modal");

// Get the button that opens the modal
// Get the <span> element that closes the modal
const span = document.getElementById("close");

// When the user clicks on the button, open the modal
function showModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function createRoom() {
  const nickname = document.getElementById("nickname").value;
  const roomname = document.getElementById("roomname").value;
  if (nickname && roomname) {
    alert("created");
  } else {
    alert("complete the required fields");
    return;
  }
  window.location = `http://localhost:3000/rooms/${roomname}?nickname=${nickname}&join=false`;
}
