import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// add action on the burger
document.querySelector(".burger-menu").addEventListener("click", function (e) {
  const body = document.body;

  e.currentTarget.classList.toggle("open");

  if (burger.classList.contains("open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
});

//adding actions to radio buttons in the "features" section
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

//adding actions to acordion in the "packegs" section
const tabsInPackages = document.querySelectorAll(".packages-card-tab");

tabsInPackages.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("_active")) {
      el.classList.remove("_active");
      return;
    }

    for (let key of tabsInPackages) {
      key.classList.remove("_active");
    }

    el.classList.toggle("_active");
  });
});

//adding actions to acordion in the "questions" section
const questionsItems = document.querySelectorAll(".questions-acordeon__item");

questionsItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("_active")) {
      el.classList.remove("_active");
      return;
    }

    for (let key of questionsItems) {
      key.classList.remove("_active");
    }

    el.classList.toggle("_active");
  });
});

// initial sliders
const swiperPackages = new Swiper(".packagesSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperToolsSubscription = new Swiper(".toolsSubscriptionSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperTrust = new Swiper(".trustSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
