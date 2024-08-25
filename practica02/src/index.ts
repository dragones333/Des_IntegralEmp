let miNumero: number = 10;

miNumero = 10 + 10;
miNumero = 2.5;
console.log(miNumero);

let booleano: boolean = true;
booleano = false;

// booleano = 3;
let encendido: boolean = false;
//console.log(encendido);
encendido = true;

console.log('Encendido es:', encendido);
console.log('Encendido es:', { encendido });

// Operaciones lógicas
encendido = true && false;
console.log(encendido); 

encendido = true && true;
console.log(encendido); 

encendido = false && true;
console.log(encendido); 

encendido = false && false;
console.log(encendido); 

encendido = true;
console.log(encendido); 

let normal: any = 'hola';
normal = 10;
normal = true;
normal = 11.25;
console.log('Normal:', normal);
