let caja = document.querySelector(".caja");
let btnCrear = document.querySelector(".btnCrear");
let btnMostrar = document.querySelector(".btnMostrar");

btnCrear.addEventListener('click', () => {
    caja.appendChild(crearTarjeta());
    borrarInputs();
});

btnMostrar.addEventListener('click', mostrarTarjetas);

function crearTarjeta(){
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card");
    tarjeta.addEventListener('click', togglear);
    
    let imagen = document.createElement("img");
    imagen.classList.add("card-img-top");
    imagen.src=cargarImagen();

    let body = document.createElement("div");
    body.classList.add("card-body");
    
    let titulo = document.createElement("h5");
    titulo.classList.add("card-title");
    titulo.innerHTML = cargarTitulo();

    let texto = document.createElement("p");
    texto.classList.add("card-text");
    texto.innerHTML = cargarBody();

    body.appendChild(titulo);
    body.appendChild(texto);
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(body);
    
    return tarjeta;
}

function cargarTitulo(){
    let titulo = document.querySelector(".titulo").value;
    return titulo;
}

function cargarImagen(){
    let url = document.querySelector(".url").value;
    return url;
}

function cargarBody(){
    let comentarios = document.querySelector(".comentarios").value;
    return comentarios;
}

function borrarInputs(){
    document.querySelector(".titulo").value="";
    document.querySelector(".url").value="";
    document.querySelector(".comentarios").value="";
}

function togglear() {
    document.querySelector(".card").classList.replace("card", "hide");
}

function mostrarTarjetas() {
    document.querySelector(".hide").classList.replace("hide", "card");
}