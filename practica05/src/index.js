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

clase persona->
class usuario extendedPersona
class carrito
class metodosdepago

sera necesario establecer una clase padre y una clase hijo para aplicar el concepto de herencia
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
serpiente1.hacerSonido("Sisiseo");
//------------------------------------------
class Productos {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getPrecio() {
        return this.precio;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    getCantidad() {
        return this.cantidad;
    }
    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }
    calcularTotal() {
        return this.precio * this.cantidad;
    }
}
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
}
class Usuario extends Persona {
    constructor(nombre, apellido, edad, email) {
        super(nombre, apellido, edad);
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    mostrarInfoUsuario() {
        return `${this.getNombreCompleto()}, Edad: ${this.edad}, Email: ${this.email}`;
    }
}
class Carrito {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    quitarProducto(nombre) {
        this.productos = this.productos.filter(p => p.getNombre() !== nombre);
    }
    calcularTotalCarrito() {
        return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
    }
    mostrarProductos() {
        this.productos.forEach(producto => {
            console.log(`${producto.getNombre()} - $${producto.getPrecio()} x ${producto.getCantidad()}`);
        });
    }
}
class MetodoDePago {
    constructor(tipo, saldo) {
        this.tipo = tipo;
        this.saldo = saldo;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    procesarPago(monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            console.log(`Pago de $${monto} procesado con ${this.tipo}. Saldo restante: $${this.saldo}`);
            return true;
        }
        else {
            console.log('Saldo insuficiente para procesar el pago.');
            return false;
        }
    }
}
let producto1 = new Productos("Laptop", 15000, 1);
let producto2 = new Productos("Mouse", 500, 2);
let usuario1 = new Usuario("Carlos", "Gómez", 28, "carlos@example.com");
let carrito = new Carrito();
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
console.log(`Total del carrito: $${carrito.calcularTotalCarrito()}`);
carrito.mostrarProductos();
let metodoPago = new MetodoDePago("Tarjeta de Crédito", 20000);
metodoPago.procesarPago(carrito.calcularTotalCarrito());
