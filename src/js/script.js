const burger = document.querySelector(".burger-menu");

burger.addEventListener("click", function (e) {
  const body = document.body;

  e.currentTarget.classList.toggle("open");

  if (burger.classList.contains("open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
});
