const express=require('express');
const router=express.Router();


router.get('/articulos',(req,res)=>{
    res.render('articulos', {titulo: 'Articulos', articulos: articulos})
});

    const blogs = [
        {titulo: 'Artículo X1', autor: 'Diego Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo X2', autor: 'Pablo Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo x3', autor: 'Ana Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo X4', autor: 'Francisco Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo x5', autor: 'Maron Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo X6', autor: 'Rodrigo Rojas', contenido: 'Lorem ipsum'},
        {titulo: 'Artículo X7', autor: 'Manuel Rojas', contenido: 'Lorem ipsum'},
    ];