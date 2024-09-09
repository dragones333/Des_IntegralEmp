"use strict";
let miVariable = 'Hola mundo';
//create object
const persona1 = {
    firstName1: "John",
    lastName1: "Doe",
    age: 50
};
//destructuring
let { firstName1, lastName1 } = persona1;
console.log(firstName1, '', lastName1);
let miNombre = "Marco";
let [a1, a2, a3, a4, a5] = miNombre;
console.log(a1, a2, a3, a4, a5);
console.log(a3);
const frutas = ["platanos", "naranjas", "manzanas", "mangos"];
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
let [frutaA, , , frutaB] = frutas;
console.log(frutaA, fruta2);
class Persona2 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    getEdad() {
        return this.edad;
    }
    setEdad() {
        return this.edad;
    }
    setNombre() {
        return this.nombre;
    }
    getNombre(nombre) {
        return this.nombre;
    }
}
let personaje1 = new Persona2('Alberto', 30);
console.log(personaje1.edad);
console.log(personaje1.nombre);
//personaje1.edad='Hola';
personaje1.edad = 25;
console.log(personaje1.edad);
let personaje2 = new Persona2('Carlos', 19);
personaje2.setEdad(20);
console.log('Nombre: ' + personaje2.getNombre());
console.log('Edad: ' + personaje2.getEdad());
