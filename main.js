const pesoInicial = document.getElementById("peso")
const alturaInicial = document.getElementById("altura")
const indice = document.getElementById("indice")

function calcular() {
  let peso = pesoInicial.value
  let altura = alturaInicial.value

  // validar entrada de peso y altura
  if (isNaN(peso) || isNaN(altura)) {
    alert("Por favor, ingrese solo números válidos.")
    return
  }

  // convertir altura con comas a puntos decimales
  altura = altura.replace(",", ".")

  let imc = peso / (altura * altura)
  indice.innerHTML = imc.toFixed(2)

  // establecer color de fondo de acuerdo al valor de IMC
  if (imc < 18.5) {
    indice.style.backgroundColor = "lightblue"
  } else if (imc >= 18.5 && imc <= 24.9) {
    indice.style.backgroundColor = "lightgreen"
  } else if (imc >= 25 && imc <= 29.9) {
    indice.style.backgroundColor = "yellow"
  } else {
    indice.style.backgroundColor = "red"
  }
}

function reiniciar() {
  pesoInicial.value = ""
  alturaInicial.value = ""
  indice.innerHTML = ""
  indice.style.backgroundColor = "white"
}
