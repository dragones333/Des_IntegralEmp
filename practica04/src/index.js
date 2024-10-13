"use strict";
//tuplas
let tupla = ['Lucas', 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
let ourTuple = ['Lucas', 23, true];
console.log('nombre:', ourTuple[0]);
console.log('edad:', ourTuple[1]);
//terniario
let casado = ourTuple[2] ? 'casado' : 'soltero';
let ourTuple2 = [23, false, 'Diego'];
ourTuple2 = [25, true, 'Carlos'];
let ourReadonlyTuple;
//ourReadonlyTuple.push('Cadena');  // Error
/*ourReadonlyTuple[0]=30;
console.log(ourReadonlyTuple[2]);

const graph:[x:number, y:number]=[55.2,34.1];
console.log(graph);
console.log(graph.x);*/
//deestructuracion de variables
const person = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 10
};
//let nombre:string=person.firstName;
let { firstName, lastName, age } = person;
age = 25;
console.log(firstName, lastName, age);
/*usandl ts y desetructuracio ,generar una serie de fibonacci
con hasta 100 veces
 graficar en pantalla

 chars.js->libreria
*/
function fibinacciSeries(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}
const n = 100;
const fibonacci = fibinacciSeries(n);
console.log(fibonacci);
