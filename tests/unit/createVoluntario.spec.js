// const listAll = require('../../src/controllers/voluntarioControllers');
import listAll from '../../src/controllers/voluntarioControllers';
describe('CreateVoluntario', () => {
    it('deve retornar uma lista de voluntarios', () => {
        // console.log(listAll.listAll());
        expect(listAll()).toBe(200)

    });

    // it('deve retornar um status 201 na criação de usuario', () => {
    //   expect(1 + 2).toBe(3)
    // })
});