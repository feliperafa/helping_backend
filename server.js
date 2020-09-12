const express = require('express')
const bodyParser = require('body-Parser')
const mongoose = require('mongoose')
const cors = require('cors')
const Usuario = require('./src/models/doacaoModels')
const Voluntarios = require('./src/models/voluntarioModels')

const app = express()
app.use(cors())

//============================================Conexão com o banco mongoDB============================================
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/HelpingDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//============================================Conexão com o banco mongoDB============================================


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./src/routes/routes')

routes(app)

app.route('/').get((req, res) => {
    res.send('Acessou API do Backend')
})

const port = process.env.PORT || 3001

app.listen(port)

console.log('Aplicação Iniciada na Porta', port)