const _ = require('lodash')
//const lodash = require('lodash')

const array =[1,2,3,4,5,6,7,8,9,10];
//console.log(lodash.chunk(array,2));
console.log(_.chunk(array,7));

let arreglo = ['Juan', 'Pedro', 0,'Luis', 'Ana', false,'Maria', 'Jose', 'Jose','Caelos',''];
console.log(_.chunk(arreglo,2));
console.log(_.compact(arreglo));

let array1=['Superman', 'Batman', 'Flash'];
let array2=['Thor', 'Ironman','Spiderman'];
console.log(_.concat(array1,   array2));

let array3 = ['El Chavo', 'Chapulin Colorado', 'Doctor Chapatin']
let array4 = ['El Chavo', 'El Botijas','El Chompiras', 'El Peterete'];
console.log(_.difference(array3,array4));

let array5=['a','b','c','d','e','f','g','h','i','j']
//drop elimina los primeros n elementos del array
console.log(_.drop(array5,3));

const numeroAleatorio=_.random(0,100);
console.log(numeroAleatorio);

const saludar=()=>{
    console.log('Hola Mayito, ¿Como estas?');
}

const saludarMayito =_.once(saludar);
saludarMayito();
saludarMayito();
saludarMayito();
saludarMayito();

const user = [
    {usuario: 'Mayito',edad:25},
    {usuario: 'Juanito',edad:30},
    {usuario: 'Pedrito',edad:35},
    {usuario: 'Pablito',edad:40},
    {usuario: 'Carlitos',edad:45}
];

const sorteUser=_.sortBy(user, ['edad','asc']);
console.log(sorteUser);

const obtieneNumero = ()=> {
    return _.random(0,100);
}

let result = _.times(5, obtieneNumero);
console.log(result);


//Reto 1
let numerosAleatorios = _.times(100, () => _.random(1, 100));

let numerosPares = _.filter(numerosAleatorios, num => num % 2 === 0);
let numerosImpares = _.filter(numerosAleatorios, num => num % 2 !== 0);

console.log('Números pares:', numerosPares);
console.log('Números impares:', numerosImpares);

//Reto 2
const esPrimo = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

let numerosPrimos = _.filter(numerosAleatorios, esPrimo);
let numerosNoPrimos = _.filter(numerosAleatorios, num => !esPrimo(num));

console.log('Números primos:', numerosPrimos);
console.log('Números no primos:', numerosNoPrimos);

//Reto 3

let nombres = ['Ana', 'Pedro', 'Alejandra', 'Luis', 'Antonio', 'Beatriz', 'Alberto', 'Maria'];

let nombresConA = _.filter(nombres, nombre => nombre.startsWith('A'));
let nombresSinA = _.filter(nombres, nombre => !nombre.startsWith('A'));

console.log('Nombres que empiezan con "A":', nombresConA);
console.log('Nombres que no empiezan con "A":', nombresSinA);

