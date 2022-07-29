const getRandomGif = function (cat) {
    const img = document.querySelector('img');
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=POF13ZGRPxujXTW0Q7Up2Vx8n6zJOM6s&tag=${cat}&rating=g`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;    
        });
}

const buttonAction = function (button, value) {
    button.addEventListener('click', function getCatGif (event) {
        const imageContainer = document.querySelector('.image-container');
        const image = document.getElementById('gif');
        imageContainer.removeChild(image);
        const replacementGif = document.createElement("img");
        replacementGif.id = "gif";
        imageContainer.appendChild(replacementGif);
        getRandomGif(value);
    })
}

const catsButton = document.getElementById('cats');
const animalsButton = document.getElementById('dogs');
const animeButton = document.getElementById('anime');
const twiceButton = document.getElementById('twice');

buttonAction(catsButton, "cat");
buttonAction(animalsButton, "dogs");
buttonAction(animeButton, "anime");
buttonAction(twiceButton, "twice");


getRandomGif("anime");
