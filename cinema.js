//Desafio Cinema

function calculaGostos(notas) {
  var naoGostaram = 0;
  var mediano = 0;
  var gostaram = 0;

  for (var i = 0; i < notas.length; i++) {
    if (notas[i] === 0 || notas[i] === 1) {
      naoGostaram = naoGostaram + 1;
    }
    if (notas[i] == 2 || notas[i] == 3) {
      mediano = mediano + 1;
    }
    if (notas[i] == 4 || notas[i] == 5) {
      gostaram = gostaram + 1;
    }
  }
  return[naoGostaram, mediano, gostaram];
}
