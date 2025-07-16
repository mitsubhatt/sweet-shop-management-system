class SweetShop {
  constructor() {
    this.sweets = [];
  }

  addSweet(sweet) {
    const requiredFields = ["name", "category", "price", "quantity"];
    for (let field of requiredFields) {
      if (!sweet[field]) {
        alert(`Missing field: ${field}`);
        return;
      }
    }

    if (this.sweets.some(s => s.name.toLowerCase() === sweet.name.toLowerCase())) {
      alert("Sweet already exists!");
      return;
    }

    this.sweets.push(sweet);
  }

  viewSweets() {
    return this.sweets;
  }

  deleteSweetByName(name) {
    const index = this.sweets.findIndex(s => s.name.toLowerCase() === name.toLowerCase());
    if (index === -1) {
      alert("Sweet not found!");
      return;
    }
    this.sweets.splice(index, 1);
  }
}

const shop = new SweetShop();

const form = document.getElementById("addSweetForm");
const sweetList = document.getElementById("sweetList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const category = document.getElementById("category").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);

  shop.addSweet({ name, category, price, quantity });

  renderSweets();
  form.reset();
});

function renderSweets() {
  const table = document.getElementById("sweetTable");
  const tableBody = document.getElementById("sweetTableBody");

  if (shop.viewSweets().length === 0) {
    table.style.display = "none";
    return;
  } else {
    table.style.display = "table";
  }

  tableBody.innerHTML = "";

  shop.viewSweets().forEach((sweet) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${sweet.name}</td>
      <td>${sweet.category}</td>
      <td>₹${sweet.price}</td>
      <td>${sweet.quantity}</td>
      <td><span class="delete-btn" onclick="deleteSweet('${sweet.name}')">Delete</span></td>
    `;

    tableBody.appendChild(row);
  });
}


window.deleteSweet = function(name) {
  shop.deleteSweetByName(name);
  renderSweets();
};
