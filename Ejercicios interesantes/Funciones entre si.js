function anterior(n){
    return --n;
}
function triple(n){
    return n * 3;
}
function anteriorDelTriple(n){
    return anterior(triple(n));
}

console.log(anterior(20));
console.log(triple(3));
console.log(anteriorDelTriple(10));

