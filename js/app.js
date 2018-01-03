do {
    var cardToValidate = prompt('Ingresa un numero'); //Creando el prompt para ingresar el número de tarjeta
} while (!cardToValidate);


var numberArray = []; //Creando array vacío para almacenar los dígitos una vez que se hayan invertido

function validateCard(cardNumber) { //Creando función
    cardNumber = cardNumber.split(' '); //Eliminando espacios vacíos
    cardNumber = cardNumber.join('');

    var total = 0 //Creando variable para almacenar la suma que validará la tarjeta
    for (var i = 0; i < cardNumber.length; i++) { //Bucle que accede a cada caracter y los agrega al inicio del array vacío para obtenerlos en orden inverso.
        numberArray.unshift((Number(cardNumber[i])));
    }
    for (var j = 0; j < numberArray.length; j++) { //Bucle que accede a cada elemento del array.
        if (j % 2 != 0) { //Si el índice del dígito es par, debe multiplicarse por dos.
            var pairNumber = numberArray[j] * 2;
            if (pairNumber > 9) { //Si el número es mayor a nueve, es decir está formado por dos dígitos, estos deben sumarse y almacenarse en la variable 'total'
                var sumPairNumber = 0;
                pairNumber = pairNumber.toString();
                for (var k = 0; k < pairNumber.length; k++) { //Accediento a los dos números para sumarlos.
                    sumPairNumber = sumPairNumber + Number(pairNumber[k]);
                }
                total = total + sumPairNumber; //Si el número no es mayor a nueve, debe sumarse y almacenarse en la variable 'total'
            } else {
                total = total + pairNumber;
            }
        } else {
            total = total + numberArray[j];
        }
    }
    if (total % 10 === 0) { //Condicional para determinar si la suma de los índices del array entre diez da como residuo 0. Si es así la tarjeta es válida.
        return 'Tarjeta válida';
    } else {
        return 'Tarjeta inválida';
    }
}

alert(validateCard(cardToValidate)); //Llamando a la función asignándole la variable obtenida a través del prompt
