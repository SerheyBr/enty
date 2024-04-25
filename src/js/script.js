import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// add action on the burger
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

// add action bts menu berger
const mobilMenu = document.querySelector(".mobile-menu");
const linksMobilMenu = mobilMenu.querySelectorAll(".mobile-menu__item");

linksMobilMenu.forEach((el) => {
  el.addEventListener("click", (e) => {
    burger.classList.remove("open");
    document.body.style.overflow = "visible";
  });
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
      e.currentTarget.querySelector(".packages-card-tab__btn").innerHTML = "+";
      return;
    }

    for (let key of tabsInPackages) {
      key.querySelector(".packages-card-tab__btn").innerHTML = "+";
      key.classList.remove("_active");
    }

    e.currentTarget.querySelector(".packages-card-tab__btn").innerHTML = "-";
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

// add scrolling animation
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
  observer.observe(elm);
}

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
