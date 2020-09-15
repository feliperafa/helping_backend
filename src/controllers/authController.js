const { authSecret } = require('../../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

const mongoose = require('mongoose')
const Ong = mongoose.model('Ongs')

exports.signIn = async (req, res) => {
    if (!req.body.email || !req.body.senha) {
        return res.status(400).send('Informe usuário e senha!')
    }

    const user = await Ong.findOne({ email: req.body.email })
    
    if (!user) return res.status(400).send('usuário não encontrado!')
    
    const isMatch = bcrypt.compareSync(req.body.senha, user.senha)
    
    if (!isMatch) return res.status(401).send('Email/Senha invalidos!')
    
    const now = Math.floor(Date.now() / 1000)
    

    const payload = {
        id: user._id,
        name: user.nome_ong,
        email: user.email,
        iat: now,
        exp: now + (60 * 60 * 24)
    }
    
try {
    res.json({
        ...payload,
        token: jwt.encode(payload, authSecret)
    })

}catch (er) {
    console.log(er)
}

}

exports.validateToken = async (req, res) => {
    const userData = req.boy || null
    try {
        if (userData) {
            const token = jwt.decode(userData.token, authSecret)
            if (new Date(token.exp * 1000) > new Date()) {
                return res.send(true)
            }
        }
    } catch (e) {

    }
    res.send(false)
}

