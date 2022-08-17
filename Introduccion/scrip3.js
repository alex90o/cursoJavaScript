//Funciones
/*
console.log(10+9);
console.log(9+9);
console.log(1+7);
console.log(3+6);
*/
//Declareción de la función
/*
function suma(n1, n2) {
    console.
    log(n1 + n2);
}

function sumaAlert(n1, n2) {
    alert("El resultado de la suma es: "+ (n1 + n2));
}

// Invocar la función (llamer función)

suma (4, 8);
suma (30 ,56);

sumaAlert (4, 8);
*/
//Return
/*
function sayHello () {
    return "Hola Mundo";
}

console.log(sayHello());

function suma(n1, n2) {
    //console.log(n1 + n2);
    return(n1 + n2);
}

console.log(suma(4,5));

console.log(suma(4,5) + 5);

const result = suma (2,6);
console.log (result + 5);
console.log (result + 20);

const resultConF = ( num1, num2) => num1 + num2;

console.log(resultConF(6,8));
console.log(resultConF(6,8) + 10);
*/

//SCOPE
/*
 let isValid = false;

function validatePermission (role){
    let isValid = true;
    let valiRole = "admin";
    if (role === valiRole) {
        let isValid = true;
        console.log ("Dentro del if", isValid);
    }
    else {
        let isValid = false;
        console.log ("Dentro del else", isValid);
    }
    console.log("Dentro de la funcion", isValid);
}

validatePermission("any");

console.log("A nivel Global", isValid);
*/

/*ejercio 01
Crear un programa que pida al usuarios que ingrese un numero 
y le devuelve un mesaje indicando si el numero es positivo, negativo o si es 0.
*/
const findNumberType = (number) => {
    let message = "";
    const parsedNumber = +number;

    if (!parsedNumber && parsedNumber !== 0){
        message = "El valor ingresado no es un numero";  
        return message;

    }
   

    if (parsedNumber === 0) {
        message = "El numero ingresado es 0";
    } else if (parsedNumber > 0) {
        message = "El numero ingresado es positivo";
    } else {
        message = "El numero ingresado es negativo";
    }

    return message;
};

const chosenNumber = prompt ("Ingresa un numero");

const response = findNumberType(chosenNumber);

alert(response);