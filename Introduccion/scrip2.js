//CONTROL DE FLUJO 

//IF / ELSE
/*
let age = 18;

if (age >= 18) {
    console.log("Podes manejer");
}
else {
    console.log("No podes manejar");
}
*/

//ELSE IF
/*
 let number = 10;

 if (number < 10) {
    console.log("El numero es menor a 10");
 } else if (number > 10) {
    console.log("El numero es mayor a 10");
 }else {
    console.log("El numero es igual a 10");
 }
 */

 //SWITCH

 //const weather = "DESPEJADO";
 /*
 const weather = "fresCO";

 switch (weather.toUpperCase()) { //para normalizaer la informacion
    case "FRESCO":
        console.log("LLeva Abrigo");
        break;
    
    case "LLUVIOSO":
        console.log("Cuidate del Sol");
        break;
    
    case "SOLEADO":
        console.log("Cuidate del Sol");
        break;
    
    default:
        console.log("El tiempo esta bueno. Disfruta del dia");
        break;
 }
 */

 //For
/* 
 for (let i =0; i<5; i++){
    console.log(i+1);
 }
 */

 //ejercicios

 //1)
 let variable = " ";
 for (let i = 0; i<5 ; i++){
    variable = variable + "#";
    console.log(variable);
 }

 //2)
 for (let i=0; i<10; i++){
    if(i%2 === 0) console.log(`El Numero ${i} es par`);
    else console.log  (`El Numero ${i} es impar`);

 }

 //3
 for(let i=1; i<=15; i++){
    if(i%3 === 0 && i%5 ===0){
        console.log("FizzBuzz");
    }
    else if(i%3 === 0) {
        console.log("Fizz");
    }
    else if(i%5 ===0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
 }