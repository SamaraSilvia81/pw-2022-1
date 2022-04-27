Parse.serverURL = 'https://parseapi.back4app.com/classes/Biografia'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'PTfS9TEZXtmGssyZ0ImtPKtaXn9ArPXQvkrASqfg', // This is your Application ID
  '0462wRsuzQ4tz7FtX8Jtaaphvn52AU3oiLQqEGdz' // This is your Javascript key
);

const btConsulta = document.getElementById("btConsulta");
const btCriar = document.getElementById("btCriar");
const tabelaB = document.getElementById("tabela_corpo");
const lista = document.getElementById("lista");

function gerarLista() {
    lista.innerHTML = "";
    for (let i = 0; i < pessoas.length; ++i) {
      // lista.innerHTML += `<li>${i}</li>`;
      const li = document.createElement("li");
      const txt = document.createTextNode(
        `Nome: ${pessoas[i].nome} - Idade: ${pessoas[i].idade}`
      );
      li.appendChild(txt);
      lista.appendChild(li);
    }
  }
  
  const fetchConsulta = () => {
    const Biografia = Parse.Object.extend("Biografia");
    const query = new Parse.Query(Biografia);
    query
      .find()
      .then((results) => {
        Biografia = [];
        for (const object of results) {
            const Nome = object.get('Nome')
            const Idade = object.get('Idade')
            const Altura = object.get('Altura')
            const Cor_Dos_Olhos = object.get('Cor_Dos_Olhos')
            const Cor_Do_Cabelo = object.get('Cor_Do_Cabelo')
            const Genero = object.get('Genero')
            const Peso = object.get('Peso')
            const Poderes = object.get('Poderes')
            console.log(Nome);
            console.log(Idade);
            console.log(Altura);
            console.log(Cor_Dos_Olhos);
            console.log(Cor_Do_Cabelo);
            console.log(Genero);
            console.log(Peso);
            console.log(Poderes);
        }
        gerarLista();
      })
      .catch((error) => {
        console.error("Error while fetching Biografia", error);
      });
  };

btConsulta.onclick = fetchConsulta;
//btCriar.onclick = fetchCriar;