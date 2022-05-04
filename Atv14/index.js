Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'gkM3Oaqh3lIaZz4kyTyNIl0OXZMB9J2fUuXMUq9j', // This is your Application ID
  'GglKL6AYrdNaR8TR6zJAwYH0LP7J8hlOkJWp8gcI' // This is your Javascript key
);

const input = document.getElementById("entrada");
const botao = document.getElementById("btEntrada");
const remove = document.getElementById("remove");

let tarefas = [];

function gerarLista() {

  const li = document.createElement("li");
  const para = document.createTextNode(input.value);
  console.log(li.appendChild(para));

  const ul = document.getElementById("ul");
  console.log(ul.appendChild(li));

  const check = document.getElementById("check");
  li.appendChild(check);
    
  const remove = document.getElementById("remove");
  li.appendChild(remove);

}

function limparInput() {
  input.value = " ";
}


const criarLista = async () => {
  console.log('Lista foi efetuada');
  const myNewObject = new Parse.Object('Tarefas');
  myNewObject.set('myCustomKey1Name', input.value);
  try {
    const result = await myNewObject.save();
    // Access the Parse Object attributes using the .GET method
    console.log('object myCustomKey1Name: ', result.get('Descricao'));
    console.log('ParseObject created', result);
    gerarLista();
    limparInput();
  } catch (error) {
    console.error('Error while creating ParseObject: ', error);
  }
};

botao.onclick = criarLista;