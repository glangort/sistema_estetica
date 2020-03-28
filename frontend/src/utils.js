export default function listaHorasDia(
  horaInicioManha,
  horaFinalManha,
  horaInicioTarde,
  horaFinalTarde
) {
  const horas = [];
  for (let h = horaInicioManha; h < horaFinalManha; h++) {
    horas.push(h);
  }

  for (let h = horaInicioTarde; h < horaFinalTarde; h++) {
    horas.push(h);
  }

  return horas;
}

export function comparaHorarios(hora, agendamentoHora) {
  if (hora === agendamentoHora) {
    console.log(`${agendamentoHora}OK`);
  } else {
    console.log(`${hora}NãoOK`);
  }
}
