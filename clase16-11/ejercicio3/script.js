let btn = document.querySelector(".btn");
let contenedor = document.querySelector(".contenedor");
let body = document.body;

btn.addEventListener("click", actualizarTiempo);

function crearDiv() {
    let div = document.createElement("div");
    div.classList.add("caja");
    contenedor.appendChild(div);
}

let segundos = 10;
function actualizarTiempo() {
    if (segundos === 0) {
        clearInterval();
        contenedor.classList.add("hide");
        btn.classList.add("hide");
        body.classList.add("bomba");
    } else {
        segundos --;
        crearDiv();
        setTimeout("actualizarTiempo()", 1000);
    }
}