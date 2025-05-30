//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log("Hola soy tu consola y juntas vamos a aprender Javascript");

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp Femcoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log("Bienvenida/o al bootcamp Femcoders de Factoría F5");

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

const string = "Hola caracola";
const number = 9801;
const boolean = true;
const nulo = null;
const indefinido = undefined;
const object = {
  nombre: "Paula",
  apellido: "Calvo",
  edad: 23,
};
const array = [
  "Hola caracola",
  9801,
  true,
  nulo,
  indefinido,
  object.apellido,
  object.edad,
];

console.log(
  string +
    " " +
    number +
    " " +
    boolean +
    " " +
    nulo +
    " " +
    indefinido +
    " " +
    object.nombre +
    " " +
    array +
    " " +
    array[0] +
    " " +
    array[1] +
    " " +
    array[2] +
    " " +
    array[3] +
    " " +
    array[4] +
    " ."
);

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola.

//Escribe tu código aquí

const postres = ["helado", "tarta", "pastel"];

console.log(
  `Me gusta el ${postres[0]}, pero tambien la ${postres[1]} y el ${postres[2]}.`
);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.
//Escribe tu código aquí

const coder = {
  nombre: "Paula",
  edad: 23,
};

console.log(`Me llamo ${coder.nombre} y tengo ${coder.edad} años.`);

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.
//Escribe tu código aquí

console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof object);
console.log(typeof array);

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.
//Escribe tu código aquí
const suma = 2 + 2;

console.log(`La suma de 2 mas 2 es igual a ${suma}`);
//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.
//Escribe tu código aquí
const resta = 2 - 4;

console.log(`La resta de 2 menos 4 es igual a ${resta}`);

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.
//Escribe tu código aquí
const multiplicacion = 2 * 4;

console.log(`La multiplicacion de 2 por 4 es igual a ${multiplicacion}`);

//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.
//Escribe tu código aquí
const division = 8 / 4;

console.log(`La divion de 8 entre 4 es igual a ${division}`);

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.
//Escribe tu código aquí
const primerNumero = 1;
const segundoNumero = 2;
const comparacionFalse = primerNumero == segundoNumero;

console.log(
  `El resultado de la comparacion de los numeros es: ${comparacionFalse}.`
);
// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.
//Escribe tu código aquí
const comparacionTrue = primerNumero != segundoNumero;

console.log(
  `El resultado de la comparacion de los numeros es: ${comparacionTrue}.`
);
//Ejercicio 11: completa el ejercicio

let num1 = 15;
let num2 = 20;

let comparacion = num1 != num2;
console.log(comparacion); //Realiza la operación de comparación que consideres para que el resultado en consola sea true

//Ejercicio 12: completa el ejercicio

let num3 = 1;
let num3AsString = "1";

let result = typeof num3 == typeof num3AsString;
//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result);

//Ejercicio 13: completa el ejercicio

let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
  console.log(num3 == num3AsString);

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.
//Escribe tu código aquí

const firstName = "Paula";
const lastName = "Calvo";
const fullName = firstName + " " + lastName;
console.log(fullName);

//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res = a < 10 && b > 1; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res);

let res2 = a < 10 && b < 1; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2);

let res3 = a == 5 && b == 5; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3);

let res4 = a == 6 || b == 0; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4);

let res5 = a == 0 || b == 3; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5);

let res6 = a == 6 && b == 3; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6);
