const productos = [
  {
    nombre: "Aceite esencial de Caléndula",
    precio: 900,
    id: 1,
    categoria: "aceites",
    imagen: "assets/productoAceiteCaléndula.png",
    etiqueta: "aceite, esencia, aceite esencial, aceites, esencias"
  },
  {
    nombre: "Aceite esencial de Canela",
    precio: 900,
    id: 2,
    categoria: "aceites",
    imagen: "assets/productoAceiteCanela.png",
    etiqueta: "aceite, esencia, aceite esencial, aceites, esencias"
  },
  {
    nombre: "Aceite esencial de Naranja",
    precio: 900,
    id: 3,
    categoria: "aceites",
    imagen: "assets/productoAceiteNaranja.png",
    etiqueta: "aceite, esencia, aceite esencial, aceites, esencias"
  },
  {
    nombre: "Piedra Amatista",
    precio: 600,
    id: 4,
    categoria: "piedras",
    imagen: "assets/productoAmatista.png",
    etiqueta: "piedras, piedra, cuarzo, gema, gemas, cuarzos, amatista"
  },
  {
    nombre: "Piedra Cuarzo Blanco",
    precio: 500,
    id: 5,
    categoria: "piedras",
    imagen: "assets/productoCuarzoBlanco.png",
    etiqueta: "piedras, piedra, cuarzo, gema, gemas, cuarzos, cuarzo blanco"
  },
  {
    nombre: "Mix Piedras Sanación",
    precio: 1200,
    id: 6,
    categoria: "piedras",
    imagen: "assets/productoMixPiedras.png",
    etiqueta: "piedras, piedra, cuarzo, gema, gemas, cuarzos, sanacion"
  },
  {
    nombre: "Buda de Yeso",
    precio: 800,
    id: 7,
    categoria: "altares",
    imagen: "assets/productoBuda.png",
    etiqueta: "altar, altares, buda, amuleto"
  },
  {
    nombre: "Pirámide de Incienso",
    precio: 300,
    id: 8,
    categoria: "sahumos",
    imagen: "assets/productoIncienso.png",
    etiqueta: "sahumerio, sahumerios, sahumo, sahumos, incienso"
  },
  {
    nombre: "Mix Limpieza Energética",
    precio: 1800,
    id: 9,
    categoria: "sahumos",
    imagen: "assets/productoComboSahumo.png",
    etiqueta: "sahumerio, sahumerios, sahumo, sahumos, incienso, palo santo, piedras, piedra, cuarzo"
  },
  {
    nombre: "Vela de Vainilla",
    precio: 500,
    id: 10,
    categoria: "velas",
    imagen: "assets/productoVela.png",
    etiqueta: "vela, velas, vela de vainilla, hogar, altar"
  },
  {
    nombre: "Velón de Soja",
    precio: 500,
    id: 11,
    categoria: "velas",
    imagen: "assets/productoVelonSoja.png",
    etiqueta: "vela, velas, hogar, altar, velon"
  },
];

//Agrego un producto al array con el método push
productos.push(
  {
    nombre: "Mix Tres Velas",
    precio: 900,
    id: 12,
    categoria: "velas",
    imagen: "assets/productoTresVelas.png",
    etiqueta: "vela, velas, vela de vainilla, hogar, altar"
  },
  {
    nombre: "Tarot de Marsella",
    precio: 2000,
    id: 13,
    categoria: "tarot",
    imagen: "assets/tarot4.png",
    etiqueta: "tarot, oraculo, oraculos, cartas"
  },
  {
    nombre: "Tarot Rider",
    precio: 2000,
    id: 14,
    categoria: "tarot",
    imagen: "assets/tarot1.png",
    etiqueta: "tarot, oraculo, oraculos, cartas"
  },
  {
    nombre: "Tarot Holográfico",
    precio: 2500,
    id: 15,
    categoria: "tarot",
    imagen: "assets/tarot2.png",
    etiqueta: "tarot, oraculo, oraculos, cartas"
  },
  {
    nombre: "Tarot Egipcio",
    precio: 2500,
    id: 16,
    categoria: "tarot",
    imagen: "assets/tarot3.png",
    etiqueta: "tarot, oraculo, oraculos, cartas"
  }
);

//Función para mostrar los productos del array en el DOM
const mostrar_productos = () => {
  let contenedor = document.getElementById("productosTienda");

  productos.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-md-6", "col-lg-4");
    card.innerHTML = `<img src="${producto.imagen}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a class="btn btn-primary" id="boton" onClick="agregar_al_carrito(${indice})">Añadir al carrito</a>
    </div>`;
    contenedor.appendChild(card);
  });
};

mostrar_productos();

//Carrito
let cart = [];
let modal_carrito = document.getElementById("carrito");

//Función para agregar los productos al carrito
const agregar_al_carrito = (indice) => {
  const indiceEncontradoCarrito = cart.findIndex((elemento) => {
    return elemento.id === productos[indice].id;
  });
  if (indiceEncontradoCarrito === -1) {
    const productoAgregar = productos[indice];
    productoAgregar.cantidad = 1;
    cart.push(productoAgregar);
    mostrar_carrito();
  } else {
    cart[indiceEncontradoCarrito].cantidad += 1;
    mostrar_carrito();
  }
};
//let subtotal= 0;
let total = 0;

