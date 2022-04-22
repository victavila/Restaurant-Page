function createHeader() {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const title = document.createElement("h1");
  const ul = document.createElement("ul");
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  title.textContent = "Title Placeholder";
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  ul.append(home, menu, contact);
  nav.append(title, ul);
  header.appendChild(nav);
  content.appendChild(header);
}

export default createHeader;
