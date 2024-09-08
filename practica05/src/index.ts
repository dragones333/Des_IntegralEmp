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
console.log(frutaA,fruta2)
