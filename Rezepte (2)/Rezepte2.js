const coffeeTypes = [
  "Espresso", "Americano", "Latte", "Cappuccino", "Flat White",
  "Macchiato", "Mocha", "Ristretto", "Long Black", "Cortado",
  "Affogato", "Irish Coffee", "Turkish Coffee", "Vienna", "Lungo",
  "Cold Brew", "Nitro Coffee", "Doppio", "Red Eye", "Black Eye",
  "Iced Coffee", "Mazagran", "Coffee Milk", "Cafe au Lait", "Breve",
  "Chicory Coffee", "Drip Coffee", "Percolator Coffee", "Frappuccino", "Glace",
  "Espresso Con Panna", "Café Bombón", "Café Cubano", "Café de Olla", "Pharisäer Kaffee",
  "Café Zorro", "Espresso Romano", "Bulletproof Coffee", "Café Brûlot", "Bicerin",
  "Café Touba", "Café Corretto", "Palazzo", "Café Shakerato", "Marocchino",
  "Café Rápido y Sucio", "Kopi Tubruk", "Kopi Joss", "Kopi Luwak", "Ca Phe Trung",
  "Ca Phe Sua Da", "Eiskaffee", "Yuanyang", "Café del Tiempo", "Café Liégeois"
];

const coffeeImages = {
  "Espresso": "../imgs/Rezepteimgs/IMG_0019.JPG",
  "Americano": "../imgs/Rezepteimgs/IMG_0022.WEBP",
  "Latte": "../imgs/Rezepteimgs/IMG_0023.WEBP",
  "Cappuccino": "../imgs/Rezepteimgs/IMG_0024.JPG",
  "Flat White": "../imgs/Rezepteimgs/IMG_0025.JPG",
  "Macchiato": "../imgs/Rezepteimgs/IMG_0026.WEBP",
  "Mocha": "../imgs/Rezepteimgs/IMG_0027.JPG",
  "Ristretto": "../imgs/Rezepteimgs/IMG_0028.JPG",
  "Long Black": "../imgs/Rezepteimgs/IMG_0019.WEBP",
  "Cortado": "../imgs/Rezepteimgs/IMG_0030.JPG",
  "Affogato": "../imgs/Rezepteimgs/IMG_0031.JPG",
  "Irish Coffee": "../imgs/Rezepteimgs/IMG_0032.JPG",
  "Turkish Coffee": "../imgs/Rezepteimgs/IMG_0033.JPG",
  "Vienna": "../imgs/Rezepteimgs/IMG_0034.JPG",
  "Lungo": "../imgs/Rezepteimgs/IMG_0018.WEBP",
  "Cold Brew": "../imgs/Rezepteimgs/IMG_0036.JPG",
  "Nitro Coffee": "../imgs/Rezepteimgs/IMG_0037.JPG",
  "Doppio": "../imgs/Rezepteimgs/IMG_0038.JPG",
  "Red Eye": "../imgs/Rezepteimgs/IMG_0039.JPG",
  "Black Eye": "../imgs/Rezepteimgs/IMG_0040.JPG",
  "Iced Coffee": "../imgs/Rezepteimgs/IMG_0041.JPG",
  "Mazagran": "../imgs/Rezepteimgs/IMG_0042.WEBP",
  "Coffee Milk": "../imgs/Rezepteimgs/IMG_0043.JPG",
  "Cafe au Lait": "../imgs/Rezepteimgs/IMG_0044.JPG",
  "Breve": "../imgs/Rezepteimgs/IMG_0045.JPG",
  "Chicory Coffee": "../imgs/Rezepteimgs/IMG_0046.JPG",
  "Drip Coffee": "../imgs/Rezepteimgs/IMG_0047.WEBP",
  "Percolator Coffee": "../imgs/Rezepteimgs/IMG_0048.JPG",
  "Frappuccino": "../imgs/Rezepteimgs/IMG_0049.WEBP",
  "Glace": "../imgs/Rezepteimgs/IMG_0050.AVIF",
  "Espresso Con Panna": "../imgs/Rezepteimgs/IMG_0051.JPG",
  "Café Bombón": "../imgs/Rezepteimgs/IMG_0052.JPG",
  "Café Cubano": "../imgs/Rezepteimgs/IMG_0053.JPG",
  "Café de Olla": "../imgs/Rezepteimgs/IMG_0054.JPG",
  "Pharisäer Kaffee": "../imgs/Rezepteimgs/IMG_0055.JPG",
  "Café Zorro": "../imgs/Rezepteimgs/IMG_0056.JPG",
  "Espresso Romano": "../imgs/Rezepteimgs/IMG_0057.JPG",
  "Bulletproof Coffee": "../imgs/Rezepteimgs/IMG_0058.JPG",
  "Café Brûlot": "../imgs/Rezepteimgs/IMG_0059.JPG",
  "Bicerin": "../imgs/Rezepteimgs/IMG_0060.JPG",
  "Café Touba": "../imgs/Rezepteimgs/IMG_0061.JPG",
  "Café Corretto": "../imgs/Rezepteimgs/IMG_0062.JPG",
  "Palazzo": "../imgs/Rezepteimgs/IMG_0063.JPG",
  "Café Shakerato": "../imgs/Rezepteimgs/IMG_0064.JPG",
  "Marocchino": "../imgs/Rezepteimgs/IMG_0065.JPG",
  "Café Rápido y Sucio": "../imgs/Rezepteimgs/IMG_0066.JPG",
  "Kopi Tubruk": "../imgs/Rezepteimgs/IMG_0067.JPG",
  "Kopi Joss": "../imgs/Rezepteimgs/IMG_0068.JPG",
  "Kopi Luwak": "../imgs/Rezepteimgs/IMG_0069.JPG",
  "Ca Phe Trung": "../imgs/Rezepteimgs/IMG_0070.JPG",
  "Ca Phe Sua Da": "../imgs/Rezepteimgs/IMG_0071.JPG",
  "Eiskaffee": "../imgs/Rezepteimgs/IMG_0072.JPG",
  "Yuanyang": "../imgs/Rezepteimgs/IMG_0073.JPG",
  "Café del Tiempo": "../imgs/Rezepteimgs/IMG_0074.JPG",
  "Café Liégeois": "../imgs/Rezepteimgs/IMG_0075.JPG"
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
