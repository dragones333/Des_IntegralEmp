"use strict";
function sum(a, b) {
    return a + b;
}
let resultado = sum(2, 3);
console.log(resultado); //5
const fSum = sum(5, 80);
//fSum=sum(5,4); error
console.log(fSum); //85
//funciones de orden superior
//funciones arrow(flecha)
const sumArrow = (a, b) => {
    return a + b;
};
//funcion anonima
let funcioAnonima = function () {
    console.log("Hola mundo");
};
console.log(funcioAnonima());
