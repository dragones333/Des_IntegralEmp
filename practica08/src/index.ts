console.log("Hola codespace");

const nuevoHeroe:string ='Chapulin Colorado';

function returName():string{
    return nuevoHeroe;
}
console.log(returName());


const heroeNuevo = returName();
let otraVariable=returName();
console.log(heroeNuevo);
console.log('De quetipo es:', typeof otraVariable)

//Parametros obligatorios en funciones
const nombreCompleto =(nombre:string,apellido: string)=>{
    return `${nombre} ${apellido}`;
}
const tuNombre=nombreCompleto("Carlos","Serrano")
console.log(tuNombre);

//Parametros opcionales en funciones, swith
const nombreCompleto2 =(nombre:string,apellido?: string)=>{
    return `${nombre} ${apellido || 'No se proporciono apellido'}`;

}
// const tuNombre2=nombreCompleto2("Carlos2")
// console.log(tuNombre2);
// const nombreCompleto3 = (nombre?: string, apellido?: string, mayusculas: boolean = false) => {
//     return mayusculas ? `${nombre || 'No se proporciono nombre'} ${apellido || 'No se proporciono apellido'}`;
    
// };
// const tuNombre3 = nombreCompleto3("Carlos3", "Serrano 3", true);
// console.log(tuNombre3);

//Operador REST
const nombreCompleto4 = (nombre:string,edad:Number,...restoDeApellidos:string[])=>{
return `${nombre}...RESTO ${restoDeApellidos.join(' ')} ${edad}`
};

const superman4=nombreCompleto4('Clark',32,'Kent','Oswald','Smith');
console.log(superman4);