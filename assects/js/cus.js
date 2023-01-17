const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkSwitch = document.querySelector("#dark-switch");
const darkText = document.querySelector("#dark-text");
const darkChangeText = document.querySelector("#dark-text-change");
const html = document.documentElement;
let isDarkMode = false;

// Switch theme function
const toggleTheme = () => {
  isDarkMode = !isDarkMode;
  switchTheme();
};

const toDark = () => {
  darkSwitchIcon.classList.add("translate-x-full", "rotate-[360deg]");
  darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-900"></i>`;
  // darkChangeText.innerText = 'Dark'
  darkSwitch.classList.remove("bg-slate-900");
  darkSwitch.classList.add("bg-slate-900");
  localStorage.setItem("data-theme", "dark");
  html.classList.add("dark");
  darkText.classList.add("-translate-x-7");
  darkText.innerText = "ON";
};

const toLight = () => {
  darkSwitchIcon.classList.remove("translate-x-full", "bg-slate-900");
  // darkChangeText.innerText = 'Light'
  darkSwitch.classList.remove("bg-slate-900");
  darkSwitch.classList.add("bg-slate-900");
  localStorage.removeItem("data-theme");
  html.classList.remove("dark");
  darkText.classList.remove("-translate-x-7");
  darkText.innerText = "OFF";
  darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  setTimeout(() => {
    darkSwitchIcon.classList.remove("rotate-[360deg]");
  }, 200);
};

const switchTheme = () => {
  isDarkMode ? toDark() : toLight();
  // or
  // if (isDarkMode) {
  //     toDark()
  // } else {
  //     toLight()
  // }
};

// If you do reload the webpage,
// doesn't change you choose theme.
// This `dataTheme` function save permentaly choose theme.

const dataTheme = localStorage.getItem("data-theme");

dataTheme === "dark" ? toDark() : toLight();
// or
// if(dataTheme === 'dark') {
//     toDark()
// } else {
//     toLight()
// }

//way point
const fixedNav = document.getElementById("fixedNav");
var waypoint = new Waypoint({
  element: document.getElementById("why"),
  handler: function (direction) {
    if (direction === "down") {
      fixedNav.classList.add(
        "fixed",
        "top-0",
        "animate__fadeInDown",
        "shadow-xl",
        "z-10",
      );
    } else {
      fixedNav.classList.remove(
        "fixed",
        "top-0",
        "animate__fadeInDown",
        "shadow-xl",
        "z-10",
      );
    }
  },
  offset: "20%",
});

//scrool active

window.addEventListener("scroll", scrollActive);
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset; // scroll height
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight, // get current height
      sectionTop = current.offsetTop - 58, // get current section of height
      sectionId = current.getAttribute("id"); // get current section id
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector("a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

//loading

window.addEventListener("load", () => {
  document.querySelector(".loading").style.display = "none";
});
