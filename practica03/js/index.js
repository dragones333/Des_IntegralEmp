"use strict";
let normalx = 'hola';
normalx = 10;
normalx = true;
console.log(normalx);
let usuario = 20;
console.log(usuario);
let nombre = 'Juan';
nombre = 'Juan Carlos';
//nombre = null; 
console.log(nombre);
let value;
console.log(value);
value = true;
value = 10;
value = 'hola';
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
console.log(value);
let miValor;
console.log("Tipo Unknown", miValor);
let value1 = miValor;
let value2 = miValor;
//let value3: boolean = miValor; // Error
//let value4: number = miValor; // Error
const edad = 18;
console.log('Edad', edad);
console.log('Edad' + edad);
const sueldo = 1.234;
const total = Number('5678'); // cast
console.log('Sueldo:', sueldo);
console.log('Total:', total);
const personaje = "El Chavo";
const otroPersonaje = 'Don Ramon';
const otroMas = `Profesor Jirafales y ${personaje}`;
console.log(otroMas);
const heroe = 'DeadPoo7\'l House';
console.log(heroe);
console.log(heroe.toUpperCase());
let vengador;
vengador = 'Dr. Strange';
console.log(vengador.charAt(4));
vengador = 150.55;
console.log(vengador.toFixed(1));
console.log(vengador.toFixed(1));
console.log(vengador.toFixed(1));
let personas = ['Carlos', 'Saul', 'Luis'];
console.log(personas);
console.log(personas[0]);
console.log(personas[2]);
//console.log(personas[3]); 
//console.log(personas[-1]); 
personas.push('Jorge');
console.log(personas);
let numeros = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];
//numeros2.push('Hola'); 
console.log(numeros, numeros2);
// Reto 1: Quitar la coma al final de la cadena
let numerosCadena = document.getElementById('numeros1');
if (numerosCadena) {
    for (let i = 0; i < numeros.length; i++) {
        numerosCadena.innerHTML += i + ',';
    }
    numerosCadena.innerHTML = numerosCadena.innerHTML.slice(0, -1);
}
let numerosCadena2 = document.getElementById('numeros2');
if (numerosCadena2) {
    for (let i = 0; i < numeros2.length; i++) {
        numerosCadena2.innerHTML += i + ',';
    }

    numerosCadena2.innerHTML = numerosCadena2.innerHTML.slice(0, -1);
}
// Reto 2: Imprimir al revés mi arreglo
let miArray4 = []; 
miArray4.push(1);
miArray4.push(2);
miArray4.push(3);
miArray4.reverse(); 
console.log(miArray4);
// Reto 3: Imprimir en pantalla las 2 imágenes usando HTML semantics FIGURE
