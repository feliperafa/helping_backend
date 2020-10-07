const mongoose = require('mongoose');
const Ong = mongoose.model('Ongs');
const bcrypt = require('bcrypt-nodejs');

exports.listAll = (req, res) => {
    Ong.find({}, (err, ongs) => {
        if (err) {
            res.send(err)
        }
        res.send(ongs)
    })
}

exports.createOne = (req, res) => {

    const ecryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    let { nome_ong, telefone_ong, cnpj_ong, email, descricao, senha, endereco, numero } = req.body;

    senha = ecryptPassword(senha)

    let novaong = new Ong({ nome_ong, telefone_ong, cnpj_ong, email, descricao, senha, endereco, numero })
    console.log(novaong)
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

exports.updateOng = async (req, res) => {
 
    try {
        const ecryptPassword = password => {
            const salt = bcrypt.genSaltSync(10)
            return bcrypt.hashSync(password, salt)
        }

        let { _id, telefone_ong, email, descricao, senha, endereco, numero } = req.body;

        if(senha.length < 11) {
            senha = ecryptPassword(senha)
        }
         await Ong.updateOne({ _id }, {
            $set: { telefone_ong, email, senha, endereco, numero, descricao }
        })
       
         res.status(201).json({_id})

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

exports.deleteOng = (req, res) => {
    Ong.remove({ _id: req.params.id }, (err, ong) => {
        if (err) {
            res.send(err)
        }
        res.status(200).json('Ong deletado com sucesse!')
    })
}

exports.deleteAll = (req, res) => {
    Ong.remove({}, (err, ongs) => {
        if (err) {
            res.send(err)
        }
        res.send(ongs)
    })
}
