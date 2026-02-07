function nextPage(pageNumber) {
  document.querySelector(".page.active").classList.remove("active");
  document.getElementById("page" + pageNumber).classList.add("active");
}
