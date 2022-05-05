Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'cO4o1oYACKuBmJ49VbKZ9vSPNYUIonxgiH7fDXbG', // This is your Application ID
  'yjOXhmvznpgzSJiwEmPm7tULx2lFRGdsfXvBf0va' // This is your Javascript key
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
    }
    gerarLista();
  } catch (error) {
    console.error('Error while fetching Tarefa', error);
  }
};

botao.onclick = exibirTarefa;

