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
  "Espresso": "https://images.unsplash.com/photo-1596952954288-16862d37405b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXNwcmVzc298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  "Americano": "https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW5vJTIwY29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
  "Latte": "https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGF0dGUlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  "Cappuccino": "https://images.unsplash.com/photo-1710173472469-9d28e977914c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  "Flat White": "https://images.pexels.com/photos/30556593/pexels-photo-30556593.jpeg",
  "Macchiato": "https://images.pexels.com/photos/10996412/pexels-photo-10996412.jpeg",
  "Mocha": "https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg",
  "Ristretto": "https://images.unsplash.com/photo-1648524168748-0ff4ac3c79a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlzdHJldHRvJTIwY29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
  "Long Black": "https://images.unsplash.com/photo-1551490434-bf8bc9eab4a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZyUyMGJsYWNrJTIwY29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
  "Cortado": "https://images.unsplash.com/photo-1670217756837-34134e2e9e60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ydGFkbyUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  "Affogato": "https://images.unsplash.com/photo-1638543284847-3a6bed3e1689?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZmb2dhdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  "Irish Coffee": "https://images.unsplash.com/photo-1549057219-0c0be1287566?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJpc2glMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  "Turkish Coffee": "https://images.unsplash.com/photo-1506778020041-0ea35027d019?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVya2lzaCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  "Vienna": "https://images.unsplash.com/photo-1722415561249-f3477d3e4a5b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmllbm5hJTIwY29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
  "Lungo": "https://images.pexels.com/photos/23938280/pexels-photo-23938280.jpeg",
  "Cold Brew": "https://images.unsplash.com/photo-1610094338066-f1bf3f45dbf7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMGJyZXclMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  "Nitro Coffee": "https://images.unsplash.com/photo-1619640998316-b5abb7564ed3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bml0cm8lMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  "Doppio": "https://images.pexels.com/photos/12065519/pexels-photo-12065519.jpeg",
  "Red Eye": "https://images.unsplash.com/photo-1695269727996-c795df344d0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlZCUyMGV5ZSUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  "Black Eye": "https://images.unsplash.com/photo-1726514730465-1cc25083bba2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2tleWUlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  "Iced Coffee": "https://images.unsplash.com/photo-1505702522758-df279c871655?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlZGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  "Mazagran": "https://images.unsplash.com/photo-1676855218461-60f1ea499112?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWF6YWdyYW4lMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  "Coffee Milk": "https://images.unsplash.com/photo-1587462970332-9f0516628dcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsayUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  "Cafe au Lait": "https://images.unsplash.com/photo-1563390323222-b0593bfc85c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhZmUlMjBhdSUyMGxhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  "Breve": "https://images.unsplash.com/photo-1734120284108-e5e0ecdb738b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJldmUlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  "Chicory Coffee": "https://media.istockphoto.com/id/636355052/de/foto/chicory-getr%C3%A4nk.jpg?b=1&s=612x612&w=0&k=20&c=jkbPREJmcZ2Qf846tod3ASjKdsho1miHvSXf3eVaxZY=",
  "Drip Coffee": "https://images.pexels.com/photos/21572307/pexels-photo-21572307.jpeg",
  "Percolator Coffee": "https://plus.unsplash.com/premium_photo-1755594044981-e7963acdd76d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fFBlcmNvbGF0b3IlMjBDb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "Frappuccino": "https://images.unsplash.com/photo-1648910523893-6e04aa9e4954?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJhcHB1Y2Npbm9Db2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "Glace": "https://images.unsplash.com/photo-1614227373539-d763a95a31a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2xhY2VDb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "Espresso Con Panna": "https://images.unsplash.com/photo-1578314675325-450f4ea07f4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEVzcHJlc3NvJTIwQ29uJTIwUGFubmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "Café Bombón": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FmJUMzJUE5JTIwQm9tYiVDMyVCM258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "Café Cubano": "https://images.unsplash.com/photo-1545341122-64b73393fa64?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FmJUMzJUE5JTIwQ3ViYW5vfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  "Café de Olla": "https://images.unsplash.com/photo-1716972016624-872990cf2ef7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fENhZiVDMyVBOSUyMGRlJTIwT2xsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  "Pharisäer Kaffee": "https://images.unsplash.com/photo-1669217508085-dcc2614636c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBoYXJpcyVDMyVBNGVyJTIwS2FmZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  "Café Zorro": "https://images.unsplash.com/photo-1642316201223-2331fd52efa9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhZiVDMyVBOSUyMFpvcnJvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  "Espresso Romano": "https://images.pexels.com/photos/34315411/pexels-photo-34315411.jpeg",
  "Bulletproof Coffee": "https://images.unsplash.com/photo-1639670651107-06d8c2841a75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QnVsbGV0cHJvb2YlMjBDb2ZmZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "Café Brûlot": "https://images.unsplash.com/photo-1581243440487-3d9642a6a11c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FmJUMzJUE5JTIwQnIlQzMlQkJsb3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "Bicerin": "../imgs/Rezepteimgs/Bicerin.png",
  "Café Touba": "https://images.unsplash.com/photo-1640555051787-7d2a30e43863?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FmJUMzJUE5JTIwVG91YmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
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
