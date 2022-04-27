Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "bB2rgJBNhSnGS4PqdukhFwmHaqpElByurT3CqCb2", // This is your Application ID
  "YSCvl20VzHyh7Tqqe3Yic78swZPMWoUNIFdEd1Hf" // This is your Javascript key
);

let pessoas = [];
const lista = document.getElementById("lista");

function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < pessoas.length; ++i) {
    //lista.innerHTML += `<li>${i}</li>`;
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Nome: ${pessoas[i].Nome} - Idade: ${pessoas[i].Idade}`
    );
    li.appendChild(txt);
    lista.appendChild(li);
  }
}

const fetchPessoas = async () => {
  const Pessoa = Parse.Object.extend("Pessoa");
  const query = new Parse.Query(Pessoa);
  try {
    const results = await query.find();
    pessoas = [];
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
      pessoas.push({Nome, Idade});
    }
    gerarLista();
  } catch (error) {
    console.log("Error while fetching Pessoa", error);
  }
};

fetchPessoas();