let inputCajas = document.querySelector(".cantCajas");
let inputTiempo = document.querySelector(".tiempoDemora");
let btnCrear = document.querySelector(".btn-crear");
let btnBorrar = document.querySelector(".btn-borrar");
let div = document.querySelector(".cajas");
let boxes = document.querySelectorAll(".box");

function crearDiv() {
    let caja = document.createElement("div");
    caja.classList.add("box");
    div.appendChild(caja);
}

function animacion() {
    for (let i = 0; i < inputCajas.value; i++) {
        setTimeout(() => {  // setInterval
            crearDiv();
        }, inputTiempo.value * 1000);
    }
    clearInterval();
}

function borrar() {
    document.querySelector(".cajas").textContent = "";
}

btnCrear.addEventListener("click", animacion);
btnBorrar.addEventListener("click", borrar);