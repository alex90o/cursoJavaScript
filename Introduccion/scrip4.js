//ARRAYS

//1 Formas de declarar un Array

//const miArray = [];
//const otroArray = new Array();

//console.log(miArray,otroArray);
/*
const miArray = ['Mochila de Alexis', "Cartera de Maraia", "Bolsa de Juan"];
console.log(miArray);

console.log(miArray[2]);

const otroNuevoArray = [{}, "Alexis", 2, true, {}, ()=>{}];

console.log(otroNuevoArray);
console.log(otroNuevoArray.length);

const elemento = miArray[0];

console.log(`En ese Casillero esta Guardada la ${elemento}`);

miArray[0] = "La cartera de Juliana";
console.log(miArray[0]);

console.log(`Ahora en ese Casillero esta Guardada la ${miArray[0]}`);
*/

//Acceder al primer elemento
/*
const miArray = ["alexis", "juan", "pedro", "marcelo"];
console.log(miArray);
const primerElemento = miArray[0];

console.log(primerElemento);

//Acceder al ultimo
console.log(miArray [miArray.length - 1]);

//Buscar el indice de un elemento

const elemento = "pedro";
// metodo indexOf

const index = miArray.indexOf(elemento);

console.log(index);

//elementos que no estan
const elemento2 = "martina";
const index2 = miArray.indexOf(elemento2);
console.log(miArray [index2]);
console.log(index2);
*/
const miArray = ["alexis", "juan", "pedro", "marcelo"];

miArray [1] = "Martina"; // lo mismo que  miArray [miArray.indexOf("juan")] = "Martina";

console.log(miArray);

//Agregar un elemento al final del Array

//push
miArray.push("jorgue");
console.log(miArray);

//Remover un elemento del final del array
//POP

miArray.pop();

console.log(miArray);

const removedElement = miArray.pop();
console.log(removedElement);
console.log(miArray);