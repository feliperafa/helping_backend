const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VoluntarioSchema = new Schema({
    nome_voluntario: {
        type: String,
        required: true,
    },
    telefone_voluntario: {
        type: Number,
        required: true,
    },
    cpf_voluntario: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    endereco: {
        type: String,
        required: true,
        lowercase: true,
    },
    numero: {
        type: Number,
        required: true
    },
    createdAT: {
        type: Date,
        default: Date.now
    },
    id_ong: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ogns'
    }


})

module.exports = mongoose.model('Voluntarios', VoluntarioSchema)