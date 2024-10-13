function suma(a, b) {
    return a + b;
}
var resultadol = suma(2, 3);
console.log(resultadol); // 5
var fSum1 = suma(5, 80);
// fSum = sum(5, 4); // Error porque fSum es una constante
console.log(fSum1); // 85
// Funciones de orden superior
// Funciones arrow (flecha)
var sumArrowc = function (a, b) {
    return a + b;
};
// Función anónima
var funcionAnonima = function () {
    console.log("Hola mundo");
};
funcionAnonima();
// Función anónima arrow
var funcionAnonimaArrow = function () {
    console.log("Hola mundo desde una función anónima arrow");
};
funcionAnonimaArrow();
/*
console.log(operation(a:number,b:number):number => return a*b);
No es posible hacerlo de esta manera
*/
// Función de operación con arrow
var operation = function (a, b) { return a * b; };
console.log(operation(3, 4)); // 12
// Función de saludo
function saludo(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludo("Juan"));
// Función arrow que no es anónima
var saludoArrow = function (nombre) { return "Hola " + nombre; };
console.log(saludoArrow("Greys"));
// Función advertencia (void)
function advertencia() {
    console.log("Cuidado");
}
advertencia();
// Función error (never)
function error(mensaje) {
    var mensajeError = document.getElementById("mensajeError");
    if (mensajeError) {
        mensajeError.innerHTML = "Error en la aplicacion";
    }
    else {
        console.error("El elemento mensajeError no se encontró en el DOM");
    }
    throw new Error(mensaje);
}
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
var operación = function (a, b, operacion) {
    return operacion === 'suma' ? a + b :
        operacion === 'resta' ? a - b :
            operacion === 'multiplicacion' ? a * b :
                operacion === 'divicion' ? a / b :
                    (function () { throw new Error('Operación no válida'); })();
};
console.log(operación(5, 16, 'suma'));
console.log(operación(50, 10, 'resta'));
console.log(operación(5, 16, 'multiplicacion'));
console.log(operación(50, 10, 'divicion'));
