const express = require('express');

const app = express();

app.listen(3000, () => {

    app.get('/',(req,res) => {
        res.send('Hola mundo');
    });

    app.get('/page',(req,res)=> {
        res.send('page');
    });
    
    app.get('/page_about',(req,res)=> {
        res.send('page about');
    });

    console.log('Server alojado en 3000')
});