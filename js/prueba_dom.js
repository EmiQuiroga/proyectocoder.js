//Array de productos
const productos = [
  {
    nombre: "Aceite esencial de Caléndula",
    precio: 900,
    id: 1,
    categoria: "aceites",
    imagen: "assets/productoAceiteCaléndula.png",
  },
  {
    nombre: "Aceite esencial de Canela",
    precio: 900,
    id: 2,
    categoria: "aceites",
    imagen: "assets/productoAceiteCanela.png",
  },
  {
    nombre: "Aceite esencial de Naranja",
    precio: 900,
    id: 3,
    categoria: "aceites",
    imagen: "assets/productoAceiteNaranja.png",
  },
  {
    nombre: "Piedra Amatista",
    precio: 600,
    id: 4,
    categoria: "piedras",
    imagen: "assets/productoAmatista.png",
  },
  {
    nombre: "Piedra Cuarzo Blanco",
    precio: 500,
    id: 5,
    categoria: "piedras",
    imagen: "assets/productoCuarzoBlanco.png",
  },
  {
    nombre: "Mix Piedras Sanación",
    precio: 1200,
    id: 6,
    categoria: "piedras",
    imagen: "assets/productoMixPiedras.png",
  },
  {
    nombre: "Buda de Yeso",
    precio: 800,
    id: 7,
    categoria: "altares",
    imagen: "assets/productoBuda.png",
  },
  {
    nombre: "Pirámide de Incienso",
    precio: 300,
    id: 8,
    categoria: "sahumos",
    imagen: "assets/productoIncienso.png",
  },
  {
    nombre: "Mix Limpieza Energética",
    precio: 1800,
    id: 9,
    categoria: "sahumos",
    imagen: "assets/productoComboSahumo.png",
  },
  {
    nombre: "Vela de Vainilla",
    precio: 500,
    id: 10,
    categoria: "velas",
    imagen: "assets/productoVela.png",
  },
  {
    nombre: "Velón de Soja",
    precio: 500,
    id: 11,
    categoria: "velas",
    imagen: "assets/productoVelonSoja.png",
  },
 
];

productos.push(
  {
   nombre: "Mix Tres Velas",
   precio: 900,
   id: 12,
   categoria: "velas",
   imagen: "assets/productoTresVelas.png",
 }
);


//Función para mostrar los productos del array en el DOM
const mostrar_productos = () => {
  let contenedor = document.getElementById("productosTienda");

  productos.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-md-4", "col-lg-4");
    card.innerHTML = `<img src="${producto.imagen}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.precio}</p>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
  </div>`;
    contenedor.appendChild(card);
  });
};

mostrar_productos();





