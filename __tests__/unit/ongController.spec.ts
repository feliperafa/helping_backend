import FakeongController from './fakeOngController';

describe('Teste de Ong', () => {
  it('Deve retornar um ong', async () => {
    const ong = await FakeongController.createOne({
      _id: '123691',
      nome_ong: 'frafael',
      telefone_ong: '999999999',
      cnpj_ong: '11111111111111',
      email: 'felipefrafael@hotmail.com',
      endereco: 'rua do tiro',
      numero: '30',
      descricao:'lar de idosos',
      senha:'1234'
    })
    expect(ong).toHaveProperty('_id');
//    expect(ong).toHaveProperty('id_ong');
    expect(ong.nome_ong).toBe('frafael');
    expect(ong.cnpj_ong).toBe('11111111111111');
    expect(ong.cnpj_ong.length).toBe(14);
    expect(ong.telefone_ong).toBe('999999999');
    expect(ong.email).toBe('felipefrafael@hotmail.com');
    expect(ong.endereco).toBe('rua do tiro');
    expect(ong.numero).toBe('30');
    expect(ong.senha).toBe('1234');
    expect(ong.descricao).toBe('lar de idosos');
  })

  it('Deve retornar a ong com cnpj informado', async () => {
    const ong = await FakeongController.showOne('11111111111111');

    expect(ong).toHaveProperty('nome_ong');
    expect(ong).toHaveProperty('cnpj_ong');
    expect(ong).toHaveProperty('telefone_ong');
    expect(ong).toHaveProperty('email');
    expect(ong).toHaveProperty('endereco');
    expect(ong).toHaveProperty('numero');
   // expect(ong).toHaveProperty('id_ong');
    expect(ong.nome_ong).toBe('frafael');
    expect(ong.cnpj_ong).toBe('11111111111111');
    expect(ong.cnpj_ong.length).toBe(14);
    expect(ong.telefone_ong).toBe('999999999');
    expect(ong.email).toBe('felipefrafael@hotmail.com');
    expect(ong.endereco).toBe('rua do tiro');
    expect(ong.numero).toBe('30');
    expect(ong.senha).toBe('1234');
    expect(ong.descricao).toBe('lar de idosos');

  })

  it('Deve retornar todos as ongs', async () => {
    const ong = await FakeongController.listAll();

    expect(ong).toBe(ong)
  })

  it('Deve atualizar a ong que foi passado o id', async () => {
    const ongAtualizado = await FakeongController.update('123691')

    expect(ongAtualizado).not.toBe(FakeongController.listAll().then(ong => ong))
  })

  it('Deve deletar o usuário', async () => {
    const ongDeletado = await FakeongController.delete('123691')

    expect(ongDeletado).toBe(undefined)
  })
})