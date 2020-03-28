/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Cliente extends Model {
  agendamentos() {
    return this.hasMany('App/Models/Agendamento');
  }

  user() {
    return this.hasOne('App/Models/User');
  }

  anaminese() {
    return this.hasOne('App/Models/Anaminese');
  }
}

module.exports = Cliente;
