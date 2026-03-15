import data from "../data.json" with { type: "json" };

renderAllCards();

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

function removeFocusClass() {
  navButtons.forEach((button) => {
    button.classList.remove("focus");
  });
}

function renderCards(data) {
  let html = "";

  data.forEach((item, index) => {
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
          <input type="checkbox" class="js-checkbox" data-index="${index}" ${item.isActive ? "checked" : ""} />
          <span class="toggle-track"></span>
        </label>
      </div>
    </div>
  `;
  });
  document.querySelector(".js-card-items").innerHTML = html;
}

// Toggle listeners
document.querySelectorAll(".js-checkbox").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const index = parseInt(checkbox.dataset.index);
    data[index].isActive = checkbox.checked;
  });
  renderCards(data);
});

function renderAllCards() {
  renderCards(data);
}

function renderActiveCards() {
  renderCards(data.filter((item) => item.isActive));
}

function renderInactiveCards() {
  renderCards(data.filter((item) => !item.isActive));
}

// Toggling between light and dark modes
document.querySelector(".js-theme-button").addEventListener("click", () => {
  console.log("theme button clicked ");
});
