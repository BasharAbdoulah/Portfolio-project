// MY PORT FOLIO ITEMS
let portfolioItems = Array.from(
  document.querySelectorAll(".portfolio-item .icon")
);

// LIGHTBOX ELEMENTS VARS
let lightboxImg = document.querySelector(".lightbox-content img");
let lightboxCounter = document.querySelector(".caption-counter");
let lightbox = document.querySelector(".lightbox");
let leftBtn = document.querySelector(".lightbox-controls .left");
let rightBtn = document.querySelector(".lightbox-controls .right");
let lightboxText = document.querySelector(".caption-text");
let closeBtn = document.querySelector(".lightbox-close");
let currentItem = 0;
// window.addEventListener("load", () => {
//   document.querySelector(".preloader").classList.add("opacity-0");
//   setTimeout(() => {
//     document.querySelector(".preloader").style.display = "none";
//   }, 1000);
// });

// LOOP AT THE ITEMS AND UPDATE VLUES
portfolioItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentItem = index + 1;
    lightbox.classList.remove("hidden");
    lightboxImg.src = `/images/portfolio/${currentItem}.jpg`;
    lightboxCounter.innerHTML = `${currentItem} Of ${portfolioItems.length}`;
    lightboxText.innerHTML = item.querySelector("h4").innerHTML;
  });
});

// PREVUES ITEM FUNCTION
function prevItem() {
  if (currentItem === 1) {
    return false;
  } else {
    currentItem--;
    // TRRIGER THE CHANGING FUNCTION
    changeItem();
  }
}

// NEXT ITEM FUNCTION
function nextItem() {
  if (currentItem === portfolioItems.length) {
    return false;
  } else {
    currentItem++;
    // TRRIGER THE CHANGING FUNCTION
    changeItem();
  }
}

// GHANGE THE IMG OF ITEM AND NUMBER
function changeItem() {
  lightboxImg.src = `/images/portfolio/${currentItem}.jpg`;
  lightboxCounter.innerHTML = `${currentItem} Of ${portfolioItems.length}`;
}
closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// STYLE SWITCHER
let links = document.querySelectorAll(".altrente-style");

function setActiveStyle(color) {
  links.forEach((link) => {
    if (color == link.getAttribute("title")) {
      link.removeAttribute("disabled");
    } else {
      link.setAttribute("disabled", "true");
    }
  });
}
let toggleI = document.querySelector(".toggle-switcher"),
  toggleSwitcher = document.querySelector(".style-switcher");

toggleI.addEventListener("click", () => {
  toggleSwitcher.classList.toggle("open");
});

let bodySkin = document.querySelectorAll(".style-switcher .body-skin");
bodySkin.forEach((el) => {
  el.addEventListener("change", (e) => {
    if (el.value === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
});

// Pages Slider
let navLink = document.querySelectorAll("nav ul li");
let allSections = document.querySelectorAll(".section");

navLink.forEach((li) => {
  let a = li.querySelector("a");

  li.addEventListener("click", (e) => {
    //remove back section class
    allSections.forEach((sec) => {
      sec.classList.remove("back-section");
    });
    navLink.forEach((el, index) => {
      if (el.querySelector("a").classList.contains("active")) {
        allSections[index].classList.add("back-section");
      }
      // console.log(el.querySelector("a"));
      el.querySelector("a").classList.remove("active");
    });
    e.currentTarget.querySelector("a").classList.add("active");
    showSection(a.getAttribute("href"));
  });
});

function showSection(ele) {
  allSections.forEach((sec) => {
    sec.classList.remove("active");
  });
  let target = ele.split("#")[1];
  document.querySelector(`#${target}`).classList.add("active");
}

// Hire me Button
let contactSection = document.querySelector(".contact");
document.querySelector(".hire-me").addEventListener("click", function () {
  allSections.forEach((sec) => {
    sec.classList.remove("active");
  });
  navLink.forEach((el, index) => {
    if (el.querySelector("a").classList.contains("active")) {
      allSections[index].classList.add("back-section");
    }
  });
  contactSection.classList.add("active");
});

// Nav Toggler Button
let navToggleBtn = document.querySelector(".nav-toggler");
let aside = document.querySelector(".aside");

//
navToggleBtn.addEventListener("click", () => {
  phoneAsideClose();
  aside.classList.toggle("open");
  navToggleBtn.classList.toggle("open");
  allSections.forEach((sec) => {
    sec.classList.toggle("open");
  });
});
console.log(window.innerWidth);

function phoneAsideClose() {
  if (window.innerWidth < 767) {
    navLink.forEach((li) => {
      li.addEventListener("click", () => {
        aside.classList.remove("open");
        navToggleBtn.classList.remove("open");
        allSections.forEach((sec) => {
          sec.classList.remove("open");
        });
      });
    });
  }
}
