const n1 = document.getElementById("valorA");
const n2 = document.getElementById("valorB");

let resultado = document.querySelector('span');
let resultado2 = document.querySelector('span');
let resultado3 = document.querySelector('span');
let resultado4 = document.querySelector('span');
let resultado5 = document.querySelector('span');


function soma(){
   resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value); 
   resultado2.innerHTML = parseInt(n1.value) - parseInt(n2.value);
   resultado3.innerHTML = parseInt(n1.value) * parseInt(n2.value);
   resultado4.innerHTML = parseInt(n1.value) / parseInt(n2.value);
   resultado5.innerHTML = parseInt(n1.value) ** parseInt(n2.value);   
}

calculadora.onclick = soma;