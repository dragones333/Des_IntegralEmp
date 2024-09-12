"use strict";
//Enums
var Color;
(function (Color) {
    Color[Color["Rojo"] = 50] = "Rojo";
    Color[Color["Verde"] = 51] = "Verde";
    Color[Color["Azul"] = 52] = "Azul";
})(Color || (Color = {}));
console.log(Color.Verde);
//Color.Rojo=100;
console.log(Color.Rojo);
let color1 = Color.Rojo;
color1 = Color.Verde;
//color1=20;
console.log('color1', color1);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "Norte";
    CardinalDirections["Sourt"] = "Sur";
    CardinalDirections["NorWest"] = "Oeste";
    CardinalDirections["West"] = "Este";
})(CardinalDirections || (CardinalDirections = {}));
let direction = CardinalDirections.North;
console.log('direction:', direction);
var StatusCode;
(function (StatusCode) {
    StatusCode["Success"] = "Hecho";
    StatusCode["Volumen"] = "Volumen";
    StatusCode["NotFound"] = "Error";
})(StatusCode || (StatusCode = {}));
let statusCode = StatusCode.Success;
// statusCode = 50; 
statusCode = StatusCode.NotFound;
console.log('statusCode', statusCode);
let volumen = 100;
console.log('volumen:', volumen);
//-----------------------------------------
var CategoriaProducto;
(function (CategoriaProducto) {
    CategoriaProducto["Electronica"] = "Electr\u00F3nica";
    CategoriaProducto["Ropa"] = "Ropa";
    CategoriaProducto["Hogar"] = "Hogar";
    CategoriaProducto["Alimentos"] = "Alimentos";
})(CategoriaProducto || (CategoriaProducto = {}));
let productoA = { nombre: "Laptop", precio: 15000, categoria: CategoriaProducto.Electronica };
let productoB = { nombre: "Camisa", precio: 500, categoria: CategoriaProducto.Ropa };
console.log(productoA);
console.log(productoB);
let usuarioX = { nombre: "Juan Pérez", correo: "juan@mail.com", direccion: "Av. Siempre Viva 123" };
console.log(usuarioX);
let carritoX = [productoA, productoB];
carritoX.forEach(productoX => console.log(`Producto: ${productoX.nombre}, Precio: $${productoX.precio}, Categoría: ${productoX.categoria}`));
let totalX = carritoX.reduce((sumaX, productoX) => sumaX + productoX.precio, 0);
console.log("Total:", totalX);
