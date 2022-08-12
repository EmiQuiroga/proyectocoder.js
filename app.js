//Aquí voy a comentar las variables
/*
let nombreAlumno = "Emilia"; //string
console.log(nombreAlumno);
let edad = "32"; //number
console.log(edad);
let estudiante = "true"; //boolean
console.log(estudiante);
const apellido = "Quiroga";
console.log(apellido);
*/

//Diferencias entre LET y CONST

//Let
//Pueden inicializarse vacías
//Pueden ser redeclaradas
/*
let nombre;
nombre = "Coder";
nombre = "House";
nombre = 37;
console.log(nombre);
*/

//Const
//Deben ser declaradas con valor
//No pueden ser redeclaradas
/*
const NOMBRE = "Coder";
console.log(NOMBRE);
*/

/*let nombre = "Emilia";
let apellido = "Quiroga";
console.log(nombre + " " + apellido);*/

// Operaciones
// -
// +
// *
// /
/*let numero1 = 25;
let numero2 = 30;
let resultado = numero1 / numero2;
console.log(resultado);*/

// PROMPT

/*let nombre = prompt('Ingrese su nombre');

console.log(nombre);

alert ('Hola' + " " + nombre);*/

let numero1 = prompt('Ingresa el año actual');
let numero2 = prompt('Ingresa tu año de nacimiento');

let resultado = parseInt(numero1) - parseInt(numero2);

alert( 'Tu edad es o está por ser' + ' ' + resultado);







