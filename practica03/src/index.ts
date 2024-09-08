let normalx: any = 'hola';
normalx = 10;
normalx = true;

console.log(normalx);

let usuario: any = 20;
console.log(usuario);

let nombre: string = 'Juan';
nombre = 'Juan Carlos';
//nombre = null; 
console.log(nombre);

let value: any;
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

let miValor: unknown;
console.log("Tipo Unknown", miValor);

let value1: unknown = miValor;
let value2: any = miValor;
//let value3: boolean = miValor; // Error
//let value4: number = miValor; // Error

const edad: number = 18;
console.log('Edad', edad);
console.log('Edad' + edad);

const sueldo: number = 1.234;
const total: number = Number('5678'); 

console.log('Sueldo:', sueldo);
console.log('Total:', total);

const personaje: string = "El Chavo";
const otroPersonaje: string = 'Don Ramon';
const otroMas: string = `Profesor Jirafales y ${personaje}`;
console.log(otroMas);

const heroe: string = 'DeadPoo7\'l House'; 
console.log(heroe);
console.log(heroe.toUpperCase());

let vengador: any;
vengador = 'Dr. Strange';
console.log(vengador.charAt(4));
vengador = 150.55;
console.log(vengador.toFixed(1));
console.log((vengador as number).toFixed(1));
console.log(<number>vengador.toFixed(1)); 

let personas: string[] = ['Carlos', 'Saul', 'Luis'];
console.log(personas);
console.log(personas[0]);
console.log(personas[2]); 
//console.log(personas[3]); 
//console.log(personas[-1]); 
personas.push('Jorge');
console.log(personas);

let numeros: number[] = [1, 2, 3, 4, 5];
let numeros2: Array<number> = [6, 7, 8, 9, 10];
//numeros2.push('Hola'); 
console.log(numeros, numeros2);

// Reto 1: Quitar la coma al final de la cadena
let numerosCadena: HTMLElement | null = document.getElementById('numeros1');
if (numerosCadena) {
    for (let i = 0; i < numeros.length; i++) {
        numerosCadena.innerHTML += i + ',';
    }
    numerosCadena.innerHTML = numerosCadena.innerHTML.slice(0, -1);
}

let numerosCadena2: HTMLElement | null = document.getElementById('numeros2');
if (numerosCadena2) {
    for (let i = 0; i < numeros2.length; i++) {
        numerosCadena2.innerHTML += i + ',';
    }
    // Quitar la coma al final de la cadena
    numerosCadena2.innerHTML = numerosCadena2.innerHTML.slice(0, -1);
}

// Reto 2: Imprimir al revés mi arreglo
let miArray4: number[] = [];
miArray4.push(1);
miArray4.push(2);
miArray4.push(3);
miArray4.reverse(); 
console.log(miArray4);

// Reto 3: Imprimir en pantalla las 2 imágenes usando HTML semantics FIGURE

