
//Creacion de constantes para el servidor de express 
var express = require('express');
const { request } = require('http');
var application = express();

//el puerto por el que va a correr.
require('dotenv').config();

//los parametros son los datos que estan entrando (parametros, cabeceras, headers, etc.) ese es el request
// el response es el que vamos a usar para devolver informacion.
application.get('/',(request,response) => {
response.send();
});


application.get('/check-health',(request,response) => {
response.status(200).json({message: 'service is running'});
});

application.listen(process.env.PORT,()=> {
    console.log(`Run service on ${process.env.PORT}`);
});


//app.listen (port, ()=> {
    //console.log('La aplicacion esta en linea');
//})
