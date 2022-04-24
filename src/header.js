function createHeader() {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  home.classList.add("home");
  menu.classList.add("menu");
  contact.classList.add("contact");

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  ul.append(home, menu, contact);
  nav.appendChild(ul);
  header.appendChild(nav);
  content.appendChild(header);
}

export default createHeader;
