import data from "../data.json" with { type: "json" };

renderAllCards();

const activeCards = [];
const inactiveCards = [];

function renderAllCards() {
  let html = "";

  data.forEach((item) => {
    html += `
    <div class="card-item">
      <div class="image-details-container">
        <div class="image-container">
          <img
            src=".${item.logo}"
            alt="search bar and magnifying glass icon combos."
          />
        </div>
        <div class="details-container">
          <h2>${item.name}</h2>
          <p>
            ${item.description}
          </p>
        </div>
      </div>
      <div class="remove-toggle-container">
        <button type="button" class="remove-button">Remove</button>
        <label class="toggle">
          <input type="checkbox" class="js-checkbox" />
          <span class="toggle-track"></span>
        </label>
      </div>
    </div>
  `;
  });
  document.querySelector(".js-card-items").innerHTML = html;
}

function removeFocusClass() {
  navButtons.forEach((button) => {
    button.classList.remove("focus");
  });
}

const navButtons = document.querySelectorAll(".nav-item");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("focus")) {
      return;
    } else {
      removeFocusClass();
      button.classList.add("focus");
    }
    if (button.innerText === "All") {
      renderAllCards();
    } else if (button.innerText === "Active") {
      renderActiveCards();
    } else {
      renderInactiveCards();
    }
  });
});

function renderActiveCards(cards) {
  document.querySelector(".js-card-items").innerHTML =
    `<p>Loading Active Cards...</p>`;
}

function renderInactiveCards(cards) {
  document.querySelector(".js-card-items").innerHTML =
    `<p>Loading Inactive Cards...</p>`;
}
