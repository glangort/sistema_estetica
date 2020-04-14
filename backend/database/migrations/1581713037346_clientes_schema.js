'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ClientesSchema extends Schema {
  up() {
    this.create('clientes', table => {
      table.increments();
      table.string('nome').notNullable();
      table.string('endereco').notNullable();
      table.string('dataNascimento');
      table.string('idade');
      table.string('numero');
      table.string('telefone1').notNullable();
      table.string('telefone2');
      table
        .integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users');
      table.timestamps();
    });
  }

  down() {
    this.drop('clientes');
  }
}

module.exports = ClientesSchema;
