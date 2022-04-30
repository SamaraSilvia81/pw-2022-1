Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "PTfS9TEZXtmGssyZ0ImtPKtaXn9ArPXQvkrASqfg", // This is your Application ID
  "0462wRsuzQ4tz7FtX8Jtaaphvn52AU3oiLQqEGdz" // This is your Javascript key
);

const btCriarApi = document.getElementById("btApi2");

const inputNome = document.getElementById("btNome");
const inputIdade = document.getElementById("btIdade");
const inputPeso = document.getElementById("btPeso");
const inputAltura = document.getElementById("btAltura");
const inputGenero = document.getElementById("btGenero");
const inputCorOlho = document.getElementById("btOlho");
const inputCorCabelo = document.getElementById("btCabelo");

function limparInput() {
    inputNome.value = " ";
    inputIdade.value = " ";
    inputPeso.value = " ";
    inputAltura.value = " ";
    inputGenero.value = " ";
    inputCorOlho.value = " ";
    inputCorCabelo.value = " ";
}


const fetchApi2 = async () => {
    console.log('fetchApi2');
    const myNewObject = new Parse.Object('Biografia');
      myNewObject.set('Nome', inputNome.value);
      myNewObject.set('Idade', Number(inputIdade.value));
      myNewObject.set('Altura', inputAltura.value);
      myNewObject.set('Cor_Dos_Olhos', inputCorOlho.value);
      myNewObject.set('Cor_Do_Cabelo', inputCorCabelo.value);
      myNewObject.set('Genero', inputGenero.value);
      myNewObject.set('Peso', inputPeso.value);
      limparInput();
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('Biografia created', result);
    } catch (error) {
      console.error('Error while creating Biografia: ', error);
    }
  }; 
  
btCriarApi.onclick = fetchApi2;