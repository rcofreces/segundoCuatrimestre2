import { Punto } from "./punto";

class Recta {
    protected funcion: string;

    public escribirPrincipio(punto: Punto): void {
        console.log('Estoy escribiendo un punto al principio');
    }

    public escribirFinal(punto: Punto): void {
        console.log('Estoy escribiendo un punto final');
    }
}

let punto1 = new Punto();
let recta1 = new Recta();

recta1.escribirPrincipio(punto1);
recta1.escribirFinal(punto1);