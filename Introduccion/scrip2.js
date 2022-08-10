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
/*
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
 */
//chalen
let isRegistered, registrase,registrasePassword;

const registro = confirm (
    " Bienvenido al sitio, haz clic en OK para relizar le registro");
    do{

    
    if (registro){
        if(!registrase){
        registrase = prompt ("Ingrese su nombre de Usuario");
        }
        if (registrase.length >3){
            registrase = registrase.toLowerCase();
            registrasePassword = prompt("Ingrese su contraseña");
            isRegistered = true;
            if (registrasePassword.length >= 6){
                    alert("Se completo con existo el Registro");
            }else {
                alert("La contraseña debe tener almenos 6 caracteres");
                registrasePassword =null;
            }
                
        }else {
                alert("El nombre de usuario tiene que ser de al menos 3 caracteres");
                registrase = null;
            }
        }
    else {
        alert("OK, te esperamos");

    }
    }while(registro && (!registrasePassword || !registrase));


    //2
    let loginPassword, loginUsername;
if (isRegistered) {
    const registro = confirm ("Haz clic en Ok para iniciar sesión");
    do {

   
    if (registro) {
         loginUsername = prompt ("Ingresa tu usuario").toLocaleLowerCase();
         
        if(loginUsername !== null){
            loginUsername = loginUsername.toLowerCase();
            loginPassword = prompt ("Ingresa tu password");
            if (loginPassword === null){
                //alert("Vuelve en otro mommento");
                registro = false;
                
            }
            else if(loginPassword === registrase &&
                    loginPassword === registrasePassword)
                {
                 alert("Login Existoso !");   
                }
            else {
                alert ("Alguno de los datos ingresados es incorrecto");
                loginPassword = null;
                loginUsername = null;
            }
        }
        else {
            registro = false;
            //alert("Vuelve cuando lo necesites");
        }
        
    }
    else {
        alert("Vuelve cuando gustes");
    }
}while(registro && (!loginUsername || !loginPassword));
}
