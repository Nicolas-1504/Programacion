let dato = true;
let resultado = ' ';

if (dato = false){
    resultado = 'es false';
} else if (dato = true){
    resultado = 'es true';
}

console.log(resultado);

let lenguaje = 'javascript';
let resultadoA = '';

if (lenguaje == 'javascript') {
    resultadoA = 'Estoy aprendiendo';
} else {
    resultadoA = 'Lo aprenderé mas adelante';
}

console.log(resultadoA);

function puedePasar(nombre) {
    if(nombre === 'Cosme Fulanito'){
        return false;
    }else {
        return true
    }

}
console.log(puedePasar('Cosme Fulanito'));


let dia = 'jueves'

switch (dia) {	
	case 'viernes':
    	console.log('buen finde');
        break;
	case 'lunes':
    	console.log('buena semana');
        break;
    default:	
        console.log('buen dia');
	}







