module.exports = function (app) {
    const doacoes = require('../controllers/doacaoControllers')
    const ongs = require('../controllers/ongControllers')
    const voluntarios = require('../controllers/voluntarioControllers')

    //================================DOAÇÕES================================

    app.route('/doacoes')
    // .get(doacoes.listAll)

    app.route('/doacoes/:id')
    // .post(doacoes.newDoacao)
    // .get(doacoes.showOne)
    // .put(doacoes.updateUser)
    // .delete(doacoes.removerUser)

    //================================ONGS================================
    app.route('/ongs')
        .get(ongs.listAll)
        .post(ongs.createOne)

    app.route('/ongs/:id')
        .get(ongs.showOne)
        .put(ongs.updateOng)
        .delete(ongs.deleteOng)

    //================================VOLUNTARIOS================================
    app.route('/voluntarios')
        .post(voluntarios.creatOne)
        .get(voluntarios.listAll)
        .delete(voluntarios.deleteAll)

    app.route('/voluntarios/:id')
        .get(voluntarios.showOne)
        .put(voluntarios.update)
        .delete(voluntarios.delete)


}