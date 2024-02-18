/* considerar 400g de carne por pessoa - +6h considerar 500g
considerar 1,2l de cerveja por adulto - +6h considerar 2l
considerar 1l de refrigerante por pessoa - +6h considerar 1,5
crianças considerar metade das proporções excluindo cerveja*/

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular() {
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let carneTotal =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas
  let cervejaTotal = cervejaPP(duracao) * adultos
  let refriTotal =
    refriPP(duracao) * adultos + (refriPP(duracao) / 2) * criancas

  resultado.innerHTML = `<p>${carneTotal / 1000} Kg de carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(
    cervejaTotal / 355
  )} Latas de cerveja </p>`
  resultado.innerHTML += `<p>${Math.ceil(refriTotal) / 2000} Lt(s) de Refrigerante(s)`
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 500
  } else {
    return 400
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 1800
  } else {
    return 1200
  }
}

function refriPP(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}
