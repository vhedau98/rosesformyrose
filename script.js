function goToPage(pageNumber) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("show");
  });

  document.getElementById("page" + pageNumber).classList.add("show");
}
