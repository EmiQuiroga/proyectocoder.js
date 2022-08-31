class Producto{
    constructor (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}}

const producto1 = new Producto ("Cuarzo blanco", 600);
const producto2 = new Producto ('Amatista', 800);
const producto3 = new Producto ('Palo Santo 200gr', 800);


const miArray = [producto1, producto2, producto3];
console.log(miArray);

miArray.push (new Producto('Vela de Naranja', 250));
miArray.push (new Producto('Péndulo amatista', 1800));






