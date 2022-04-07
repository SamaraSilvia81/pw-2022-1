const inputName = document.getElementById("name");
const inputSobrenome = document.getElementById("sobrenome");
const btalert = document.getElementById("btalert");

function gerarAlert(){

    let nome = inputName.value;
    let sobname = inputSobrenome.value;
    
    inputName.value = "";
    inputSobrenome.value ="";
    
    if(nome!=" " || sobname!=" " ){
        alert('Olá, ' +nome+ " " +sobname);
    }
}

btalert.onclick = gerarAlert;
