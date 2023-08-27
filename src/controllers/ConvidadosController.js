const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class ConvidadosController {
  async index(req, res) {
    const convidados = await knex("convidados");

    return res.json({convidados});
  }

  async create(req, res) {
    const { name, qtdPessoas, cidade} = req.body;

    const convidado = await knex("convidados").insert({
      name,
      qtdPessoas,
      cidade
    });

    res.json(convidado);
  }

  async delete(req, res) {
    const { id } = req.params;

    await knex("convidados").where({ id }).delete();

    return res.json(`${id} removido com suceso`);
  }
}

module.exports = ConvidadosController;
