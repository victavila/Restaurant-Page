function createContactPage() {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("contact-container");

  const address = createCard("Address", "1234 Fake Street, City, STATE");

  const hours = createCard(
    "Hours",
    "Monday-Thursday: 8am - 6pm\r\nFriday-Sunday: 9am - 5pm"
  );

  const contact = createCard(
    "Contact Information",
    "Phone: (123) 456 7890\r\nEmail: fakeemail@notreal.com"
  );

  container.append(address, hours, contact);
  content.appendChild(container);
}

function createCard(name, info) {
  const contactCard = document.createElement("div");
  contactCard.classList.add("contact-card");

  const heading = document.createElement("h2");
  heading.textContent = `${name}`;

  const text = document.createElement("p");
  text.textContent = `${info}`;

  contactCard.append(heading, text);

  return contactCard;
}

export default createContactPage;
