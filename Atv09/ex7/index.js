const n1 = document.getElementById("valorA");
const n2 = document.getElementById("valorB");
const btCalculadora = document.getElementById("calculadora");
const btRemove = document.getElementById("calcuRemove")
const resultado = document.getElementById("Resultado");

function geraResultado(){

   const A = parseInt(n1.value);
   const B = parseInt(n2.value);

   n1.value = "";
   n2.value = "";

   let sum = A + B;
   let sub = A - B;
   let multi = A * B;
   let div = A / B;
   let pot = A ** B;

   if(isNaN(A) || isNaN(B)){
      alert("Atenção aos campos preenchidos. Digite valores válidos!")
   } else{
      n1.innerHTML = "";
      n2.innerHTML = "";

      resultado.innerHTML += (`Soma: ${sum} \n`); 
      resultado.innerHTML += (`Substração: ${sub} \n`);
      resultado.innerHTML += (`Multiplicação: ${multi} \n`);
      resultado.innerHTML += (`Divisão: ${div} \n`);
      resultado.innerHTML += (`Potenciação: ${pot} \n`);
   }
}

function remove(){
   resultado.innerHTML = " ";
}

calculadora.onclick = geraResultado;
calcuRemove.onclick = remove;