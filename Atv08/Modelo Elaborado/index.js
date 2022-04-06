const inputNumber = document.getElementById("number");
const inputColunas = document.getElementById("qtdecolunas");
const inputTabela = document.getElementById("tabela");
const inputMin = document.getElementById("min");
const inputMax = document.getElementById("max");

function gerarTabela(){

    const num = parseInt(number.value);  // parseInt converte para inteiro. Mas vai ficar tudo zero, porque o random vai de 0 a 1.
    const col = parseInt(inputColunas.value);
    const min = parseInt(inputMin.value);
    const max = parseInt(inputMax.value);

    inputNumber.value = "";  // Após digitar um valor e ele ser lido vai ser apagado do input.  
    inputMax.value = "";
    inputMin.value = "";
    inputColunas.value = "";

    //inputNumber.focus(); // Dá foco ao botão indicando para digitar mais valores se quiser.
    //inputColunas.focus();
    //inputMax.focus();
    //inputMin.focus();

    if(isNaN(num) || isNaN(col) || isNaN(min) || isNaN(max)){  // verifica que foi adicionado um valor numérico.
       alert("Verifique os campos preenchidos. Apenas valores válidos!!")
    } else {
        tabela.innerHTML = "";
        for(let i = 1; i<=num; i++){
            inputTabela.innerHTML += Math.trunc(Math.random() * (max - min + 1) + min) + "    ";  // multiplica-se por um valor inteiro para sair do zero.
            
            if(i%col==0){
                tabela.innerHTML += "\n";   // É para ordenar os valores que estão na "tabela" do PRE.
            }
        }
    }
}

function remover(){
    tabela.innerHTML = " ";
}

tb.onclick = gerarTabela;
tbRemove.onclick = remover;
