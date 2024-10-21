const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000; 

const listarArchivosYCarpetas = (dirPath) => {
    const resultado = [];

    const leerDirectorio = (directorio) => {
        const archivos = fs.readdirSync(directorio);
        archivos.forEach(archivo => {
            const rutaCompleta = path.join(directorio, archivo);
            const esCarpeta = fs.lstatSync(rutaCompleta).isDirectory();
            resultado.push({
                nombre: archivo,
                ruta: rutaCompleta,
                tipo: esCarpeta ? 'carpeta' : 'archivo'
            });
            if (esCarpeta) {
                leerDirectorio(rutaCompleta); 
            }
        });
    };

    leerDirectorio(dirPath);
    return resultado;
};

app.get('/api/archivos', (req, res) => {
    const rutaProyecto = 'C:\\UNIVERSIDAD\\Cuarto Semestre\\Apps Empresariales\\AE'; 
    const archivosYCarpetas = listarArchivosYCarpetas(rutaProyecto);
    res.json(archivosYCarpetas); 
});

app.use(express.static(__dirname));

const escribirArchivo = (nombre, contenido) => {
    fs.writeFile(nombre, contenido, (err) => {
        if (err) {
            console.log('Error al escribir el archivo:', err);
        } else {
            console.log('Se escribió correctamente:', nombre);
        }
    });
};

const eliminarArchivo = (nombre) => {
    fs.unlink(nombre, (err) => {
        if (err) {
            console.log('Error al eliminar el archivo:', err);
        } else {
            console.log('Se eliminó el archivo:', nombre);
        }
    });
};

const crearCarpeta = (nombre) => {
    fs.mkdir(nombre, { recursive: true }, (err) => {
        if (err) {
            console.log('Error al crear la carpeta:', err);
        } else {
            console.log('Se creó la carpeta:', nombre);
        }
    });
};

escribirArchivo('nuevoArchivo.txt', 'Hola, sobrescribiendo el archivo');
eliminarArchivo('nuevoArchivo.txt');
crearCarpeta('nuevaCarpeta');

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
