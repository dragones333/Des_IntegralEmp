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
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, nombreCompleto) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
        this.nombreCompleto = nombre + apellidoPaterno + apellidoMaterno;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        return this.nombre;
    }
    setApellidoPaterno(apellidoPaterno) {
        return this.apellidoPaterno;
    }
    getApellidoPaterno() {
        return this.apellidoPaterno;
    }
    setApellidoMaterno(apellidoPaterno) {
        return this.apellidoMaterno;
    }
    getApellidoMaterno() {
        return this.apellidoMaterno;
    }
    setNombreCompleto(nombreCompleto) {
        return this.nombreCompleto;
    }
    getNombreCompleto() {
        return this.nombreCompleto;
    }
}
let personaje1 = new Persona2('Alberto', 'Guadarrama', 'Delgado', 30, "");
console.log(personaje1.edad);
console.log(personaje1.nombre);
//personaje1.edad='Hola';
personaje1.edad = 25;
console.log(personaje1.edad);
let personaje2 = new Persona2('Carlos', 'Serrano', 'Moroleon', 19, "");
personaje2.setEdad(20);
console.log('Nombre: ' + personaje2.getNombre());
console.log('Edad: ' + personaje2.getEdad());
console.log(personaje1.nombre);
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const UsuarioX = new UserAccount('Imagin Dragon', 1);
console.log(UsuarioX.name, UsuarioX.id);
//reto: crear al menos 5 clases que van a susar en su proyecto final, 3 propiedades por clase(get y set)
//, 1 metodo o funcion, y 1 constructor
/*
class pruducto{}
class usuario
class carrito
class metodosdepago
class
*/
//Herencia 
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mover(distancia = 0) {
        //template string
        console.log(`${this.nombre} se movio ${distancia} mts`);
    }
    hacerSonido(sonido = 'Sin Sonido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
let animal1 = new Animal('Grillo');
animal1.mover(5);
animal1.hacerSonido('Prii Prii');
class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    mover(distancia = 5) {
        console.log('Caminando y Corriendo');
        super.mover(distancia);
    }
    hacerSonido(sonido = 'Ladrido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
const perro1 = new Perro('Firulais');
perro1.mover(10);
perro1.hacerSonido("Guau Guau");
class Serpiente extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    mover(distancia = 1) {
        console.log('Reptando');
        super.mover(distancia);
    }
    hacerSonido(sonido = 'Siseo') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
const serpiente1 = new Serpiente('Cobra');
serpiente1.mover(2);
serpiente1.hacerSonido(" Sisiseo");
