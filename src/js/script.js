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

const radioBtns = document.querySelectorAll('input[name = "radio"]');
const imgRadio = document.querySelector(
  ".features-unlimited-invoicing__img > img"
);

radioBtns.forEach((el) => {
  el.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "1": {
        imgRadio.src =
          "http://127.0.0.1:5500/src/images/features/img-unlimted1.svg";
        break;
      }
      case "2": {
        imgRadio.src =
          "http://127.0.0.1:5500/src/images/features/img-unlimted2.svg";
        break;
      }
      case "3": {
        imgRadio.src =
          "http://127.0.0.1:5500/src/images/features/img-unlimted3.svg";
        break;
      }
      case "4": {
        imgRadio.src =
          "http://127.0.0.1:5500/src/images/features/img-unlimted4.svg";
        break;
      }
    }
  });
});
