//Enums

enum Color {
    Rojo=50,
    Verde,
    Azul
}
console.log(Color.Verde);
//Color.Rojo=100;
console.log(Color.Rojo);
let color1=Color.Rojo;
color1=Color.Verde;
//color1=20;
console.log('color1',color1);

enum CardinalDirections{
    North="Norte",
    Sourt="Sur",
    NorWest="Oeste",
    West="Este"
}

let direction:CardinalDirections=CardinalDirections.North;
console.log('direction:', direction);

enum StatusCode {
    Success = "Hecho", 
    Volumen = "Volumen",
    NotFound = "Error"
}

let statusCode: StatusCode = StatusCode.Success;
// statusCode = 50; 
statusCode = StatusCode.NotFound;
console.log('statusCode', statusCode);
let volumen: number = 100;
console.log('volumen:', volumen);