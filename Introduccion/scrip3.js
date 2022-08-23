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
/*
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
*/

/*
2) Crear un programa que pida un numero al usuario y devuelva 
un mesanje diciendo si el numero es primo o no.
Aclaración: Los numeros primos son aquellos que tienen exactamente 4 divisores
*/

/*
const isPrime = (number) => {
    const parsedNumber = +number;

    if(!parsedNumber && parsedNumber !== 0) {
        alert ("El valor ingresado no es un numero");
        return;
    }

    if (parsedNumber < 2) return false;

    for (let i = 2; i<parsedNumber; i++) {

        if (parsedNumber % i === 0) return false;
    }
    return true;
        
};


//console.log(isPrime(2));

const chosenNumber = prompt ("Ingrese un numero");

const isNumberPrimer = isPrime(chosenNumber);

if (isNumberPrimer !== undefined) {
    if(isNumberPrimer) alert("El numero es primo");
    else alert ("El numero no es primo")
}
*/

/*
3) Crear un programa que convierta la terperatura de grados Celsius a 
Farenheit y viceversa. El usuario deberia ingresar la temperatura y a que
unidad la quiere convertir.
*/
// C a F (C x 9/5) + 32
// F a C (F - 32) x 5/9
/*
const convertTemperature = (temperature, target) => {
    const parsedTemp = +temperature;
    const parsedTarget = target.toLowerCase();

    if (!parsedTemp && parsedTemp !== 0) {
        alert ("El valor ingresdo no es valido");
        return;
    }

    if(parsedTarget === "celsius") {
        return ((parsedTemp - 32) * 5) /9;
    }
    else if (parsedTarget === 'faranheit') {
        return (parsedTemp + 9) / 5 + 32;
    } else {
        alert("El formato ingresado no es valido");
    }
};

const temperatura = prompt ("Ingresa la temperatura");
const target = prompt ("Ingrese a que unidad de medida quieres convertir");

const response = convertTemperature (temperatura, target);

if (response !== undefined) {
    alert (`La temperatura en ${target.toLocaleLowerCase()} es ${response} `)
}
*/
/*
4) Crear un programa para calcular el total se una compra. Para ello, se le
tiene que pedir al usuario que ingrese el precio de cada producto y, cuando
que ingrese la palabra 'total' . Devolverle el total de la compra

*/

const calculateTotal = () => {
    let total = 0;
    let subTotal;
    do {
        subTotal = prompt ("Ingresa el valor del producto");
        let parsedSubtotal = +subTotal;
        if (+subTotal) {
            total += parsedSubtotal;
        }
    }while (subTotal.toLowerCase() !== "total");

    return total;
};

//console.log(calculateTotal());

const response = calculateTotal();

alert (response);