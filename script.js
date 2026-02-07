function showLove() {
  const name = document.getElementById("nameSelect").value;
  document.getElementById("message").innerText =
    `This bouquet is just for you, ${name} 💐❤️`;
}
