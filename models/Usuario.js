const mongoose = require('mongoose');

// Desestructurar Schema desde mongoose
const { Schema } = mongoose;

const UsuarioSchema = new Schema({  // Asegúrate de usar "new Schema"

    name: {
        type: String,
        required: true  // Cambia "require" a "required"
    },
    email: {
        type: String,
        required: true,  // Cambia "require" a "required"
        unique: true
    },
    password: {  // Corrige "passwor" a "password"
        type: String,
        required: true  // Cambia "require" a "required"
    }
});

// Exportar el modelo correctamente
module.exports = mongoose.model('Usuario', UsuarioSchema);
