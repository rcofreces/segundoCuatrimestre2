let monos = [
    {nombre:'Pocho', apellido: 'Orozco'},
    {nombre:'Toto', apellido: 'Lepers'},
    {nombre:'Cholo', apellido: 'Orozco'},
    {nombre: 'Tom', apellido: 'Orozco'},
    {nombre:'Moncho', apellido: 'Orozco'},
    {nombre:'Rodolfo',apellido: 'Orozco'},
    {nombre:'Otto',apellido: 'Orozco'},
    {nombre:'Pololo',apellido: 'Orozco'}
];

monos.forEach(mono => console.log(mono.nombre + " " + mono.apellido));

let fliaOrozco = monos.filter(mono => mono.apellido == "Orozco");
console.log(fliaOrozco);

let monosConcatenados = fliaOrozco.map(mono => {
    console.log(mono.nombre + "-" + mono.apellido);
});

fliaOrozco.forEach(mono => console.log("Hola " + mono.nombre + " " + mono.apellido));
