/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Anaminese = use('App/Models/Anaminese');

class AnamineseController {
  async store({ request, response }) {
    const data = request.only([
      'cliente_id',
      'diabete_familia',
      'antecedentes_cardiacos',
      'familiar_outros',

      'atividade_fisica',
      'atividade_fisica_qual',

      'procedimento_estetico',
      'procedimento_estetico_qual',

      'cirurgia',
      'cirurgia_qual',

      'metal_no_corpo',
      'metal_no_corpo_tipo',

      'alimentacao',
      'fuma',
      'bebidas',
      'gravida',

      'medicacao',
      'exames_periodicos',
      'exames_periodicos_data',

      'alergia_medicamento',
      'alergia_medicamento_qual',

      'funcionamento_intestino',
      'ciclo_menstrual',
      'anticoncepcional',
      'hipotensao',
      'hipertensao',
    ]);

    const anaminese = await Anaminese.create(data);
    return response.status(201).json(anaminese);
  }

  async index() {
    const anaminese = await Anaminese.query()
      .with('clientes')
      .fetch();

    return anaminese;
  }

  async show({ params }) {
    const anaminese = await Anaminese.find(params.id);
    return anaminese;
  }

  async update({ request, params, response }) {
    const data = request.only([
      'cliente_id',
      'diabete_familia',
      'antecedentes_cardiacos',
      'familiar_outros',

      'atividade_fisica',
      'atividade_fisica_qual',

      'procedimento_estetico',
      'procedimento_estetico_qual',

      'cirurgia',
      'cirurgia_qual',

      'metal_no_corpo',
      'metal_no_corpo_tipo',

      'alimentacao',
      'fuma',
      'bebidas',
      'gravida',

      'medicacao',
      'exames_periodicos',
      'exames_periodicos_data',

      'alergia_medicamento',
      'alergia_medicamento_qual',

      'funcionamento_intestino',
      'ciclo_menstrual',
      'anticoncepcional',
      'hipotensao',
      'hipertensao',
    ]);

    const anaminese = await Anaminese.find(params.id);

    anaminese.merge(data);

    await anaminese.save();

    return response.status(201).json(anaminese);
  }
}

module.exports = AnamineseController;
