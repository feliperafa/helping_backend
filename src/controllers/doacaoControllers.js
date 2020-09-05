const mongoose = require('mongose')
const Doacao = mongoose.model('Doacoes')

exports.newDoacao = (req, res) => {

    const { _id } = req.params
    const { nome_doador, email_doador, cpf, valor_doacao } = req.body
    const novaDoacao = new Doacao({ nome_doador, email_doador, valor_doacao, cpf })
    if (!_id) {
        throw new Error('Id da Ong - Invalido/Vazio')
        const ong_localizada = Ong.findOne({
            _id: req.params.id
        })
    } if (!ong_localizada) {
        throw new Error('Ong Não Cadastrada / Id Invalido')
    }
    if (valor_doacao || !cpf || nome_doador || !email_doador) {
        throw new Error('Valores Invalidos')
    }
    const valor_porcentagem = valor_doacao * 0.1
    novaDoacao.save({
        nome_doador,
        email_doador,
        cpf,
        valor_doacao: valor_doacao - valor_porcentagem,
        valor_doacao_sistema: valor_porcentagem
    })

    res.status(200).json({ ok: 'Doação Realizada com Sucesso' })
}