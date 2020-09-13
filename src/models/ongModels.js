const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OngSchema = new Schema({
    nome_ong: {
        type: String,
        required: true,
    },
    telefone_ong: {
        type: String,
        required: true,
    },
    cnpj_ong: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    descricao: {
        type: String,
        required: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true,
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
    
})

module.exports = mongoose.model('Ongs', OngSchema)