//Función para que se muestre el carrito con los productos seleccionados

showProds = () => {
  cart.forEach((producto, indice) => {
    total = total + producto.precio * producto.cantidad;
    const carrito_contenedor = document.createElement("div");
    carrito_contenedor.className = "productoCarrito";
    carrito_contenedor.innerHTML = `<img class="car-img" src="${
      producto.imagen
    }"/>
    <div class="product-details">${producto.nombre}</div>
    <div class="product-details"> Cantidad: ${producto.cantidad}</div>
    <div class="product-details">Precio: $ ${producto.precio}</div>
    <div class="product-details">Subtotal: $ ${
      producto.precio * producto.cantidad
    }</div>
    <button class= "btn btn-primary" id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>`;
    modal_carrito.appendChild(carrito_contenedor);
  });
  const total_contenedor = document.createElement("div");
  total_contenedor.className = "totalCarrito";
  total_contenedor.innerHTML = `<div class = "total">$${total}</div>
  <button class= "btn btn-primary" id="finalizar" onClick = "finalizarCompra()"> Finalizar Compra </button>`;
  modal_carrito.appendChild(total_contenedor);
};

//if else optimizado con un operador ternario
const mostrar_carrito = () => {
  modal_carrito.className = "cart";
  modal_carrito.innerHTML = "";
  cart.length > 0 ? showProds() : modal_carrito.classList.remove("cart");
};

//Función para eliminar productos del carrito
const removeProduct = (indice) => {
  cart.splice(indice, 1);
  mostrar_carrito();
};

//Función para finalizar la compra
const finalizarCompra = () => {
  const total = document.getElementsByClassName("total")[0].innerHTML;
  modal_carrito.innerHTML = "";
  const compraFinalizada = `<div class="compra_finalizada"><img src="assets/logo.png" class="card-img-top" id="logoFin"><p class="compra_final">GRACIAS POR COMPRAR EN HÉCATE, tu compra es de ${total}</p></div>`;
  modal_carrito.innerHTML = compraFinalizada;
};

//Constructor del cliente que va a llenar el formulario
class Cliente {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

let boton = document.getElementById("enviar_info");

//Función para guardar la información del cliente en una variable
const suscripcionCliente = () => {
  let nombre = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let cliente1 = new Cliente(nombre, email);
  nuevoForm();

  //Guardar información del cliente en localStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("email", email);
};

//Añadir un evento al botón
boton.addEventListener("click", suscripcionCliente);

//Eliminar formulario una vez que el cliente se suscribió
const nuevoForm = () => {
  let formulario = document.getElementById("form");
  formulario.innerHTML = "";

  let nuevoFormulario = document.createElement("div");

  nuevoFormulario.innerHTML = "";
  formulario.appendChild(nuevoFormulario);
};

//Recuperar datos desde LocalStorage
const obtenerDatos = () => {
  let nombre = JSON.stringify(localStorage.getItem("nombre"));
  let email = JSON.stringify(localStorage.getItem("email"));

  console.log(nombre);
  console.log(email);
};

obtenerDatos();

//Aplicando librería sweetalert

const button = document.getElementById("enviar_info");

button.addEventListener("click", () => {
  Swal.fire({
    title: "¡Gracias!",
    text: "Revisá tu correo y disfrutá nuestro regalito 💜",

    confirmButtonText: "Aceptar",
    imageUrl: "assets/logo.png",
    imageWidth: 200,
    imageHeight: 200,
  });
});

//Traer productos al DOM utilizando Fetch
var contenido = document.getElementById("products");

function traer() {
  fetch("../products.json")
    .then((res) => res.json())
    .then((productosRecientes) => {
      //console.log(productosRecientes);
      tabla(productosRecientes);
    });
}

traer();

function tabla(productosRecientes) {
  console.log(productosRecientes);
  for (let producto of productosRecientes) {
    contenido.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
    </div>
    </div>`;
  }
}

//Función para crear un buscador de productos
const buscador = document.getElementById("formBuscar");
const bot = document.getElementById("botonBuscar");
const resultado = document.getElementById("resultado");

const filtrar = () => {
  resultado.innerHTML = "";
  const texto = buscador.value.toLowerCase();

  for (let producto of productos) {
    let etiquetas = producto.etiqueta.toLowerCase();
    if (etiquetas.indexOf(texto) !== -1) {
      resultado.innerHTML +=
        //`<li>${producto.nombre} -Precio: ${producto.precio}</li>`
        `<div class="card style="width: 18rem;">
<img src="${producto.imagen}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a class="btn btn-primary" id="boton" onClick="agregar_al_carrito()">Añadir al carrito</a>
    </div>
    </div>`;
    }
  }

  if (resultado.innerHTML === "") {
    resultado.innerHTML += `<h4>Producto no encontrado...</h4>`;
  }
};

bot.addEventListener("click", filtrar);



