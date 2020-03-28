'use strict';

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/User', (faker, i, data = {}) => {
  return {
    id: faker.integer({ min: 100, max: 999 }),
    name: faker.name(),
    email: faker.email(),
    username: faker.username(),
    password: faker.string(),
    ...data,
  };
});

Factory.blueprint('App/Models/Cliente', (faker, i, data = {}) => {
  return {
    user_id: faker.integer({ min: 100, max: 999 }),
    nome: faker.first(),
    numero: faker.integer({ min: 100, max: 999 }),
    endereco: faker.address({ short_suffix: true }),
    telefone1: faker.phone({ formatted: false }),
    telefone2: faker.phone({ formatted: false }),
    ...data,
  };
});

Factory.blueprint('App/Models/Token', (faker, i, data = {}) => {
  return {
    type: data.type || 'refreshtoken',
    token: faker.string({ lenght: 20 }),
    ...data,
  };
});

Factory.blueprint('App/Models/Agendamento', (faker, i, data = {}) => {
  return {
    cliente_id: faker.integer({ min: 100, max: 999 }),
    data: faker.date({ string: true }),
    hora_inicio: faker.hour({ twentyfour: true }),
    hora_fim: faker.hour({ twentyfour: true }),
    ...data,
  };
});

Factory.blueprint('App/Models/Anaminese', (faker, i, data = {}) => {
  return {
    cliente_id: faker.integer({ min: 100, max: 999 }),
    diabete_familia: faker.string(),
    antecedentes_cardiacos: faker.string(),
    familiar_outros: faker.string(),

    atividade_fisica: faker.string(),
    atividade_fisica_qual: faker.string(),

    procedimento_estetico: faker.string(),
    procedimento_estetico_qual: faker.string(),

    cirurgia: faker.string(),
    cirurgia_qual: faker.string(),

    metal_no_corpo: faker.string(),
    metal_no_corpo_tipo: faker.string(),

    alimentacao: faker.string(),
    fuma: faker.string(),
    bebidas: faker.string(),
    gravida: faker.string(),

    medicacao: faker.string(),
    exames_periodicos: faker.string(),
    exames_periodicos_data: faker.date({ string: true }),

    alergia_medicamento: faker.string(),
    alergia_medicamento_qual: faker.string(),

    funcionamento_intestino: faker.string(),
    ciclo_menstrual: faker.string(),
    anticoncepcional: faker.string(),
    hipotensao: faker.string(),
    hipertensao: faker.string(),
    ...data,
  };
});
