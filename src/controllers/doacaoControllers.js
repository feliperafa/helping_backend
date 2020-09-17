const mongoose = require('mongoose')
const Doacao = mongoose.model('Doacoes')
const Ong = mongoose.model('Ongs')

exports.newDoacao = async (req, res) => {

    const { id } = req.params
    const { nome_doador, email_doador, cpf, valor_doacao } = req.body;
    const valor_porcentagem = valor_doacao * 0.1;
    const valor_real = valor_doacao - valor_porcentagem
    let doa = new Doacao(
        { nome_doador, email_doador, cpf, valor_doacao: valor_real, valor_doacao_sistema: valor_porcentagem, id_ong: id })

    if (!valor_doacao || !cpf || !nome_doador || !email_doador || !id) {
        res.status(400).json('Erro favor preencha os dados em branco')
    }

    await doa.save({});
    res.status(200).json('Doação Realizda com Sucesso!.')
}


exports.deleteAll = (req, res) => {
    Doacao.remove({}, (err, doacoes) => {
        if (err) {
            res.send(err)
        }
        res.send(doacoes)
    })
}

exports.listar = async (req, res) => {
    Doacao.findById({ _id: req.params.id }, (err, doacoes) => {
        if (err) {
            res.send(err)
        }
        res.status(200).json(doacoes)
    })
}