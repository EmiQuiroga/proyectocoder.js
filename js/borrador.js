  if (cart.length > 0) {
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
  } else {
    modal_carrito.classList.remove("cart");
  }



  `
    
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Cantiad</th>
      <th scope="col">Precio</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody id="carrito_compra">
  </tbody>
</table>
  
  <tr>

<th scope="row"><img src="${producto.imagen}" class="img-fluid car-img"></th>
<td>${producto.nombre}</td>
<td>${producto.cantidad}</td>
<td>${producto.precio}</td>
<td>${producto.precio * producto.cantidad}</td>
</tr>
<button class= "btn btn-primary" id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>`;

//Formulario emailjs
/*<form id="formulario">
  <div class="field">
    <label for="from_name">Nombre y Apellido</label>
    <input type="text" name="from_name" id="from_name">
  </div>
  <div class="field">
    <label for="message">Mensaje</label>
    <input type="text" name="message" id="message">
  </div>
  <div class="field">
    <label for="email">email</label>
    <input type="text" name="email" id="email">
  </div>

  <input type="submit" id="button" value="Enviar" >
</form>

<div id="cart">

</div>*/

//CSS Formulario
/*.field {
  margin-bottom: 10px;
}

.field label {
  display: block;
  font-size: 12px;
  color: #777;
}

.field input {
  display: block;
  min-width: 250px;
  line-height: 1.5;
  font-size: 14px;
}

input[type="submit"] {
  display: block;
  padding: 6px 30px;
  font-size: 14px;
  background-color: #4460AA;
  color: #fff;
  border: none
}*/

