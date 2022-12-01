let usuarios = [
    {firstName: "Susan", lastName: "Steward"},
    {firstName: "Daniel", lastName: "Longbottom"},
    {firstName: "Jacob", lastName: "Black"}
];

let resultado = usuarios.filter(usuario => usuario.firstName == "Susan");
console.log(resultado);