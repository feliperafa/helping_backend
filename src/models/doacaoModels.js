const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DoacaoSchema = new Schema({
    nome_doador: {
        type: String,
        required: true,
    },
    email_doador: {
        type: String,
        required: true,
        lowercase: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    valor_doacao: {
        type: String,
        required: true,
    },
    valor_doacao_sistema: {
        type: String,
    },
    createdAT: {
        type: Date,
        default: Date.now
    },
    id_ong: {
        type: String,
         required: true,
    }


})

module.exports = mongoose.model('Doacoes', DoacaoSchema)