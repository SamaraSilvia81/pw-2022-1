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

  div.innerHTML = " ";

  for(let i = 0; i<tarefas.length; i++){

    const li = document.createElement("li");

    const txt = document.createTextNode(
      `${tarefas[i].Descricao}`
    );
  
    const check = document.createElement("input");
    check.type = "checkbox";
    check.setAttribute("id", "check"); 

    const remove = document.createElement("button");
    remove.innerHTML = 'Remover';
    remove.setAttribute("id", "btRemove"); 

    li.appendChild(txt);
    div.appendChild(li);
    li.appendChild(check);
    li.appendChild(remove);
    
  }
}

const exibirTarefa = async () => {

  const Tarefa = Parse.Object.extend('Tarefa');
  const query = new Parse.Query(Tarefa);
  tarefas = [];
  try {
    const results = await query.find();
    for (const object of results) {
      const Descricao = object.get('Descricao')
      const Concluido = object.get('Concluido')
      console.log(Descricao);
      console.log(Concluido);
      tarefas.push({Descricao, Concluido});
      gerarLista();
    }
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
    exibirLista();
  } catch (error) {
    console.error('Error while creating Tarefa: ', error);
  }
};

const atualizarTarefa = async () => {
  const query = new Parse.Query('Tarefa');
  tarefas = [];
  try {
    // here you put the objectId that you want to update
    const object = await query.get('Descricao');
    object.set('Concluido', true);
    try {
      const response = await object.save();
      console.log(response.get('Concluido'));
      console.log('Tarefa updated', response);
    } catch (error) {
      console.error('Error while updating Tarefa', error);
      }
    } catch (error) {
      console.error('Error while retrieving object Tarefa', error);
    }
};

botao.onclick = criarTarefa;
exibirTarefa();
gerarLista();

if(check.checked = true){
  atualizarTarefa();
  console.log(atualizarTarefa());
}
