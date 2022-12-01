"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var Recta = /** @class */ (function () {
    function Recta() {
    }
    Recta.prototype.escribir = function (punto) {
        console.log("Estoy escribiendo un ".concat(punto));
    };
    return Recta;
}());
var puntoInicial = new punto_1.Punto();
var puntoFinal = new punto_1.Punto();
var recta1 = new Recta();
recta1.escribir(puntoInicial);
recta1.escribir(puntoFinal);
