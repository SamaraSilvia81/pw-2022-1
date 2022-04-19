let pessoas = [
    { nome: "Ana", idade: 18 },
    { nome: "Maria", idade: 20 },
    { nome: "José", idade: 17 },
    { nome: "Marcos", idade: 22 },
  ];
  let people = [{ name: "VAZIO", birth_year: "VAZIO",height: "VAZIO", mass: "VAZIO", hair_color: "VAZIO",skin_color: "VAZIO",eye_color: "VAZIO"}];
  let currentPage = "https://swapi.dev/api/people";
  let nextPage = null;
  ;
  
  const btFetch = document.getElementById("btFetch");
  const btProxPag = document.getElementById("btProxPag");
  const tabelaB = document.getElementById("tabela_corpo");
  const listaFetch = document.getElementById("listaFetch");
  
  function exibirTudo() {
    btProxPag.disabled = nextPage == null;
    tabelaB.innerHTML = "";
    let textNode;
    let tdNode;

    for (let i = 0; i < people.length; ++i) {
        const trNode = document.createElement("tr");
        
        textNode = document.createTextNode(
        `${people[i].name}`
      );
      
      tdNode = document.createElement("td");
      tdNode.appendChild(textNode);
      trNode.appendChild(tdNode);


      textNode = document.createTextNode(
        `${people[i].birth_year}`
      );
      
      tdNode = document.createElement("td");
      tdNode.appendChild(textNode);
      trNode.appendChild(tdNode);


      textNode = document.createTextNode(
        `${people[i].height}`
      );
      
      tdNode = document.createElement("td");
      tdNode.appendChild(textNode);
      trNode.appendChild(tdNode);


      textNode = document.createTextNode(
        `${people[i].mass}`
      );
      
      tdNode = document.createElement("td");
      tdNode.appendChild(textNode);
      trNode.appendChild(tdNode);


      textNode = document.createTextNode(
        `${people[i].hair_color}`
      );
      
      tdNode = document.createElement("td");
      tdNode.appendChild(textNode);
      trNode.appendChild(tdNode);


      textNode = document.createTextNode(
        `${people[i].skin_color}`
      );
      
      tdNode = document.createElement("td");
      tdNode.appendChild(textNode);
      trNode.appendChild(tdNode);


      textNode = document.createTextNode(
        `${people[i].hair_color}`
      );
      
      tdNode = document.createElement("td");
      tdNode.appendChild(textNode);
      trNode.appendChild(tdNode);

      tabelaB.appendChild(trNode);
    }
}

  const fetchStarWarsPeople = () => {
    fetch(currentPage)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        people = data.results;
        nextPage = data.next;
        exibirTudo();
      })
      .catch((err) => {
        console.log("Erro recebido: ", err);
      });
  };
  
  const fetchProxPag = () => {
    currentPage = nextPage;
    nextPage = null;
    fetchStarWarsPeople();
  };
  
  btFetch.onclick = fetchStarWarsPeople;
  btProxPag.onclick = fetchProxPag;
  
//  exibirLista();
//  exibirListaStarWars();