fetch("https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees")
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        for (let i = 0; i < data.length; i++) {
            let tbody = document.getElementById('tableBody');
                
            let tr = document.createElement('tr');
            let thID = document.createElement('th');
            let tdName = document.createElement('td');
            let tdCity = document.createElement('td');
            let tdBirthday = document.createElement('td');
            let tdEmail = document.createElement('td');
        
            thID.innerText = data[i].id;
            tdName.innerText = data[i].name;
            tdCity.innerText = data[i].city;
            tdBirthday.innerText = data[i].birthday;
            tdEmail.innerText = data[i].email;
        
            tbody.appendChild(tr);
            tr.appendChild(thID);
            tr.appendChild(tdName);
            tr.appendChild(tdCity);
            tr.appendChild(tdBirthday);
            tr.appendChild(tdEmail);
        }
    })
    .catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message))