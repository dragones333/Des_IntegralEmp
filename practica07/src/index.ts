function suma(a: number, b: number): number {
    return a + b;
}

let resultadol = suma(2, 3);
console.log(resultadol); // 5

const fSum1 = suma(5, 80);
// fSum = sum(5, 4); // Error porque fSum es una constante
console.log(fSum1); // 85

// Funciones de orden superior

// Funciones arrow (flecha)
const sumArrowc = (a: number, b: number): number => {
    return a + b;
};

// Función anónima
let funcionAnonima = function () {
    console.log("Hola mundo");
};
funcionAnonima();

// Función anónima arrow
let funcionAnonimaArrow = () => {
    console.log("Hola mundo desde una función anónima arrow");
};
funcionAnonimaArrow();

/* 
console.log(operation(a:number,b:number):number => return a*b);
No es posible hacerlo de esta manera 
*/

// Función de operación con arrow
const operation = (a: number, b: number): number => a * b;
console.log(operation(3, 4)); // 12

// Función de saludo
function saludo(nombre: string): string {
    return `Hola ${nombre}`;
}
console.log(saludo("Juan"));

// Función arrow que no es anónima
const saludoArrow = (nombre: string): string => "Hola " + nombre;
console.log(saludoArrow("Greys"));

// Función advertencia (void)
function advertencia() {
    console.log("Cuidado");
}
advertencia();

// Función error (never)
function error(mensaje: string): never {
    let mensajeError: HTMLElement | null = document.getElementById("mensajeError");
    if (mensajeError) {
        mensajeError.innerHTML = "Error en la aplicacion";
    } else {
        console.error("El elemento mensajeError no se encontró en el DOM");
    }
    throw new Error(mensaje);
}
//error("Error en la aplicacion");


//tipo literal
type accion='suma' | 'resta'|'multiplicacion'|'divicion';

/*function operación(a:number,b:number, operación:accion){
    if (operación=='suma'){
        return a+b;
    } else{
        return a-b;
    }
}
console.log(operación(5,16,'suma'));
console.log(operación(50,10,'resta'));*/

// const operación=(a:number,b:number, operación:accion):number=> operación=='suma' ? a+b:a-b;

const operación = (a: number, b: number, operacion: accion): number =>
    operacion === 'suma' ? a + b :
    operacion === 'resta' ? a - b :
    operacion === 'multiplicacion' ? a * b :
    operacion === 'divicion' ? a / b :
    (() => { throw new Error('Operación no válida'); })();

console.log(operación(5, 16, 'suma')); 
console.log(operación(50, 10, 'resta'));           
console.log(operación(5, 16, 'multiplicacion'));  
console.log(operación(50, 10, 'divicion'));        




