const btFetch = document.getElementById("btFetchDog");
const btFetch2 = document.getElementById("btFetchCat");

const fetchRandomImage= () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        return response.json();
      })
      .then((dog) => {
        console.log('dog', dog)
        imgAleatoria.src = dog.message;
    })
};

const fetchCatImage= () => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => {
        return response.json();
      })
      .then((cat) => {
        console.log('cat', cat)
        imgAleatoria.src = cat[0].url;
    })
};
  
btFetchDog.onclick = fetchRandomImage;
btFetchCat.onclick = fetchCatImage;