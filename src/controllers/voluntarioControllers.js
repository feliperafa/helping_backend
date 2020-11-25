const mongoose = require('mongoose')
const Voluntario = mongoose.model('Voluntarios')

exports.listAll = (req, res) => {
    console.log(req.params.id)

    Voluntario.find({ id_ong: req.params.id }, (err, voluntarios) => {
        if (err) {
            res.send(err)
        }
        res.status(200).json(voluntarios)
    })

}

exports.createOne = (req, res) => {
    console.log(req.body)
    const { nome_voluntario, telefone_voluntario, cpf_voluntario, email, endereco, numero } = req.body
    let novoVoluntario = new Voluntario({ nome_voluntario, telefone_voluntario, cpf_voluntario, email, endereco, numero, id_ong: req.params.id })
    novoVoluntario.save((error, voluntario) => {
        if (error) {
            res.send("Erro: " + error)
        }
        res.status(201).json(voluntario)
    })
}

exports.showOne = (req, res) => {
    Voluntario.findById(req.params.id, (err, voluntario) => {
        if (err) {
            res.send(err)
        }
        res.status(201).json(voluntario)
    })
}

exports.update = (req, res) => {
    Voluntario.findOneAndUpdate({ _id: req.params.id },
        req.body, { new: true },
        (err, voluntario) => {
            if (err) {
                res.send(err)
            }
            res.status(200).send('Voluntario atualizado com sucesso!')
        })
}

exports.delete = (req, res) => {
    Voluntario.remove({ _id: req.params.id }, (err, voluntario) => {
        if (err) {
            res.send(err)
        }
        res.status(200).json('Voluntario deletado com sucesse!')
    })
}