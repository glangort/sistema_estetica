'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Cliente = use('App/Models/Cliente');

class ClienteController {
  async index() {
    const clientes = await Cliente.query().fetch();

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
