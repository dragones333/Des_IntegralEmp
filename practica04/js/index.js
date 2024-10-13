//tuplas
var tupla = ['Lucas', 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
var ourTuple = ['Lucas', 23, true];
console.log('nombre:', ourTuple[0]);
console.log('edad:', ourTuple[1]);
//terniario
var casado = ourTuple[2] ? 'casado' : 'soltero';
var ourTuple2 = [23, false, 'Diego'];
ourTuple2 = [25, true, 'Carlos'];
var ourReadonlyTuple;
//ourReadonlyTuple.push('Cadena');  // Error
/*ourReadonlyTuple[0]=30;
console.log(ourReadonlyTuple[2]);

const graph:[x:number, y:number]=[55.2,34.1];
console.log(graph);
console.log(graph.x);*/
//deestructuracion de variables
var person = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 10
};
//let nombre:string=person.firstName;
var firstName = person.firstName, lastName = person.lastName, age = person.age;
age = 25;
console.log(firstName, lastName, age);
/*usandl ts y desetructuracio ,generar una serie de fibonacci
con hasta 100 veces
 graficar en pantalla

 chars.js->libreria
*/
function fibinacciSeries(n) {
    var series = [0, 1];
    for (var i = 2; i < n; i++) {
        var nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}
var n = 100;
var fibonacci = fibinacciSeries(n);
console.log(fibonacci);
