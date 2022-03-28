const number = document.getElementById("inputNumber");
const btInicial = document.getElementById("numInicio");
const btFinal = document.getElementById("numFinal");
const btZerar = document.getElementById("zerar");
const inputRemover = document.getElementById("inputRemover");
const btRemover = document.getElementById("btRemover")
const lista = document.getElementById("lista");

let array = [];

function numFinal(){
   if(!isNaN(number.value)){
      if(number.value == ""){
         alert("Não deixe em branco. Digite número!");
      }
      else{
         valor = number.value;
         array.push(valor);
         number.value = "";
         number.focus();
         for(let cont = 0; cont <= 1; cont++){
            lista.innerHTML = "";
            for(let cont = 0; cont < array.length; cont++){
               lista.innerHTML += '<li>' + array[cont] + '</li>';
            }
         }
      }
   }
   else{
      alert("Digite um valor valido!");
      number.value = "";
      number.focus();
   }

   }


function numInicio(){
   if(!isNaN(number.value)){
      if(number.value == ""){
         alert("Digite um valor valido!")
      }
      else{
         valor = number.value;
         array.unshift(valor);
         number.value = "";
         number.focus();
            for(let cont = 0; cont <= 1; cont++){
            lista.innerHTML = "";
            for(let cont = 0; cont < array.length; cont++){
               lista.innerHTML += '<li>' + array[cont] + '</li>';
            }
         }
      }
   }
   else{
      alert("Digite um valor valido!");
      number.value = "";
      number.focus();
   }
}

function zerar(){
   for(let cont = array.length + 1; cont > 0; cont --){
      array.pop();
   }
   number.value = "";
   number.focus();
   lista.innerHTML = array;
}

function remover(){
   let indice = inputRemover.value - 1; 
   array.splice(indice ,1);  
   inputRemover.value = "";
   inputRemover.focus();
   for(let cont = 0; cont <= 1; cont++){
      lista.innerHTML = "";
      for(let cont = 0; cont < array.length; cont++){
         lista.innerHTML += '<li>' + array[cont] + '</li>';
      }
   }

}

btInicial.onclick = numFinal;
btFinal.onclick = numInicio;
btZerar.onclick = zerar;
btRemover.onclick = remover;