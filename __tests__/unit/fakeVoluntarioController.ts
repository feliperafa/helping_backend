import { uuid } from 'uuidv4';
import { FakeVoluntarioModel } from '../fakeModels/FakeVoluntarioModel';


class FakeVoluntarioController {
  private voluntarios: FakeVoluntarioModel[] = [];

  public async createOne({
    _id,
    nome_voluntario,
    telefone_voluntario,
    cpf_voluntario,
    email,
    endereco,
    numero
  }) {
    const voluntario = new FakeVoluntarioModel();
    voluntario._id = _id;
    voluntario.nome_voluntario = nome_voluntario;
    voluntario.telefone_voluntario = telefone_voluntario;
    voluntario.cpf_voluntario = cpf_voluntario;
    voluntario.email = email;
    voluntario.endereco = endereco;
    voluntario.numero = numero;
    voluntario.id_ong = uuid();

    this.voluntarios.push(voluntario);

    return voluntario;
  }

  public async listAll() {
    const listVoluntario = this.voluntarios.find(voluntario => voluntario)

    return listVoluntario;
  }

  public async showOne(cpf: string) {
    const findVoluntario = this.voluntarios.find(voluntario => voluntario.cpf_voluntario === cpf);

    return findVoluntario;

  }

  public async update(_id: string) {
    const voluntario = this.voluntarios.find(voluntario => voluntario._id === _id);

    voluntario._id = '96321';
    voluntario.cpf_voluntario = '88888888888';
    voluntario.email = 'jonas@hotmail.com';
    voluntario.nome_voluntario = 'jonas';
    voluntario.endereco = 'rua 2';
    voluntario.numero = '30';
    voluntario.telefone_voluntario = '2345678';

    return voluntario
  }

  public async delete(_id: string) {
    this.voluntarios.find(voluntario => voluntario._id = _id)

    delete this.voluntarios;
    return this.voluntarios
  }
}

export default new FakeVoluntarioController();