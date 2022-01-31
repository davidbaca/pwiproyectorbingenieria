//Configuración de las librerías que usamos
const express = require ('express');
const path = require ('path');
const app = express();
const dotenv = require('dotenv');                   
const PORT = process.env.PORT || 3000;

//Connexión a la base de datos
//const { connection } = require('./DB/config');

//Configuración de los middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Configuración de las rutas de mi aplicación
app.use('/consultas',require('./routes/consultas'));

//Configuracion del puerto del Servidor
app.listen(PORT,() =>{
    console.log(`Servidor corriendo en el puerto:${PORT}`);
});
 app.on('error',(err)=>{
    console.log(`${err}`);
});  


/* module.exports = connection; */
