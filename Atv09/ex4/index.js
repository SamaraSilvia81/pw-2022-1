const inputName = document.getElementById("name");
const btalert = document.getElementById("btalert");

function gerarAlert(){
    let nome = inputName.value;
    
    if(nome!=" "){
        alert('Olá, ' +nome);
    }
}

btalert.onclick = gerarAlert;


