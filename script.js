const navbar = document.querySelector(".navbar");
const about = document.querySelector(".about");
const prog_container = document.querySelector(".prog-container");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");

window.addEventListener("scroll", () => {
  if (window.scrollY > about.offsetTop - 40) {
    navbar.classList.add("black");
  } else {
    navbar.classList.remove("black");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > prog_container.offsetTop - 500) {
    html.classList.add("html-ani");
    if (window.scrollY > prog_container.offsetTop - 400) {
      css.classList.add("css-ani");
    }
    if (window.scrollY > prog_container.offsetTop - 300) {
      js.classList.add("js-ani");
    }
  }
});
