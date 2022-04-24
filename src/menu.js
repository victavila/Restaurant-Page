function createMenuPage() {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("menu-container");

  const americanoCard = createItemCard("Americano");

  const cappuccinoCard = createItemCard("Cappuccino");

  const espressoCard = createItemCard("Espresso");

  const latteCard = createItemCard("Latte");

  const macchiatoCard = createItemCard("Macchiato");

  const mochaCard = createItemCard("Mocha");

  container.append(
    americanoCard,
    cappuccinoCard,
    espressoCard,
    latteCard,
    macchiatoCard,
    mochaCard
  );
  content.appendChild(container);
}

function createItemCard(name) {
  const itemCard = document.createElement("div");
  itemCard.classList.add("coffee-card");

  const title = document.createElement("h2");
  title.textContent = `${name}`;
  title.classList.add("coffee-title");

  const image = document.createElement("img");
  image.src = `./images/coffees/${name.toLowerCase()}.jpg`;
  image.alt = `${name}`;
  image.classList.add("coffee-img");

  itemCard.append(title, image);

  return itemCard;
}

export default createMenuPage;
