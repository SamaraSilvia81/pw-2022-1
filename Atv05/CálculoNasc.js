const inputIdade = document.getElementById("inputIdade");
const inputAnoNasc = document.getElementById("inputAnoNasc");
const btCalculo = document.getElementById("btCalculo");

function calculo() {
    const idade = parseInt(inputIdade.value.trim());
    const anoNasc = 2022 - idade;
    inputAnoNasc.value = anoNasc;
}

btCalculo.onclick = calculo;