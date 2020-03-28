'use strict';

class Cliente {
  get rules() {
    return {
      nome: 'required',
      endereco: 'required',
      telefone1: 'required',
    };
  }
}

module.exports = Cliente;
