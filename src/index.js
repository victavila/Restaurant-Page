import createHeader from "./header";
import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";

createHeader();
createHomePage();

const content = document.querySelector("#content");
const homeLink = document.querySelector(".home");
const menuLink = document.querySelector(".menu");
const contactLink = document.querySelector(".contact");

homeLink.classList.add("active");

function removeChildNodes(parent) {
  while (parent.childNodes.length > 1) {
    parent.removeChild(parent.lastChild);
  }
}

homeLink.addEventListener("click", () => {
  removeChildNodes(content);
  createHomePage();
  menuLink.classList.remove("active");
  contactLink.classList.remove("active");
  homeLink.classList.add("active");
});

menuLink.addEventListener("click", () => {
  removeChildNodes(content);
  createMenuPage();
  homeLink.classList.remove("active");
  contactLink.classList.remove("active");
  menuLink.classList.add("active");
});

contactLink.addEventListener("click", () => {
  removeChildNodes(content);
  createContactPage();
  homeLink.classList.remove("active");
  menuLink.classList.remove("active");
  contactLink.classList.add("active");
});
