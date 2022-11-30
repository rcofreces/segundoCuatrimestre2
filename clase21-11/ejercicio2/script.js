let visor = document.querySelector('.visor');
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let btn3 = document.querySelector('.btn-3');
let btn4 = document.querySelector('.btn-4');
let btn5 = document.querySelector('.btn-5');
let btn6 = document.querySelector('.btn-6');
let btn7 = document.querySelector('.btn-7');
let btn8 = document.querySelector('.btn-8');
let btn9 = document.querySelector('.btn-9');
let btn0 = document.querySelector('.btn-0');
let btnBorrar = document.querySelector('.btn-borrar');
let btnSuma = document.querySelector('.btn-suma');
let btnResta = document.querySelector('.btn-resta');
let btnMultiplicar = document.querySelector('.btn-multiplicar');
let btnDividir = document.querySelector('.btn-dividir');
let btnIgual = document.querySelector('.btn-igual');
let btnPunto = document.querySelector('.btn-punto');

let operandoA = 0;
let operandoB = 0;
let operacion = 0;

btn1.onclick = function(e) {
    visor.textContent = visor.textContent + "1";
};
btn2.onclick = function(e) {
    visor.textContent = visor.textContent + "2";
};
btn3.onclick = function(e) {
    visor.textContent = visor.textContent + "3";
};
btn4.onclick = function(e) {
    visor.textContent = visor.textContent + "4";
};
btn5.onclick = function(e) {
    visor.textContent = visor.textContent + "5";
};
btn6.onclick = function(e) {
    visor.textContent = visor.textContent + "6";
};
btn7.onclick = function(e) {
    visor.textContent = visor.textContent + "7";
};
btn8.onclick = function(e) {
    visor.textContent = visor.textContent + "8";
};
btn9.onclick = function(e) {
    visor.textContent = visor.textContent + "9";
};
btn0.onclick = function(e) {
    visor.textContent = visor.textContent + "0";
};
btnPunto.onclick = function(e) {
    visor.textContent = visor.textContent + ".";
};
btnBorrar.onclick = function(e) {
    resetear();
};
btnSuma.onclick = function(e) {
    operandoA = visor.textContent;
    operacion = "+";
    limpiar();
};
btnResta.onclick = function(e) {
    operandoA = visor.textContent;
    operacion = "-";
    limpiar();
};
btnMultiplicar.onclick = function(e) {
    operandoA = visor.textContent;
    operacion = "*";
    limpiar();
};
btnDividir.onclick = function(e) {
    operandoA = visor.textContent;
    operacion = "/";
    limpiar();
};
btnIgual.onclick = function(e) {
    operandoB = visor.textContent;
    resolver();
};

function resetear() {
    visor.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function limpiar() {
    visor.textContent = "";
}

function resolver() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
    }
    resetear();
    visor.textContent = res;
}