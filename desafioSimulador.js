//Desafío Simulador Interactivo
//Declaración de objeto
const Cuarzo = {
    nombre: "Cuarzo",
    precio: 500,
  };
  
  //Declaración de variables
  let subtotal;
  let total;
  let descuento;
  let cantidadDeUnidades;
  
  //Función con condicional if y else if para agregar cantidad de un producto
  function Simulador() {
    let productoDisponible = "Cuarzo";
    cantidadDeUnidades = parseInt(prompt("Indique la cantidad de productos"));
    if (cantidadDeUnidades <= 0 || cantidadDeUnidades > 10) {
      alert("Por favor ingrese un número entre 1 y 10");
    } else if (cantidadDeUnidades <= 5) {
      subtotal = Cuarzo.precio * cantidadDeUnidades;
      total = subtotal;
      alert("El total de tu compra es de " + total);
      console.log("El total de tu compra es: " + subtotal);
    }
    //Generar descuento a partir de 5 unidades
    else {
      subtotal = Cuarzo.precio * cantidadDeUnidades;
      descuento = subtotal * 0.1;
      total = subtotal - descuento;
      console.log("El subtotal de tu compra es: " + subtotal);
      console.log("Tu descuento es de: " + descuento);
      console.log("El total de tu compra es: " + (subtotal - descuento));
      alert("El total de tu compra es de " + (subtotal - descuento) + ". Hacé click en aceptar para generar etiquetas");
    }
  }
  
  //Función flecha con ciclo for para generar etiquetas numeradas para añadir a cada producto
  const GenerarEtiqueta = () => {
    let numeroDeEtiquetas = cantidadDeUnidades;
    for (i = 1; i <= cantidadDeUnidades; i++) {
      console.log("Etiqueta número: cod000" + i);
    }
  };
  
  //Llamado a las funciones
  Simulador();
  GenerarEtiqueta();