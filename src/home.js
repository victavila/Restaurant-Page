function createHomePage() {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  const title = document.createElement("h1");
  const text = document.createElement("p");
  const menuBtn = document.createElement("button");

  container.classList.add("container");
  title.classList.add("title");
  text.classList.add("text");
  menuBtn.classList.add("menu-btn");

  title.textContent = "Comfy Coffee";
  text.textContent = "Some slogan or info";
  menuBtn.textContent = "Menu";

  container.append(title, text, menuBtn);
  content.appendChild(container);
}

export default createHomePage;
