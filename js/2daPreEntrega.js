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

//Agrego un producto al array con el método push
productos.push({
  nombre: "Mix Tres Velas",
  precio: 900,
  id: 12,
  categoria: "velas",
  imagen: "assets/productoTresVelas.png",
});

//Función para mostrar los productos del array en el DOM
const mostrar_productos = () => {
  let contenedor = document.getElementById("productosTienda");

  productos.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-md-6", "col-lg-6");
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
let modal_carrito = document.getElementById("cart");

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
    <button class= "btn btn-primary" id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>
    `;
    modal_carrito.appendChild(carrito_contenedor);
  });
  const total_contenedor = document.createElement("div");
  total_contenedor.className = "totalCarrito";
  total_contenedor.innerHTML = `<div class = "total"> Total $ ${total}</div>
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
  const compraFinalizada = `<div class="compra-finalizada"><p class="compra_final">GRACIAS POR COMPRAR EN HÉCATE, tu compra es de ${total}</p></div>`;
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
  console.log(cliente1);
  mensajeCliente(cliente1);

  //Guardar información del cliente en localStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("email", email);
};

//Añadir un evento al botón
boton.addEventListener("click", suscripcionCliente);

//Eliminar formulario y mostrar un mensaje al cliente que se suscribió
const mensajeCliente = () => {
  let formulario = document.getElementById("form_suscripcion");
  formulario.innerHTML = "";

  let nuevoMensaje = document.createElement("div");

  nuevoMensaje.innerHTML = "";
  formulario.appendChild(nuevoMensaje);
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
