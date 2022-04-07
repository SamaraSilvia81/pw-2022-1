let nome = prompt("Digite seu nome: ");

while(nome==""){
    nome = prompt("Digite seu nome. Por favor!!");
} if(nome){
    alert(`Olá,${nome}!`);
}