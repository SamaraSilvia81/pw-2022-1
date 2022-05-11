Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'cO4o1oYACKuBmJ49VbKZ9vSPNYUIonxgiH7fDXbG', // This is your Application ID
  'NpyvD9ZyZ1Eyjfl9jjWFnwmxG4nE3qDh4kri4dBG' // This is your Javascript key
);

const input = document.getElementById("entrada");
const botao = document.getElementById("btEntrada");
const div = document.getElementById("div");

let tarefas = [];

function gerarLista() {

  div.innerHTML = "";
  input.value = "";

  for(let i = 0; i<tarefas.length; i++){

    const li = document.createElement("li");
    li.value = "class", "li";
    
    const txt = document.createTextNode(
      `${tarefas[i].get("Descricao")}`
    );
  
    const check = document.createElement("input");
    check.type = "checkbox";
    check.value = "class", "check";
    check.checked = tarefas[i].get("Concluido");

    check.onclick = (evt) => atualizarTarefa(evt, tarefas[i]);

    const remove = document.createElement("button");
    remove.value = "class", "remove";
    remove.innerHTML = 'Remover';
    
    remove.onclick = (evt) => removerTarefa(evt, tarefas[i]);

    div.appendChild(li);
    li.appendChild(txt);
    li.appendChild(check);
    li.appendChild(remove);
    
  }
}

const exibirTarefa = async () => {
  const Tarefa = Parse.Object.extend('Tarefa');
  const query = new Parse.Query(Tarefa);
  try {
    const results = await query.find();
    tarefas = results;
    gerarLista();
  } catch (error) {
    console.error('Error while fetching Tarefa', error);
  }
};


const criarTarefa = async () => {
  const myNewObject = new Parse.Object('Tarefa');
  myNewObject.set('Descricao', input.value);
  myNewObject.set('Concluido', false);
  try {
    const result = await myNewObject.save();
    console.log('Tarefa created', result);
    exibirTarefa();
  } catch (error) {
    console.error('Error while creating Tarefa: ', error);
  }
};

const atualizarTarefa = async (evt,tarefa) => {
  tarefa.set('Concluido',evt.target.checked);
    try {
      const response = await tarefa.save();
      console.log(response.get('Concluido'));
      console.log('Tarefa updated', response);
    } catch (error) {
      console.error('Error while updating Tarefa', error);
      }
};

const removerTarefa = async (evt, tarefa) => {
  tarefa.set('Concluido', evt.target.remove);
    try {
      const response = await tarefa.destroy();
      console.log(response.get('Concluido'));
      console.log('Deleted ParseObject', response);
      exibirTarefa();
    } catch (error) {
      console.error('Error while deleting ParseObject', error);
    }
};

botao.onclick = criarTarefa;
exibirTarefa();
gerarLista();
atualizarTarefa();
removerTarefa();
//document.getElementById('entrada').addEventListener('keypress', criarTarefa);
console.log(atualizarTarefa());
console.log(removerTarefa());
