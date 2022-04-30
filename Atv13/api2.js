Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "PTfS9TEZXtmGssyZ0ImtPKtaXn9ArPXQvkrASqfg", // This is your Application ID
  "0462wRsuzQ4tz7FtX8Jtaaphvn52AU3oiLQqEGdz" // This is your Javascript key
);

let biografia = [];

const lista = document.getElementById("lista");
const btNovaApi = document.getElementById("btApi3");

// Funções feitas

function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < biografia.length; ++i) {
    const pre = document.createElement("pre");
    const txt = document.createTextNode(
        `Nome: ${biografia[i].Nome} - Idade: ${biografia[i].Idade} - Altura: ${biografia[i].Altura} - Peso: ${biografia[i].Peso} - Genero: ${biografia[i].Genero} - Cor_Dos_Olhos: ${biografia[i].Cor_Dos_Olhos} - Cor_Do_Cabelo: ${biografia[i].Cor_Do_Cabelo}`
    );
    pre.appendChild(txt);
    lista.appendChild(pre);
  }
}

const fetchNovaBiografia = async () => {
  const Biografia = Parse.Object.extend("Biografia");
  const query = new Parse.Query(Biografia);
  try {
    const results = await query.find();
    biografia = [];
    for (const object of results) {
      const Nome = object.get('Nome')
      const Idade = object.get('Idade')
      const Altura = object.get('Altura')
      const Cor_Dos_Olhos = object.get('Cor_Dos_Olhos')
      const Cor_Do_Cabelo = object.get('Cor_Do_Cabelo')
      const Genero = object.get('Genero')
      const Peso = object.get('Peso')
      console.log(Nome);
      console.log(Idade);
      console.log(Altura);
      console.log(Cor_Dos_Olhos);
      console.log(Cor_Do_Cabelo);
      console.log(Genero);
      console.log(Peso);
      biografia.push({Nome,Idade,Altura,Cor_Do_Cabelo,Cor_Dos_Olhos,Genero,Peso});
    }
    gerarLista();
  } catch (error) {
    console.log("Error while fetching Pessoa", error);
  }
};

function remover(){
  lista.innerHTML = " ";
}

btNovaApi.onclick = fetchNovaBiografia;
btLimpa.onclick = remover;