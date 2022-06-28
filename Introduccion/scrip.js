// alert("hello world");
//TODO: 
//FIXME:

//Number
// console.log(3);
// console.log(3.5);
// console.log(typeof 3);
// console.log(typeof Infinity);
// console.log(typeof NaN);

// //String
// console.log('Hola Mundo');
// console.log ("la casa esta en orden");
// console.log(typeof "3");
// console.log("3");

// //Booleanos
// console.log(typeof true);
// console.log(typeof false);

// //Null y Undefined
// console.log(undefined);
// console.log(null);

// console.log(typeof undefined);
// console.log(typeof null);

// let miVariable;

// console.log(miVariable);

// miVariable = null;
// console.log(miVariable);

// miVariable = 3;
// console.log(miVariable);
// console.log(typeof miVariable);

// let miVariable = 3;
//  console.log(miVariable);

//  console.log(2+3);

//  function saludar () {
//     return "Hola";
//  }

// console.log(saludar());

// let miVariable = false;

// if (miVariable === true) {
//     console.log("Verdadero");
// }
// else {
//     console.log("Falso");
// }

//alert("hello world");

//let nombre = prompt("Ingresa tu nombre");

//console.log(nombre);

//console.log(prompt("Ingresa tu nombre"));

//console.log(confirm("Estas seguro??"));

//Manipulacion de Tipos
//Valores literales
// let nombre = "Alexis";
// console.log(nombre);

// // Conversion de string a Number
// // Number, parseInt, +

// let string = '123';

// console.log(Number(string));
// console.log(parseInt(string));
// console.log(+string);

// let string2 = '123hola';

// console.log(Number(string2)); // dan como resultado NaN
// console.log(parseInt(string2)); // este si devolvio 123 -- corta cuando encuentra la primera letra
// console.log(+string2); // dan como resultado NaN

//Concatenacion
// let nombre = "Alexis";
// console.log("Hola" +" "+nombre);
// console.log(`Hola  Alexis`);

//Conversion a Booleano
// let string ="2";
// let number = 0;
// console.log(Boolean(string)); //true
// console.log(Boolean(number)); //false

// console.log(!!string);
// console.log(!!number);

// //negando el valor
// console.log(!string);
// console.log(!number);

//Conversion implicita
// let string ="2";
// let number = 2;
// let otroNumber = 3;
// console.log(string + number); //22
// console.log(number + string); //22
// console.log(number + otroNumber + string); //52
// console.log(number + string + otroNumber); //223
// console.log(otroNumber + string + number); //322

//Operadores

//Aritmeticos

//Unarios (+,-,typeof)

// console.log(typeof "hola mundo");
// console.log(+"123");
// console.log(-"123");
// console.log(-"tres");// da NaN. No existe el -NaN

// // Binarios

// console.log(2 + 3);
// console.log(3 - 3);
// console.log(2 * 3);
// console.log(6 / 3);
// console.log(7 % 3);

//Logicos

//Binarios 
//Mayor y Menor
// console.log(2 > 3);
// console.log(2 < 3);
// console.log(3 >= 3);
// console.log(3 <= 3);

// // === y ==
// console.log(2 === 2);//true
// console.log(2 === "2");//false
// console.log(2 === 3);
// console.log(2 == 3);
// console.log(3 == 3);//true
// console.log(3 == "3");//true

// console.log(2 !== 3);
// console.log(2 !=3);

// AND, OR, NOT

// //AND
// console.log("AND");
// console.log(2 === 2 && 2 > 0);//true
// console.log(2 === "2" && 2 > 0);//false
// console.log(2 === 2 && 2 < 0);//false
// console.log(2 === "2" && 2 < 0);//false

// //OR
// console.log("OR");
// console.log(2 === 2 || 2 > 0);//true
// console.log(2 === "2" || 2 > 0);//true
// console.log(2 === 2 || 2 < 0);//true
// console.log(2 === "2" || 2 < 0);//false

// //TERNARIO
// let edad = 18;

// console.log(edad >= 18 ? "Podes manejar" : "No tenes edad para manejar");

//Operator Precedence

// console.log(30 + 20 / 2);

// console.log((30 + 20) / 2);

// let nombre = "Alexis";
// let x, y;

// console.log(x, y);

// x= y = 10;

// console.log(x, y);

// x = y;

// y = 10;

// console.log(x , y);

//variables
//palabras reservadas para declarar una variable

// // var, let y const

// var miVariable = 3;
// let otraVariable = 2;
// const otraVariableMas = 5;

// console.log(miVariable);
// console.log(otraVariable);
// console.log(otraVariableMas);

// otraVariable = 10;
// //otraVariableMas = 20; //da error

// const firstName = "Alexis";
// const job = "Desarrollador";
// const favouriteNumber = 7;

// //Hola, soy Alexis, soy Desarrollador 
// //y mi numero favorito es el 7

// console.log("Hola, soy "+
// firstName+ 
// ', soy '+
// job +
// "y mi numero favorito es el "+
// favouriteNumber
// );

// console.log (
//     `Hola, soy ${firstName}, soy ${job} y mi numero favorito es el ${favouriteNumber}`
// )

// console.log ("hola 'casa' pan");

//1)
const firstName = prompt("ingresa tu nombre");

alert(`Hola ${firstName}`);

//2) 
const firstNumber = prompt("ingresa un Numero");
const secondNumber = prompt("ingresa otro Numero");

console.log(typeof firstNumber);
alert(`La suma de ${firstNumber} y ${secondNumber} es
${+firstNumber + +secondNumber}`); //el + lo combierte a numero al string

//3)
const firstNumber2 = prompt("ingresa un Numero");
const secondNumber2 = prompt("ingresa otro Numero");

console.log(typeof firstNumber2);
alert(`El doble de La suma de ${firstNumber2} y ${secondNumber2} es
${(+firstNumber2 + +secondNumber2)*2}`);