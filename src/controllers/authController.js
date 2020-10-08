const { authSecret } = require('../../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

const mongoose = require('mongoose')
const Ong = mongoose.model('Ongs')

exports.signIn = async (req, res) => {
    const { email, senha } = req.body
    if (!email || !senha) res.status(400).send('Informe usuário e senha!')
    const user = await Ong.findOne({ email: email })
    if (!user) res.status(400).send('usuário não encontrado!')
    const isMatch = bcrypt.compareSync(senha, user.senha)
    if (!isMatch) res.status(401).send('Email/Senha invalidos!')

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

    } catch (er) {
        console.log(er)
    }

}

exports.validateToken = async (req, res) => {
    console.log(req.body)
    const userData = req.body || null
    try {
        if (userData) {
            const token = jwt.decode(userData.token, authSecret)
            console.log("true " + userData.token)
            if (new Date(token.exp * 1000) > new Date()) {
                return res.send({ token: true })
            }
        }
    } catch (e) {

    }
    console.log("false " + userData.token)
    res.send({ token: false })
}

