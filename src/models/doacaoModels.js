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
        type: Number,
        required: true,
    },
    valor_doacao_sistema: {
        type: Number,
    },
    createdAT: {
        type: Date,
        default: Date.now
    },
    ongs: [{
        id_ong: {
            type: mongoose.Schema.Types.ObjectId
        }
    }],
    
    
})

module.exports = mongoose.model('Doacoes', DoacaoSchema)