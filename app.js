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

/*let numero1 = prompt('Ingresa el año actual');
let numero2 = prompt('Ingresa tu año de nacimiento');

let resultado = parseInt(numero1) - parseInt(numero2);

alert( 'Tu edad es o está por ser' + ' ' + resultado);*/

/*const puntaje = 2000;

if (puntaje == 1000) {
    console.log("Es igual");
} 
else {
    ("No es igual");
}*/

//OPERADORES LÓGICOS
/* 
=== Estrictamente igual
!== No es estrictamente igual 


// DESAFÍO COMPLEMENTARIO "CREAR UN ALGORITMO UTILIZANDO UN CICLO"

let ingresarNumero = parseInt (prompt ('Ingresar número'));

for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero / i;
    if (resultado == 4) {
        break;
    }
    alert (ingresarNumero + " / " + i + " = " + resultado );
} 
*/

//FUNCIONES

/*function solicitarNombre () {
    let nombreIngresado = prompt ("ingresar nombre")
    alert ("El nombre ingresado es " + nombreIngresado);
}

solicitarNombre ();
solicitarNombre ();

function conParametros (parametro1, parametro2, parametro3) {
    console.log(parametro1 + " " + parametro2 + " " + parametro3);
}

conParametros("Hola", "Coder", "House");
conParametros("Hola", "Emi", "Quiroga");

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
        }
    }
                    
console.log(calculadora (10, 5, "*"));

const suma  = (a,b) => a + b
const resta = (a,b) => a - b
const iva   = x => x * 0.21

let precioProducto = 400
let descuento = 50
let nuevoPrecio = resta (suma (precioProducto, iva(precioProducto)), descuento)
console.log(nuevoPrecio);
*/

/*let resultado = 0

function sumar (primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}

resultado = sumar (6,6);
console.log(resultado);
*/


