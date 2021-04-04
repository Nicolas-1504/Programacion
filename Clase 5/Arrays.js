let films = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

let todosLosFilms = [];

const upperCase = function(array,index){
    todosLosFilms[index] = array[index].toUpperCase();
}

upperCase(films,0);
upperCase(films,1);
upperCase(films,2);
upperCase(films,3);
upperCase(films,4);


console.log(films);
console.log('El elemento numero 1 es ' + films[1]);
console.log(todosLosFilms);

let cartoons = ["toy story", "finding Nemo","kung-fu panda","wally","fortnite",];
cartoons.pop();

const pushPelis = function (array,index){
    films [films.length] = array[index];
}

pushPelis (cartoons,[0]);
pushPelis (cartoons,[1]);
pushPelis (cartoons,[2]);
pushPelis (cartoons,[3]);


console.log(films);


const asiaScore = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScore = [8, 10, 6, 9, 10, 6, 6, 8];

console.log(asiaScore.toString() === euroScore.toString());


