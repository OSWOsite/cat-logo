const productos = [
  {
    nombre: "Juego de vasos de vidrio",
    precio: 12.99,
    imagen: "https://images.unsplash.com/photo-1588854337114-4f5b3d84ecfd?w=400"
  },
  {
    nombre: "Taza cerámica blanca",
    precio: 6.5,
    imagen: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=400"
  },
  {
    nombre: "Sartén antiadherente",
    precio: 24.99,
    imagen: "https://images.unsplash.com/photo-1603721742752-3b27f95a0f26?w=400"
  },
  {
    nombre: "Cuchillo de cocina profesional",
    precio: 18.75,
    imagen: "https://images.unsplash.com/photo-1621293954902-0cfedc31a109?w=400"
  }
];

const contenedor = document.getElementById("productos");
const itemsCarrito = document.getElementById("itemsCarrito");
const totalElemento = document.getElementById("total");

let carrito = [];

productos.forEach((producto, index) => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio.toFixed(2)}</p>
    <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
  `;
  contenedor.appendChild(div);
});

function agregarAlCarrito(indice) {
  carrito.push(productos[indice]);
  actualizarCarrito();
}

function actualizarCarrito() {
  itemsCarrito.innerHTML = "";
  let total = 0;
  carrito.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    itemsCarrito.appendChild(li);
    total += item.precio;
  });
  totalElemento.textContent = total.toFixed(2);
}
