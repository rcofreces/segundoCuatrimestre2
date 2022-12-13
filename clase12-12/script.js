let inputName = document.getElementById('name');
let inputSurname = document.getElementById('surname');
let btn = document.querySelector('.btn');

btn.addEventListener('click', addUser);

function addUser() {
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdSurname = document.createElement('td');

    tdName.innerText = inputName.value;
    tdSurname.innerText = inputSurname.value;

    let tbody = document.getElementById('tab');
    tbody.appendChild(tr);
    tr.appendChild(tdName);
    tr.appendChild(tdSurname);
}

fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(data => {
        console.log(`Nombre: ${data.results[0].name.first} Apellido: ${data.results[0].name.last} Titulo: ${data.results[0].name.title}`)
    
        inputName.value = data.results[0].name.first;
        inputSurname.value = data.results[0].name.last;
    })
    .catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message))