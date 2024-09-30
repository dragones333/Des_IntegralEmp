// function obtenerDatos(nombre,apellido,edad){
//     return `Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`;
// }
/*const obtenerDatos = (nombre,apellido,edad)=>{
    
    return `Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`; }*/
    const {nombre,apellido,edad} =require('./datos')
    const obtenerDatos =require('./obtenerDatos')


    console.log(obtenerDatos(nombre,apellido,edad));