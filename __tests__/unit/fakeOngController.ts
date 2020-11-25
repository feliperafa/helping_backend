import { uuid } from 'uuidv4';
import { FakeOngModel } from '../fakeModels/FakeOngModels';


class FakeongController {
  private ong: FakeOngModel[] = [];

  public async createOne({
    _id,
    nome_ong,
    telefone_ong,
    cnpj_ong,
    email,
    descricao,
    senha,
    endereco,
    numero,

  }) {
    const ong = new FakeOngModel();
    ong._id = _id;
    ong.nome_ong = nome_ong;
    ong.telefone_ong = telefone_ong;
    ong.cnpj_ong = cnpj_ong;
    ong.email = email;
    ong.endereco = endereco;
    ong.numero = numero;
    ong.descricao = descricao;
    ong.senha = senha;

    this.ong.push(ong);

    return ong;
  }

  public async listAll() {
    const listong = this.ong.find(ong => ong)

    return listong;
  }

  public async showOne(cpf: string) {
    const findong = this.ong.find(ong => ong.cnpj_ong === cpf);

    return findong;

  }

  public async update(_id: string) {
    const ong = this.ong.find(ong => ong._id === _id);

    ong._id = '96321';
    ong.cnpj_ong = '88888888888';
    ong.email = 'jonas@hotmail.com';
    ong.nome_ong = 'jonas';
    ong.endereco = 'rua 2';
    ong.numero = '30';
    ong.telefone_ong = '2345678';
    ong.descricao = 'lar de idosos';
    ong.senha = '1234';

    return ong
  }

  public async delete(_id: string) {
    this.ong.find(ong => ong._id = _id)

    delete this.ong;
    return this.ong
  }
}

export default new FakeongController();