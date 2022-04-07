const inputName = document.getElementById("name");
const inputSobrenome = document.getElementById("sobrenome");
const btalert = document.getElementById("btalert");

function gerarAlert(){
    let nome = inputName.value;
    let sobname = inputSobrenome.value;
    
   if(nome!=" " || sobname!=" "){
        alert('Olá, ' +nome+ " " +sobname)
    }
}

function apagarNome(){
    inputName.value="";
}

function apagarSobrenome(){
    inputSobrenome.value="";
}


inputName.onfocus = apagarNome;
inputSobrenome.onfocus = apagarSobrenome;
btalert.onclick = gerarAlert;
