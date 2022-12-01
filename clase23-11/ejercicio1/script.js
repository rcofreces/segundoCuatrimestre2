fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json())
.then(data => { 
    console.log(`Pokemon1: ${data.results[0].name}, Pokemon2: ${data.results[3].name}, Pokemon3: ${data.results[6].name}, Pokemon4: ${data.results[15].name}, Pokemon5: ${data.results[18].name}`)
    let contenedor = document.querySelector(".contenedor");
    let pokemonName1 = document.createElement("h2");
    pokemonName1.classList.add("card");
    pokemonName1.innerText = data.results[0].name;
    contenedor.appendChild(pokemonName1);
    let img1 = document.createElement("div");
    img1.classList.add("img1");
    contenedor.appendChild(img1);
    let pokemonName2 = document.createElement("h2");
    pokemonName2.classList.add("card");
    pokemonName2.innerText = data.results[3].name;
    contenedor.appendChild(pokemonName2);
    let img2 = document.createElement("div");
    img2.classList.add("img2");
    contenedor.appendChild(img2);
    let pokemonName3 = document.createElement("h2");
    pokemonName3.classList.add("card");
    pokemonName3.innerText = data.results[6].name;
    contenedor.appendChild(pokemonName3);
    let img3 = document.createElement("div");
    img3.classList.add("img3");
    contenedor.appendChild(img3);
    let pokemonName4 = document.createElement("h2");
    pokemonName4.classList.add("card");
    pokemonName4.innerText = data.results[15].name;
    contenedor.appendChild(pokemonName4);
    let img4 = document.createElement("div");
    img4.classList.add("img4");
    contenedor.appendChild(img4);
    let pokemonName5 = document.createElement("h2");
    pokemonName5.classList.add("card");
    pokemonName5.innerText = data.results[18].name;
    contenedor.appendChild(pokemonName5);
    let img5 = document.createElement("div");
    img5.classList.add("img5");
    contenedor.appendChild(img5);
});

// Creo divs y no img porque con el background-image me sale un recuadro negro en cada imagen.