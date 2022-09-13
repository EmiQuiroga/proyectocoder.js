//Plantilla de productos

/*//Productos de la tienda
const productoAceiteCalendula = new Producto(
    "Aceite esencial de Caléndula",
    900,
  1,
  "aceites"
);
const productoAceiteCanela = new Producto(
  "Aceite esencial de Canela",
  700,
  2,
  "aceites"
);
const productoAceiteNaranja = new Producto(
  "Aceite esencial de Naranja",
  700,
  3,
  "aceites"
);
const productoAmatista = new Producto("Piedra Amatista", 800, 4, "piedras");
const productoCuarzo = new Producto("Piedra Cuarzo Blanco", 800, 5, "piedras");
const productoMixPiedras = new Producto(
  "Mix de piedras Sanación",
  1500,
  6,
  "piedras"
);
const productoBuda = new Producto("Buda para Altar", 850, 7, "altares");
const productoIncienso = new Producto(
  "Pirámide de Incienso",
  300,
  8,
  "sahumos"
);
const productoLimpieza = new Producto(
  "Combo Limpieza Energética",
  1800,
  9,
  "sahumos"
);
const productoVela = new Producto("Vela de Vainilla", 350, 10, "velas");
const productoVelon = new Producto("Velón de Soja", 480, 11, "velas");
const productoTresVelas = new Producto("Mix tres Velas", 900, 12, "velas");

//Array con los productos de la tienda
const arrayProductos = [
  productoAceiteCalendula,
  productoAceiteCanela,
  productoAceiteNaranja,
  productoAmatista,
  productoBuda,
  productoCuarzo,
  productoIncienso,
  productoLimpieza,
  productoMixPiedras,
  productoTresVelas,
  productoVela,
  productoVelon,
];

//Declaración de array vacío
let filtrado = [];

//Función para buscar productos por categorías
const buscardor = () => {
  categoria__seleccionada = prompt(
    "Categorias: velas / aceites / sahumos / altares / piedras . Ingrese la categoria que está buscando"
  );
  filtrado = arrayProductos.filter(
    (producto) => producto.categoria === categoria__seleccionada
  );
  console.log(filtrado);
};

//Llamado a la función
buscardor();

//Declaración de array vacío
const productos_nombres = [];

//Loop para enviar los nombres de los productos a un array y así poder comprobar si existen
for (let i = 0; i < arrayProductos.length; i++) {
  productos_nombres.push(arrayProductos[i].nombre);
}

//console.log(productos_nombres);

//Array vacío de carrito
const carrito = [];

//Función para agregar productos al carrito en caso de que el producto exista
const agregar_al_carrito = () => {
  let producto_agregado = prompt(
    "Ingrese el producto que desea añadir al carrito"
  );
  if (productos_nombres.includes(producto_agregado)) {
    carrito.push(producto_agregado);
  } else {
    alert("Lo siento, este producto no existe");
  }
};

console.log(carrito);

//Llamado a la función
agregar_al_carrito();
*/
class Producto {
  constructor(nombre, precio, id, categoria, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
    this.categoria = categoria;
    this.imagen = imagen;
  }
}

const productos_tienda = [
  {
    nombre: "Aceite esencial de Caléndula",
    precio: 900,
    id: 1,
    categoria: "aceites",
    imagen: "",
  },
  {
    nombre: "Aceite esencial de Canela",
    precio: 900,
    id: 2,
    categoria: "aceites",
    imagen: "",
  },
  {
    nombre: "Aceite esencial de Naranja",
    precio: 900,
    id: 3,
    categoria: "aceites",
    imagen: "",
  },
  {
    nombre: "Piedra Amatista",
    precio: 600,
    id: 4,
    categoria: "piedras",
    imagen: "",
  },
  {
    nombre: "Piedra Cuarzo Blanco",
    precio: 500,
    id: 5,
    categoria: "piedras",
    imagen: "",
  },
  {
    nombre: "Mix Piedras Sanación",
    precio: 1200,
    id: 6,
    categoria: "piedras",
    imagen: "",
  },
  {
    nombre: "Buda de Yeso",
    precio: 800,
    id: 7,
    categoria: "altares",
    imagen: "",
  },
  {
    nombre: "Pirámide de Incienso",
    precio: 300,
    id: 8,
    categoria: "sahumos",
    imagen: "",
  },
  {
    nombre: "Mix Limpieza Energética",
    precio: 1800,
    id: 9,
    categoria: "sahumos",
    imagen: "",
  },
  {
    nombre: "Vela de Vainilla",
    precio: 500,
    id: 10,
    categoria: "velas",
    imagen: "",
  },
  {
    nombre: "Velón de Soja",
    precio: 500,
    id: 11,
    categoria: "velas",
    imagen: "",
  },
  {
    nombre: "Mix Tres Velas",
    precio: 900,
    id: 12,
    categoria: "velas",
    imagen: "",
  },
];
