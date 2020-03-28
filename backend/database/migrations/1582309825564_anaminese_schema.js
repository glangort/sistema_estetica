'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AnamineseSchema extends Schema {
  up() {
    this.create('anaminese', table => {
      table.increments();
      table
        .integer('cliente_id')
        .notNullable()
        .references('id')
        .inTable('clientes');

      table.string('diabete_familia').notNullable();
      table.string('antecedentes_cardiacos').notNullable();
      table.string('familiar_outros');

      table.string('atividade_fisica').notNullable();
      table.string('atividade_fisica_qual');

      table.string('procedimento_estetico').notNullable();
      table.string('procedimento_estetico_qual');

      table.string('cirurgia').notNullable();
      table.string('cirurgia_qual');

      table.string('metal_no_corpo').notNullable();
      table.string('metal_no_corpo_tipo');

      table.string('alimentacao').notNullable();
      table.string('fuma').notNullable();
      table.string('bebidas').notNullable();
      table.string('gravida').notNullable();

      table.string('medicacao').notNullable();
      table.string('exames_periodicos').notNullable();
      table.date('exames_periodicos_data');

      table.string('alergia_medicamento').notNullable();
      table.string('alergia_medicamento_qual').notNullable();

      table.string('funcionamento_intestino').notNullable();
      table.string('ciclo_menstrual').notNullable();
      table.string('anticoncepcional').notNullable();
      table.string('hipotensao').notNullable();
      table.string('hipertensao').notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop('anaminese');
  }
}

module.exports = AnamineseSchema;
