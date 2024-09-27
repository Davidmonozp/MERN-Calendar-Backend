const mongoose = require('mongoose');

// Desestructurar Schema desde mongoose
const { Schema } = mongoose;



const EventoSchema = new Schema({  // Asegúrate de usar "new Schema"

    title: {
        type: String,
        required: true
    },

    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    notes: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});


EventoSchema.method('toJSON', function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object
})

// Exportar el modelo correctamente
module.exports = mongoose.model('Evento', EventoSchema);
