module.exports = function (app) {
    const doacoes = require('../controllers/doacaoControllers')
    const ongs = require('../controllers/ongControllers')
    const voluntarios = require('../controllers/voluntarioControllers')

    //================================DOAÇÕES================================

    app.route('/doacoes')
    // .get(doacoes.listAll)

    app.route('/doacoes/:id')
        .post(doacoes.newDoacao)
        // .get(doacoes.showOne)
        // .put(doacoes.updateUser)
        // .delete(doacoes.removerUser)

    //================================ONGS================================
    app.route('/ongs')
        // .get(ongs.listAll)
        // .post(ongs.creatOne)

    app.route('/ongs/:id')
        // .get(ongs.showOne)
        // .put(ongs.updateUser)
        // .delete(ongs.removerUser)

    //================================VOLUNTARIOS================================
    app.route('/voluntarios')
        // .get(voluntarios.listAll)
        // .post(voluntarios.creatOne)

    app.route('/voluntarios/:id')
        // .get(voluntarios.showOne)
        // .put(voluntarios.updateUser)
        // .delete(voluntarios.removerUser)

}