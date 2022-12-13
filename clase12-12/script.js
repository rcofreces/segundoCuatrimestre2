let inputName = document.getElementById("name");
let inputSurname = document.getElementById("surname");
let btn = document.getElementById("button");
let tableBody = document.getElementById("tab");

function addUser() {
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdSurname = document.createElement("td");
    tdName.innerText = inputName.value;
    tdSurname.innerText = inputSurname.value;
    tableBody.appendChild(tr);
    tr.appendChild(tdName);
    tr.appendChild(tdSurname);
}

btn.addEventListener("click", addUser);

fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        console.log(`Nombre: ${data.results[0].name.first} Apellido: ${data.results[0].name.last}`)
        inputName.value = data.results[0].name.first;
        inputSurname.value = data.results[0].name.last;
    })
    .catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message))