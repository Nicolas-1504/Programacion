// Ejercicio 1

const numeros = [1,2,3,4];

const invertidos = function (array){

    let numerosInvertidos = [];
    numerosInvertidos.push (array.pop());
    numerosInvertidos.push (array.pop());
    numerosInvertidos.push (array.pop());
    numerosInvertidos.push (array.pop());
    return numerosInvertidos;
}

console.log(invertidos(numeros));

//Ejercicio 2

const numerosB = [1,2,3,4];

const enteros = function (array) {

    let pares = [];

    array[0] % 2 == 0 ? pares.push(array[0]): '';
    array[1] % 2 == 0 ? pares.push(array[1]): '';
    array[2] % 2 == 0 ? pares.push(array[2]): '';
    array[3] % 2 == 0 ? pares.push(array[3]): '';

    return pares;

}
console.log(enteros(numerosB));

//Ejercicio 3

const numerosC = [1,2,3,4];

const tipoDatos = function (dato,array){

    return typeof(array[0]) == dato && typeof(array[1]) == dato && 
                typeof(array[2]) == dato && typeof(array[3]) == dato;

}

console.log(tipoDatos('number',numerosC));

//Ejercicio 4

const numerosD = [1,2,3,4];

const sumarDatos = function(array){

    if(tipoDatos('number',array)){
        return array[0] + array[1] + array[2] + array [3]; 

    }else{
        return 'No son numeros enteros'
    }

    }

    console.log(sumarDatos(numerosD));

//Ejercicio 5

const numerosE = [1,2,3,4];

const dobleFuncion = function (array){

    if(tipoDatos('number',array)){
        return invertidos(array);
    }else{
        return 'No son numeros'
    }

}

console.log(dobleFuncion(numerosE));
