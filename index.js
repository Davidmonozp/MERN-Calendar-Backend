const path = require('path');
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();


//crear servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio publico
app.use(express.static('public'))

// Lectura y parseo del body
app.use(express.json()); 

// Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


// escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});