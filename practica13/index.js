const fs = require('fs');
//console.log(fs);

/*const leerArchivo = (err,data) =>{
//     if(er){
//         console.log('Error', err);
//     } else {
//         console.log(data.toString());
//     }
}*/

const leerArchivo = (err,data) =>(err) ? console.log('Error',err):console.log(data.toString());

fs.readFile('archivo.txt',leerArchivo);

const escribirArchivo =(err) => {
    if(er){
             console.log('Error', err);
         } else {
             console.log('Se escribio correctaamente');
}
}

fs.writeFile('nuevoArchivo.txt','Hola, sobrescribiendo el archivo', escribirArchivo);


fs.unlink('nuevoArchivo.txt',(err)=>{
    console.log('Se elimino el archivo');
})

fs.mkdir('nuevaCarpeta',(err)=>{
    console.log('Se creo carpeta');
});

/*fs.mrdir('nuevaCarpeta',(err)=>{
    console.log('Se elimino carpeta');
});*/

//Leer un directorio
fs.readdir('./',(err,files)=>{
    console.log(files);
});

const copiarArchivo=(err)=>{
    if(er){
        console.log('Error:',err);
    } else{
        console.log('se copio el archivo');
    }
};

fs.copyFile('archivo2.txt','copiarArchivo.txt',copiarArchivo)


/*Reto
leertodos los archivo y carpetas
de nuestro directorioy vamos a
crear un front end que muestre los
archivos y carpetas que muestre los iconos
para diferenciar (fileSystem) 
usar bootstrap icons 

*/