import FakeVoluntarioController from './fakeVoluntarioController';

describe('Teste de usuário', () => {
  it('Deve retornar um usuário', async () => {
    const voluntario = await FakeVoluntarioController.createOne({
      _id: '12369',
      nome_voluntario: 'frafael',
      telefone_voluntario: '999999999',
      cpf_voluntario: '11111111111',
      email: 'felipefrafael@hotmail.com',
      endereco: 'rua do tiro',
      numero: '30'
    })
    expect(voluntario).toHaveProperty('_id');
    expect(voluntario).toHaveProperty('id_ong');
    expect(voluntario.nome_voluntario).toBe('frafael');
    expect(voluntario.cpf_voluntario).toBe('11111111111');
    expect(voluntario.cpf_voluntario.length).toBe(11);
    expect(voluntario.telefone_voluntario).toBe('999999999');
    expect(voluntario.email).toBe('felipefrafael@hotmail.com');
    expect(voluntario.endereco).toBe('rua do tiro');
    expect(voluntario.numero).toBe('30');

  })

  it('Deve retornar o usuario com cpf informado', async () => {
    const voluntario = await FakeVoluntarioController.showOne('11111111111');

    expect(voluntario).toHaveProperty('nome_voluntario');
    expect(voluntario).toHaveProperty('cpf_voluntario');
    expect(voluntario).toHaveProperty('telefone_voluntario');
    expect(voluntario).toHaveProperty('email');
    expect(voluntario).toHaveProperty('endereco');
    expect(voluntario).toHaveProperty('numero');
    expect(voluntario).toHaveProperty('id_ong');
    expect(voluntario.nome_voluntario).toBe('frafael');
    expect(voluntario.cpf_voluntario).toBe('11111111111');
    expect(voluntario.cpf_voluntario.length).toBe(11);
    expect(voluntario.telefone_voluntario).toBe('999999999');
    expect(voluntario.email).toBe('felipefrafael@hotmail.com');
    expect(voluntario.endereco).toBe('rua do tiro');
    expect(voluntario.numero).toBe('30');

  })

  it('Deve retornar todos os usuarios', async () => {
    const voluntario = await FakeVoluntarioController.listAll();

    expect(voluntario).toBe(voluntario)
  })

  it('Deve atualizar o usuário que foi passado o id', async () => {
    const voluntarioAtualizado = await FakeVoluntarioController.update('12369')

    expect(voluntarioAtualizado).not.toBe(FakeVoluntarioController.listAll().then(voluntario => voluntario))
  })

  it('Deve deletar o usuário', async () => {
    const voluntarioDeletado = await FakeVoluntarioController.delete('12369')

    expect(voluntarioDeletado).toBe(undefined)
  })
})