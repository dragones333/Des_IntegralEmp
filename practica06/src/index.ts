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


//-----------------------------------------

enum CategoriaProducto {
    Electronica = "Electrónica",
    Ropa = "Ropa",
    Hogar = "Hogar",
    Alimentos = "Alimentos"
}
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
