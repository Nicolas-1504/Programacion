//Consigna IF Ternario

function dividir1(num1,num2){
    if (num2 === 0){
        return 'error: no se puede dividir por cero';
    }
    return num1 / num2;
}

//Version mas simple

function dividir2(num3,num4){
    return num3 === 0 ? 'error: no se puede dividir por cero': num3 / num4;
}

//Ejercicios extra

//Punto 1

function parImpar (numeroA){
    return numeroA % 2 == 0 ? 'Es par': 'Es impar';
}

//Logs Ejercicio Uno

console.log(parImpar(9)); //'Es impar'
console.log(parImpar(10)); //'Es par'

//Punto 2


function pagoVehiculo (pago){
    return pago == true ? 'Se levanta la barrera': 'No se levanta la barrera';
}
//Logs Ejercicio Dos

console.log(pagoVehiculo(true)); //'Se levanta la barrera'
console.log(pagoVehiculo(false)); //'No se levanta la barrera'

//Punto 3

function numeroAleatorio(azar){
    return azar == Math.round(Math.random()*10) ? azar: 'No es el mismo numero generado al azar';
}

//Logs Ejercicio Tres

console.log(numeroAleatorio(10)); //Me muestra el numero si es el mismo que se genero al azar, de lo contrario me muestra un aviso indicandome que no es el mismo numero.

//Punto 4

function navidad(siNo){
    return siNo == '2021-12-24' ? '¡Es navidad!': 'No es navidad :c';
}

//Logs Ejercicio Cuatro

console.log(navidad('2021-12-24')); //'¡Es navidad!'
console.log(navidad('2021-04-15')); //'No es navidad :c'

//Punto 5

function meses (mes){
    switch (mes){
        case 'enero':
        return 'Este mes tiene 31 dias';
        break;
        case 'febrero':
        return'Este mes tiene 28 dias';
        break;
        case 'marzo':
        return'Este mes tiene 31 dias';
        break;
        case 'abril':
        return'Este mes tiene 30 dias';
        break;
        case 'mayo':
        return'Este mes tiene 31 dias';
        break;
        case 'junio':
        return'Este mes tiene 30 dias';
        break;
        case 'julio':
        return'Este mes tiene 31 dias';
        break;
        case 'agosto':
        return'Este mes tiene 31 dias';
        break;
        case 'septiembre':
        return'Este mes tiene 30 dias';
        break;
        case 'octubre':
        return'Este mes tiene 31 dias';
        break;
        case 'noviembre':
        return'Este mes tiene 30 dias';
        break;
        case 'diciembre':
        return'Este mes tiene 31 dias';
        break;
        default:
        return 'no es un mes valido';
    }
}

//Logs Ejercicio Cinco

console.log(meses('enero')); //'Este mes tiene 31 dias'
console.log(meses('febrero')); //'Este mes tiene 28 dias'
console.log(meses('abril')); //'Este mes tiene 30 dias'

//Punto 6

function notas (nota){
    switch (true){
        case (nota < 4):
        return 'El alumno recursa';
        break;
        case (nota < 7):
        return 'El alumno va a recuperatorio';
        break;
        case (nota <= 10):
        return 'El alumno aprueba';
        break;
        default:
        return 'No es una nota valida';
    }
}

//Logs Ejercicio Seis

console.log(notas(3)); //'El alumno recursa'
console.log(notas(4)); //'El alumno va a recuperatorio'
console.log(notas(7)); //'El alumno aprueba'

//Punto 7

function nave(altura,velocidad){
    return altura > 1999 && altura <= 3001 && velocidad < 1000 ? 'Puede abrir el paracaidas': 'No puede abrir el paracaidas';
}

//Logs Ejercicio Siete

console.log(nave(2000,200)); //'Puede abrir el paracaidas'
console.log(nave(1700,1200)); //'No puede abrir el paracaidas'

//Punto 8

function sandwich(tom,pap,hue){
    let tomate = 20;
    let papa= 50;
    let huevo = 60;
    let precioSandwich = 150;
    let valorFinal = precioSandwich;

    if (tom === true){
        valorFinal = valorFinal + tomate;  
    }
    if (pap === true){
        valorFinal = valorFinal + papa;
    }
    if (hue === true){
        valorFinal = valorFinal + huevo;
    }
    return valorFinal;
}

//Logs Ejercicio Ocho

console.log(sandwich(true,true,true)); //'El valor del sandwich es de 280'
console.log(sandwich(true,true,false)); //'El valor del sandwich es de 220'
console.log(sandwich(true,false,false)); //'El valor del sandwich es de 170'
console.log(sandwich(true,false,true)); //'El valor del sandwich es de 230'
console.log(sandwich(false,true,false)); //'El valor del sandwich es de 200'
console.log(sandwich(false,false,true)); //'El valor del sandwich es de 210'
console.log(sandwich(false,true,true)); //'El valor del sandwich es de 260'
console.log(sandwich(false,false,false)); //'El valor del sandwich es de 150'


//Consigna Switch

function estacion(mes){
    switch(mes){
    case 'enero':
    return 'Es invierno';
    break;
    case 'febrero':
    return 'Es invierno';
    break;
    case 'marzo':
    return 'Es primavera';
    break;
    case 'abril':
    return 'Es primavera';
    break;
    case 'mayo':
    return 'Es primavera';
    break;
    case 'junio':
    return 'Es verano';
    break;
    case 'julio':
    return 'Es verano';
    break;
    case 'agosto':
    return 'Es verano';
    break;
    case 'septiembre':
    return 'Es otoño';
    break;
    case 'octubre':
    return 'Es otoño';
    break;
    case 'noviembre':
    return 'Es otoño';
    break;
    case 'diciembre':
    return 'Es invierno';
    break;
    default:
    return 'No es un mes valido'

    }
}

//Logs Consigna Switch

console.log (estacion('enero')); //'Es invierno'
console.log (estacion('marzo')); //'Es primavera'
console.log (estacion('junio')); //'Es verano'
console.log (estacion('septiembre')); //'Es otoño'