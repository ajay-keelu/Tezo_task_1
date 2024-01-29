let toggle = document.querySelector(".toggle");
let navitems = document.querySelector(".navitems");
let fa = document.querySelector(".toggle>.fa");
toggle.addEventListener("click", () => {
  if (navitems.classList.contains("nav")) {
    navitems.classList.remove("nav");
  } else {
    navitems.classList.add("nav");
  }
  if (navitems.classList.contains("nav")) {
    fa.classList.remove("fa-bars");
    fa.classList.add("fa-x");
  } else {
    fa.classList.remove("fa-x");
    fa.classList.add("fa-bars");
  }
});
if (window.screen.width <= 850) {
  navitems.addEventListener("click", () => {
    if (navitems.classList.contains("nav")) {
      navitems.classList.remove("nav");
    } else {
      navitems.classList.add("nav");
    }
    if (navitems.classList.contains("nav")) {
      fa.classList.remove("fa-bars");
      fa.classList.add("fa-x");
    } else {
      fa.classList.remove("fa-x");
      fa.classList.add("fa-bars");
    }
  });
}
// window.addEventListener("resize", () => {
if (window.screen.width > 850) {
  if (navitems.classList.contains("nav")) {
    navitems.classList.remove("nav");
  }
  if (navitems.classList.contains("nav")) {
    fa.classList.remove("fa-bars");
    fa.classList.add("fa-x");
  } else {
    fa.classList.remove("fa-x");
    fa.classList.add("fa-bars");
  }
}
// });
// window.onscroll = () => {
//   let banner = document.querySelector("#banner").getBoundingClientRect();
//   if (banner.top < 0) {
//     document.querySelector("#header").style.boxShadow =
//       "0px 5px 10px 0 rgba(211, 211, 211, 0.363)";
//     document.querySelector("#header").style.background = "#fff";
//    // document.querySelector("#header").style.height = "95px";
//   } else {
//     document.querySelector("#header").style.background = "none";
//     document.querySelector("#header").style.height = "150px";
//     document.querySelector("#header").style.boxShadow = "none";
//     document.querySelector("#header").style.borderBottom = "none";
//   }
// };
