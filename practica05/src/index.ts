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
class usuario
class carrito
class metodosdepago
class
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