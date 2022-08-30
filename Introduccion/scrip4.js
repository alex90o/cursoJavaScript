//ARRAYS

//1 Formas de declarar un Array

//const miArray = [];
const otroArray = new Array();

//console.log(miArray,otroArray);

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
