module.exports = function (app) {
    const doacoes = require('../controllers/doacaoControllers')
    const ongs = require('../controllers/ongControllers')
    const voluntarios = require('../controllers/voluntarioControllers')
    const auth = require('../controllers/authController')

    app.route('/signin')
        .post(auth.signIn)

    app.route('/validateToken')
        .post(auth.validateToken)

    //================================DOAÇÕES================================

    app.route('/doacoes')
        .delete(doacoes.deleteAll)

    app.route('/doacoes/:id')
        .post(doacoes.newDoacao)
        .get(doacoes.listar)
    //  .get(doacoes.listbyId)
    // .get(doacoes.showOne)
    // .put(doacoes.updateUser)
    // .delete(doacoes.removerUser)

    //================================ONGS================================
    app.route('/ongs')
        .get(ongs.listAll)
        .post(ongs.createOne)
        .delete(ongs.deleteAll)

    app.route('/ongs/:id')
        .get(ongs.showOne)
        .put(ongs.updateOng)
        .delete(ongs.deleteOng)

    //================================VOLUNTARIOS================================
    // app.route('/voluntarios')
    // .delete(voluntarios.deleteAll)

    app.route('/voluntarios/:id')
        .post(voluntarios.createOne)
        .get(voluntarios.listAll)
        // .get(voluntarios.showOne)
        .put(voluntarios.update)
    //     .delete(voluntarios.delete)

}