import data from "../data.json" with { type: "json" };

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
          <input type="checkbox" />
          <span class="toggle-track"></span>
        </label>
      </div>
    </div>
  `;
});

document.querySelector(".js-card-items").innerHTML = html;
