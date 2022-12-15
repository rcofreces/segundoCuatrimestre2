fetch("https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees")
    .then(response => response.json())
    .then(data => {
        downloadData(data);
    })
    .catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message));

function downloadData(data){
    for (let i = 0; i < data.length; i++) {
        let array = data[i];

        let tbody = document.getElementById('tableBody');

        let tr = document.createElement('tr');
        let thID = document.createElement('th');
        let tdName = document.createElement('td');
        let tdCity = document.createElement('td');
        let tdBirthday = document.createElement('td');
        let tdEmail = document.createElement('td');
        let tdEdit = document.createElement('td');
        let tdDelete = document.createElement('td');

        thID.innerText = array.id;
        tdName.innerText = array.name;
        tdCity.innerText = array.city;
        tdBirthday.innerText = array.birthday;
        tdEmail.innerText = array.email;
        tdEdit.innerHTML = `<button type="button" class="btn btn-outline-dark bi bi-pencil-fill" id=${array.id}" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editUser('${array.id}', '${array.name}', '${array.city}', '${array.birthday}', '${array.email}')"></button>`;
        tdDelete.innerHTML = `<button type="button" class="btn btn-outline-dark bi bi-trash-fill" id=${array.id}" onclick="deleteUser('${array.id}')"></button>`;

        tr.id = 'id' + array.id;

        tbody.appendChild(tr);
        tr.appendChild(thID);
        tr.appendChild(tdName);
        tr.appendChild(tdCity);
        tr.appendChild(tdBirthday);
        tr.appendChild(tdEmail);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);
    }
}

function deleteUser(id) {
    let deleteUser = document.getElementById('id' + id).remove();
}

function editUser(id, name, city, birthday, email) {
    let inputID = document.getElementById('inputID');
    inputID.classList.add('userNotNew');
    inputID.value = id;

    let inputName = document.getElementById('inputName');
    inputName.value = name;

    let inputCity = document.getElementById('inputCity');
    inputCity.value = city;

    let inputBirthday = document.getElementById('inputBirthday');
    inputBirthday.value = birthday;

    let inputEmail = document.getElementById('inputEmail');
    inputEmail.value = email;
}

function saveUser() {
    let inputID = document.getElementById('inputID');
    let inputName = document.getElementById('inputName');
    let inputCity = document.getElementById('inputCity');
    let inputBirthday = document.getElementById('inputBirthday');
    let inputEmail = document.getElementById('inputEmail');
    let tr = document.getElementById('id' + inputID.value);

    if (inputID.classList.contains('userNotNew')) {
        let id = tr.firstElementChild;
        id.nextElementSibling.innerText = inputName.value;

        let name= id.nextElementSibling;
        name.nextElementSibling.innerText = inputCity.value;
    
        let city = name.nextElementSibling;
        city.nextElementSibling.innerText = inputBirthday.value;
        
        let birthday = city.nextElementSibling;
        birthday.nextElementSibling.innerText = inputEmail.value;

        inputID.classList.remove('userNotNew');
    } else {
        addUser();
    }
}

function emptyModal() {
    let ID = document.getElementById('inputID');
    let name = document.getElementById('inputName');
    let city = document.getElementById('inputCity');
    let birthday = document.getElementById('inputBirthday');
    let email = document.getElementById('inputEmail');
    
    ID.value = "";
    name.value = "";
    city.value = "";
    birthday.value = "";
    email.value = "";
}

function addUser(){
    let tr = document.createElement('tr');
    let thID = document.createElement('th');
    let tdName = document.createElement('td');
    let tdCity = document.createElement('td');
    let tdBirthday = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdEdit = document.createElement('td');
    let tdDelete = document.createElement('td');

    let tbody = document.getElementById('tableBody');
    
    let newID = parseInt(tbody.lastChild.innerText) + 1;
    thID.innerText = newID;

    let newName = document.getElementById('inputName');
    tdName.innerText = newName.value;

    let newCity = document.getElementById('inputCity');
    tdCity.innerText = newCity.value;

    let newBirthday = document.getElementById('inputBirthday');
    tdBirthday.innerText = newBirthday.value;

    let newEmail = document.getElementById('inputEmail');
    tdEmail.innerText = newEmail.value;

    tdEdit.innerHTML = `<button type="button" class="btn btn-outline-dark bi bi-pencil-fill" id=${newID}" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editUser('${newID.value}', '${newName.value}', '${newCity.value}', '${newBirthday.value}', '${newEmail.value}')"></button>`;
    tdDelete.innerHTML = `<button type="button" class="btn btn-outline-dark bi bi-trash-fill" id=${newID}" onclick="deleteUser('${newID}')"></button>`;

    tr.id = 'id' + newID;

    tbody.appendChild(tr);
    tr.appendChild(thID);
    tr.appendChild(tdName);
    tr.appendChild(tdCity);
    tr.appendChild(tdBirthday);
    tr.appendChild(tdEmail);
    tr.appendChild(tdEdit);
    tr.appendChild(tdDelete);
}