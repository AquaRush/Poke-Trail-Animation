const body = document.querySelector("body");

let pokemonImages = [
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_charmander-256.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_psyduck-512.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_mankey-512.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_eevee-512.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_caterpie-512.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-512.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_jigglypuff-512.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_weedle-256.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_snorlax-512.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_venonat-512.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pidgey-512.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_squirtle-512.png)',
    'url(https://cdn3.iconfinder.com/data/icons/pokemon-go-3/512/pokemon_go_play_game_charcter_2-256.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_dratini-256.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_bulbasaur-512.png)',
    'url(https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_abra-256.png)',
]

function pokeLogic(mouse) {
    // Get X & Y coordinates of the mouse
    let xMousePos = mouse.offsetX;
    let yMousePos = mouse.offsetY;
    let span = document.createElement("span");
    body.appendChild(span);

    span.style.left = xMousePos + "px";
    span.style.top = yMousePos + "px";

    // Randomise the size of the icon
    let randomSize = Math.random() * 80;
    span.style.width = randomSize + "px";
    span.style.height = randomSize + "px";

    // Randomise the image
    span.style.backgroundImage = pokemonImages[randomPokeImage()];
}

function spanRemove() {
    // Remove the element for performance
    setTimeout(() => {
        span.remove();
    }, 14000); // 14 seconds since CSS animation takes 15s, anything after that will be removed to save memory.
}

function randomPokeImage() {
    // Get random image index
    return Math.floor(Math.random() * pokemonImages.length);
}


body.addEventListener("click", pokeLogic);
body.addEventListener("mousemove", pokeLogic);
