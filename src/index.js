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

function removeChildNodes(parent) {
  while (parent.childNodes.length > 1) {
    parent.removeChild(parent.lastChild);
  }
}

homeLink.addEventListener("click", () => {
  removeChildNodes(content);
  createHomePage();
});

menuLink.addEventListener("click", () => {
  removeChildNodes(content);
  createMenuPage();
});

contactLink.addEventListener("click", () => {
  removeChildNodes(content);
  createContactPage();
});
