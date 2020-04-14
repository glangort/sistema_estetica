'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Cliente = use('App/Models/Cliente');
const Agendamento = use('App/Models/Agendamento');

class ClienteController {
  // async index() {
  //   const clientes = await Cliente.query()
  //     .with('agendamentos', builder => {
  //       builder.select('cliente_id', 'data');
  //       builder.orderBy('data', 'desc');
  //     })
  //     .fetch();

  //   return clientes;
  // }

  async index() {
    const clientes = await Cliente.select(
      knex.raw(
        '(select data from agendamentos' +
          'where agendamentos.cliente_id = clientes.id' +
          'order by agendamentos.data desc' +
          'limit 1) as Ultima'
      )
    ).from('clientes');
    return clientes;
  }

  async store({ request, response }) {
    const data = request.only([
      'user_id',
      'nome',
      'endereco',
      'idade',
      'numero',
      'telefone1',
      'telefone2',
    ]);

    const cliente = await Cliente.create(data);
    return response.status(201).json(cliente);
  }

  async show({ params }) {
    const cliente = await Cliente.find(params.id);

    return cliente;
  }

  async update({ request, response, params }) {
    const data = request.only([
      'user_id',
      'nome',
      'endereco',
      'idade',
      'numero',
      'telefone1',
      'telefone2',
    ]);

    const cliente = await Cliente.find(params.id);

    cliente.merge(data);

    await cliente.save();

    return response.status(201).json(cliente);
  }
}

module.exports = ClienteController;
