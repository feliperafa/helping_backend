const mongoose = require('mongoose')
const Voluntario = mongoose.model('Voluntarios')

class VoluntarioRepository {
  private voluntarios: typeof Voluntario;

  public async createOne({
    nome_voluntario,
    telefone_voluntario,
    cpf_voluntario,
    email,
    endereco,
    numero,
    id_ong
  }): Promise<typeof Voluntario> {
    const voluntario = new Voluntario();

    voluntario.nome_voluntario = nome_voluntario
    voluntario.telefone_voluntario = telefone_voluntario
    voluntario.cpf_voluntario = cpf_voluntario
    voluntario.email = email
    voluntario.endereco = endereco
    voluntario.numero = numero
    voluntario.id_ong = id_ong

    this.voluntarios.push(voluntario);

    return voluntario;
  }

  public async findAll(): Promise<typeof Voluntario> {
    const findAll = this.voluntarios.find(todosVoluntarios => todosVoluntarios);

    return findAll;
  }
}

export default VoluntarioRepository;