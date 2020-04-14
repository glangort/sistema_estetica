'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AgendamentoSchema extends Schema {
  up() {
    this.create('agendamentos', table => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users');
      table
        .integer('cliente_id')
        .notNullable()
        .references('id')
        .inTable('clientes');
      table.date('data');
      table.time('hora_inicio');
      table.time('hora_fim');
      table.string('estado');

      table.timestamps();
    });
  }

  down() {
    this.drop('agendamentos');
  }
}

module.exports = AgendamentoSchema;
