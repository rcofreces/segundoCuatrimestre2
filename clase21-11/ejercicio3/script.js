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
    if (inputCajas.value < 1 || inputCajas.value == "" || inputTiempo.value == "") {
        alert('Ingrese valores validos en los inputs');
    } else {
        let i = 0;
        let interval = setInterval(() => {
            crearDiv();
            i++;
            if (i == inputCajas.value) {
                inputCajas.value = "";
                inputTiempo.value = "";
                clearInterval(interval);
            }
        }, inputTiempo.value * 1000);
    }
}

function borrar() {
    document.querySelector(".cajas").textContent = "";
}

btnCrear.addEventListener("click", animacion);
btnBorrar.addEventListener("click", borrar);