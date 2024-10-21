let persona ={
    nombre: 'Pablo',
    tecnologia: ['HTML','CSS','JavaScript']

}
const muestraTecnologica =(persona)=>{
    persona.tecnologia.forEach(tecnologia => {
        console.log(persona.nombre)
    });
}