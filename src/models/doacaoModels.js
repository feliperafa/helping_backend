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
        type: Number,
        required: true,
    },
    valor_doacao: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    valor_doacao_sistema: {
        type: mongoose.Types.Decimal128,
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

module.exports = mongoose.model('Doacoes', DoacaoSchema)