const SECRET_KEY = '$2a$10$M5Tdh.itm6AgMWMj7RFx4OgHMI6ZtmRCHLYqoL5O/e9HhQFUuXURa';


function geolocation_search() {
    const div = document.getElementById('div');
    const div1 = document.getElementById('div1');
    fetch('http://ip-api.com/json/', { metod: 'GET' }).then((res) => res.json()).then((new_ip) => {
        const address = new_ip.query;
        fetch(`https://api.jsonbin.io/g/${address}`, { metod: "GET" }).then((result) => result.json()).then((geolocation) => {
            div.innerText = `${geolocation.data.city}  ${geolocation.data.country}`;

        }).catch((err) => div.innerText = err);
    }).catch((err) => div.innerText = err);
    div1.style.display = 'none';
}

//setTimeout(geolocation_search, 5000);


function getDate() {
    return fetch(`https://api.jsonbin.io/b/5d110652ae35cf54f1f0ca27/latest`, {
        method: 'GET',
        headers: {
            'secret-key': SECRET_KEY

        }
     
    })
    .then(res => res.json());
}


function delDate() {
    return fetch(`https://api.jsonbin.io/b/$5d110652ae35cf54f1f0ca27`, {
        method: 'DELETE',
        headers: {
            'secret-key': SECRET_KEY
        }
    });
}


function putDate(data) {
    return fetch(`https://api.jsonbin.io/b/5d110652ae35cf54f1f0ca27`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'secret-key': SECRET_KEY
        },
        body: JSON.stringify(data)
    });
}


function fun_list() {
    const div = document.getElementById('list');
    const input = document.createElement('input');
    input.setAttribute = ('type', 'text');
    input.value = '';
    const button = document.createElement('button');
    button.innerHTML = 'Add';
    input.style.margin = '15px';
    input.style.height = '20px';
    input.style.width =  '250px';
    const ol = document.createElement('ol');
    button.style.borderRadius = '10px';
    button.style.width = '60px';
    button.style.height = '25px';
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    div.appendChild(input);
    div.appendChild(button);
    div.appendChild(ol);
    button.addEventListener('click', () =>{
        if(input.value != ''){
         putDate({ list: input.value});
         getDate().then((res) => {
            const li = document.createElement('li');
            li.innerText = res.list;
            li.style.color = 'white';
             li.style.fontSize = '22px';
             ol.appendChild(li);
             input.value = '';
         }
         )}
    })
}





