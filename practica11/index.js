const express =require('express');
const app = express();
const port=3000;

app.get('/', (req,res)=>{
    res.send('hola Mundo con express')
})

app.get('/productos',(req,res)=>{
    res.send('hola Mundo con express');
});

app.listen(port,() => {
    console.log(`ejemplo`)
});