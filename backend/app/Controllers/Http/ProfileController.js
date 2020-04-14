'use strict';

const Agendamento = use('App/Models/Agendamento');

class ProfileController {
  async buscaData({ params }) {
    const agendamento = await Agendamento.query()
      .where('data', '=', params.data)
      .with('clientes')
      .fetch();

    return agendamento;
  }

  async buscaHora({ params }) {
    const agendamento = await Agendamento.query()
      .select('hora_inicio')
      .where('data', '=', params.data)
      .fetch();

    return agendamento;
  }

  async buscaUltiAtendimento({ params }) {
    const agendamento = await Agendamento.query()
      .select('data')
      .where('cliente_id', '=', params.id)
      .last();

    return agendamento;
  }
}

module.exports = ProfileController;
