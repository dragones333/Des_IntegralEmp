let miVariable:string='Hola mundo'
//create object
const persona1={
    firstName1:"John",
    lastName1:"Doe",
    age:50
}
//destructuring
let {firstName1,lastName1}=persona1;
console.log(firstName1,'',lastName1);

let miNombre="Marco";
let[a1,a2,a3,a4,a5]:any=miNombre;
console.log(a1,a2,a3,a4,a5);
console.log(a3);

const frutas =["platanos","naranjas","manzanas","mangos"];
let [fruta1,fruta2]=frutas;
console.log(fruta1,fruta2);

let [frutaA,,,frutaB]=frutas;
console.log(frutaA,fruta2);

class Persona2{
    nombre:string;
    apellidoPaterno:string;
    apellidoMaterno:string;
    edad:number;
    nombreCompleto:string;

    constructor(nombre:string,apellidoPaterno:string,apellidoMaterno:string,edad:number,nombreCompleto:string){
        this.nombre=nombre;
        this.apellidoPaterno=apellidoPaterno;
        this.apellidoMaterno=apellidoMaterno;
        this.edad=edad;
        this.nombreCompleto=nombre+apellidoPaterno+apellidoMaterno
    }
    getEdad():number{
        return this.edad;
    }
    setEdad(edad:number):void{
         this.edad=edad;
    }
    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string):string{
        return this.nombre;
    }
    setApellidoPaterno(apellidoPaterno:string):string{
        return this.apellidoPaterno;
    }
    getApellidoPaterno():string{
        return this.apellidoPaterno;
    }
    setApellidoMaterno(apellidoPaterno:string):string{
        return this.apellidoMaterno;
    }
    getApellidoMaterno():string{
        return this.apellidoMaterno;
    }
    setNombreCompleto(nombreCompleto:string):string{
        return this.nombreCompleto;
    }
    getNombreCompleto():string{
        return this.nombreCompleto;
    }
}


let personaje1=new Persona2('Alberto','Guadarrama','Delgado',30,"");

console.log(personaje1.edad);
console.log(personaje1.nombre);
//personaje1.edad='Hola';
personaje1.edad=25;
console.log(personaje1.edad);

let personaje2=new Persona2('Carlos','Serrano','Moroleon',19,"");
personaje2.setEdad(20);
console.log('Nombre: '+personaje2.getNombre());
console.log('Edad: '+ personaje2.getEdad());

console.log(personaje1.nombre);
//nombreCompleto


//interface
interface User{
    name:string;
    id:number; 
}
 class UserAccount{
    name:string;
    id:number;
    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }
 }

 const UsuarioX: User =new UserAccount('Imagin Dragon',1);
 console.log(UsuarioX.name,UsuarioX.id);
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

class Animal{
    nombre:string;
    constructor(nombre:string){
        this.nombre=nombre;
    }
    mover(distancia: number = 0){
        //template string
        console.log(`${this.nombre} se movio ${distancia} mts`);
    }

    hacerSonido(sonido:string='Sin Sonido'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

let animal1 = new Animal('Grillo');
animal1.mover(5);
animal1.hacerSonido('Prii Prii');

class Perro extends Animal{
    constructor(nombre:string){
        super (nombre);
    }

    mover(distancia: number = 5){
        console.log('Caminando y Corriendo');
        super.mover(distancia);
    }

    hacerSonido(sonido='Ladrido' ) {
        console.log(`${this.nombre} hace ${sonido}`)
    }
}

const perro1=new Perro ('Firulais');
perro1.mover(10);
perro1.hacerSonido("Guau Guau");

class Serpiente extends Animal{
    constructor(nombre:string){
        super (nombre);
    }

    mover(distancia: number = 1){
        console.log('Reptando');
        super.mover(distancia);
    }

    hacerSonido(sonido='Siseo' ) {
        console.log(`${this.nombre} hace ${sonido}`)
    }
}

const serpiente1=new Serpiente ('Cobra');
serpiente1.mover(2);
serpiente1.hacerSonido("Sisiseo");


//------------------------------------------

class Productos {
    private nombre: string;
    private precio: number;
    private cantidad: number;

    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getPrecio(): number {
        return this.precio;
    }

    setPrecio(precio: number): void {
        this.precio = precio;
    }

    getCantidad(): number {
        return this.cantidad;
    }

    setCantidad(cantidad: number): void {
        this.cantidad = cantidad;
    }

    calcularTotal(): number {
        return this.precio * this.cantidad;
    }
}

class Persona {
    protected nombre: string;
    protected apellido: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }
}

class Usuario extends Persona {
    private email: string;

    constructor(nombre: string, apellido: string, edad: number, email: string) {
        super(nombre, apellido, edad);
        this.email = email;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    mostrarInfoUsuario(): string {
        return `${this.getNombreCompleto()}, Edad: ${this.edad}, Email: ${this.email}`;
    }
}

class Carrito {
    private productos: Productos[] = [];

    agregarProducto(producto: Productos): void {
        this.productos.push(producto);
    }

    quitarProducto(nombre: string): void {
        this.productos = this.productos.filter(p => p.getNombre() !== nombre);
    }

    calcularTotalCarrito(): number {
        return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
    }

    mostrarProductos(): void {
        this.productos.forEach(producto => {
            console.log(`${producto.getNombre()} - $${producto.getPrecio()} x ${producto.getCantidad()}`);
        });
    }
}

class MetodoDePago {
    private tipo: string;
    private saldo: number;

    constructor(tipo: string, saldo: number) {
        this.tipo = tipo;
        this.saldo = saldo;
    }

    getTipo(): string {
        return this.tipo;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    getSaldo(): number {
        return this.saldo;
    }

    setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    procesarPago(monto: number): boolean {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            console.log(`Pago de $${monto} procesado con ${this.tipo}. Saldo restante: $${this.saldo}`);
            return true;
        } else {
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
