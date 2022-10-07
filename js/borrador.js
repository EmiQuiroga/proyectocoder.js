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

