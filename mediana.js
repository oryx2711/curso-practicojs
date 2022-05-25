function calcularMedia(medianaValue) {
  const sumaLista = medianaValue.reduce(function (
    valorAcumulado,
    nuevoElemento
  ) {
    return valorAcumulado + nuevoElemento;
  },0);

  const promedioLista = sumaLista / medianaValue.length;

  return promedioLista;
}

function esPAr(numero) {
  return numero % 2 === 0;
}

function medianaBar() {
  const inputMediana = document.getElementById("inputMediana");
  const medianaValue = inputMediana.value;

  let arrayMediana = Array.from(medianaValue.split(","), Number);
  arrayMediana.sort(function (a, b) {
    return a - b;
  });

  const mitadLista = parseInt(arrayMediana.length / 2);
  
  if (esPAr(arrayMediana.length)) {
    const elemento1 = arrayMediana[mitadLista - 1];
    const elemento2 = arrayMediana[mitadLista];
    const promedioElemento1y2 = calcularMedia([elemento1, elemento2]);
    mediana = promedioElemento1y2;
  } else {
    mediana = medianaValue[mitadLista];
  }

  const resultadoMediana = document.getElementById("resultadoMediana");
  resultadoMediana.innerText =
    "la mediana de precios de bebidas del DURGA es $" + mediana;
}
