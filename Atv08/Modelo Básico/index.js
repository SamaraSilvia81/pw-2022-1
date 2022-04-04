const inputNumber = document.getElementById("number");
const inputColunas = document.getElementById("qtdecolunas");
const inputTabela = document.getElementById("tabela");

function gerarTabela(){

    const num = parseInt(number.value);  // parseInt converte para inteiro. Mas vai ficar tudo zero, porque o random vai de 0 a 1.
    const col = parseInt(inputColunas.value);

    inputNumber.value = "";  // Após digitar um valor e ele ser lido vai ser apagado do input. 
    inputColunas.value = "";

    for(let i = 1; i<=num; i++){

        inputTabela.innerHTML += Math.trunc(Math.random()*20) + "  "; 

        // multiplica-se por um valor inteiro para sair do zero.
        // o valor multiplicado é o meu limite de random. 

        if(i%col==0){
            tabela.innerHTML += "\n";  // É para ordenar os valores que estão na "tabela" do PRE.
        }
    }

    inputNumber.focus(); // Dá foco ao botão indicando para digitar mais valores se quiser.
    inputColunas.focus();
}


function remover(){
    tabela.innerHTML = " ";
}

tb.onclick = gerarTabela;
tbRemove.onclick = remover;

