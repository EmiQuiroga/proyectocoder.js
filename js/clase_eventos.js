/*
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
};

//Añadir un evento al botón
boton.addEventListener("click", suscripcionCliente);

//Eliminar formulario y mostrar un mensaje al cliente que se suscribió
const mensajeCliente = (cliente) => {
  let formulario = document.getElementById("form_suscripcion");
  formulario.innerHTML = "";
  let nuevoMensaje = document.createElement("div");

  nuevoMensaje.innerHTML = `<h4>Gracias ${cliente.nombre} por tu suscripción! Revisá tu correo que recibiste un regalito &#128156</h4>`;
  nuevoMensaje.className = "suscripcion_cliente";
  formulario.appendChild(nuevoMensaje);
  return cliente;
};
*/
