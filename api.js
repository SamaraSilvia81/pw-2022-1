Parse.serverURL = "https://parseapi.back4app.com/classes/Pessoa"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "bB2rgJBNhSnGS4PqdukhFwmHaqpElByurT3CqCb2", // This is your Application ID
  "JLMPzZZ2pMsrsyMcIs0Sjj9mnwd0sci5G5dkCMjo" // This is your Javascript key
);

let Pessoa = [];
const lista = document.getElementById("lista");

function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < Pessoa.length; ++i) {
    lista.innerHTML += `<li>${i}</li>`;
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Nome: ${Pessoa[i].nome} - Idade: ${Pessoa[i].idade}`
    );
    li.appendChild(txt);
    lista.appendChild(li);
  }
}

const fetchPessoas = async () => {
  const Biografia = Parse.Object.extend("Biografia");
  const query = new Parse.Query(Biografia);
  try {
    const results = await query.find();
    Pessoa = [];
    for (const object of results) {
      const Nome = object.get('Nome')
      const Idade = object.get('Idade')
      // const Altura = object.get('Altura')
      /* const Cor_Dos_Olhos = object.get('Cor_Dos_Olhos')
      const Cor_Do_Cabelo = object.get('Cor_Do_Cabelo')
      const Genero = object.get('Genero')
      const Peso = object.get('Peso')
      const Poderes = object.get('Poderes') */
      console.log(Nome);
      console.log(Idade);
     // console.log(Altura);
      /* console.log(Cor_Dos_Olhos);
      console.log(Cor_Do_Cabelo);
      console.log(Genero);
      console.log(Peso);
      console.log(Poderes);
      Cor_Dos_Olhos,Cor_Do_Cabelo,Genero,Peso,Poderes*/
      Pessoa.push({Nome, Idade});
    }
    gerarLista();
  } catch (error) {
    console.error("Error while fetching Pessoa", error);
  }
};

fetchPessoas();