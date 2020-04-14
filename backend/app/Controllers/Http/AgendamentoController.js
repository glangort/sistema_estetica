/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Agendamento = use('App/Models/Agendamento');

class AgendamentoController {
  async index() {
    const agendamento = await Agendamento.query()
      .with('clientes', builder => {
        builder.select(['id', 'data']);
      })
      .fetch();

    return agendamento;
  }

  async show({ params }) {
    const agendamento = await Agendamento.find(params.id);

    return agendamento;
  }

  async store({ request, response }) {
    const data = request.only([
      'user_id',
      'cliente_id',
      'data',
      'hora_inicio',
      'hora_fim',
    ]);

    const agendamento = await Agendamento.create(data);
    return response.status(201).json(agendamento);
  }

  async update({ request, response, params }) {
    const data = request.only([
      'user_id',
      'cliente_id',
      'data',
      'hora_inicio',
      'hora_fim',
    ]);

    const agendamento = await Agendamento.find(params.id);

    agendamento.merge(data);

    await agendamento.save();

    return response.status(201).json(agendamento);
  }
}

module.exports = AgendamentoController;
