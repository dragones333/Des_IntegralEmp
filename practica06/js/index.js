"use strict";
//Enums
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
console.log(Color.Verde);
//Color.Rojo=100;
console.log(Color.Rojo);
let color1 = Color.Rojo;
color1 = Color.Verde;
//color1=20;
console.log('color1', color1);
