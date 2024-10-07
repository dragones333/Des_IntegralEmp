const express = require('express')
const app =express()

app.get('/',(req,res)=>{
    res.send('Hola Josue desde Express y nodemon');
});

app.get('/productos',(req,res)=>{
    res.send('Estamos en productos')
})

app.listen(3000,()=> {
console.log('Server on port 3000')
})

/*
Nodemon es una herramienta para ayudar a desarrollar
para installar nodemon se ejecuta el siguiente comando
npm install nodemon
*/