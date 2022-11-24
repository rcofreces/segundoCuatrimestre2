let segundos = 10;

function actualizarTiempo() {
    document.getElementById("btnBomba").innerHTML = "Quedan " + segundos + " segundos";
    if (segundos === 0) {
        alert("BOOM!!!!!, se terminó el tiempo.");
    } else {
        segundos --;
        setTimeout("actualizarTiempo()", 1000);
    }
}