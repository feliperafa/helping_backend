const mongoose = require('mongoose')
const Ong = mongoose.model('Ongs')

exports.listAll = (req, res) => {
    Ong.find({}, (err, ongs) => {
        if (err) {
            res.send(err)
        }
        res.send(ongs)
    })
}

exports.createOne = (req, res) => {
    const { nome_ong, telefone_ong, cnpj_ong, email, descricao, senha, endereco, numero } = req.body
    let novaong = new Ong({ nome_ong, telefone_ong, cnpj_ong, email, descricao, senha, endereco, numero })
    novaong.save((error, ong) => {
        if (error) {
            res.send("Erro: " + error)
        }
        res.status(201).json(ong)
    })
}

exports.showOne = (req, res) => {
    Ong.findById(req.params.id, (err, ong) => {
        if (err) {
            res.send(err)
        }
        res.status(201).json(ong)
    })
}

exports.updateOng = (req, res) => {
    Ong.findOneAndUpdate({ _id: req.params.id }, req.body,
        { new: true },
        (err, ong) => {
            if (err) {
                res.send(err)
            }
            res.status(200).send('Dados atualizado com sucesso!')
        })
}

exports.deleteOng = (req, res) => {
    Ong.remove({ _id: req.params.id }, (err, ong) => {
        if (err) {
            res.send(err)
        }
        res.status(200).json('Ong deletado com sucesse!')
    })
}
/*
nome_ong
telefone_ong
cnpj_ong
email
descricao
senha
endereco
numero
*/