let div = document.getElementById('div');


let button = document.getElementById('button');
let close = document.getElementById('close');

button.addEventListener('click', (event) =>{
    div.style.display = 'block';
});

close.addEventListener('click', (event) =>{
    div.style.display = 'none';
});
