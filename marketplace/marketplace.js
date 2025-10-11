const coffeeTypes = [
  "Ethiopian Yirgacheffe", "Colombian medium roast", "Italian-style dark roast", "Brazilian bean", 
  "Central American blend ", "Panama Geisha", 
];

const coffeeImages = {
  "Ethiopian Yirgacheffe": "../imgs/product imgs/yirgacheffe-1-1159x2048.png.webp",
  "Americano": "../imgs/Rezepteimgs/IMG_0022.WEBP",
  "Latte": "../imgs/Rezepteimgs/IMG_0023.WEBP",
  "Cappuccino": "../imgs/Rezepteimgs/IMG_0024.JPG",
};

const coffeeList = document.getElementById("coffeeList");
const searchInput = document.getElementById("searchInput");

function renderCoffeeList(filter = "") {
  coffeeList.innerHTML = "";

  coffeeTypes.forEach(coffee => {
    if (coffee.toLowerCase().includes(filter.toLowerCase())) {
      const li = document.createElement("li");

      const box = document.createElement("div");
      box.className = "coffee-box";

      const img = document.createElement("img");
      img.src = coffeeImages[coffee] || "../imgs/default.jpg";
      img.alt = coffee;

      const title = document.createElement("h3");
      title.textContent = coffee;

      box.appendChild(img);
      box.appendChild(title);

      // Klickverhalten auf Detailseite
      box.addEventListener("click", () => {
        window.location.href = `${coffee.toLowerCase().replace(/\s+/g, '-')}.html`;
      });

      li.appendChild(box);
      coffeeList.appendChild(li);
    }
  });
}

renderCoffeeList();

searchInput.addEventListener("input", () => {
  renderCoffeeList(searchInput.value);
});

// Wait for the page to be ready
document.addEventListener('DOMContentLoaded', () => {
  const homeBtn = document.getElementById('homeBtn');
  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      // Simple relative navigation – adjust if you store home in a different folder
      window.location.href = '/index.html';
    });
  }
});
