 const randomEmail = require('random-email');
 
 const validator = require("email-validator");

let div = document.getElementById('div');

let button = document.getElementById('button');
let close = document.getElementById('close');
let mial = document.getElementById('mial');
let inp = document.getElementById('inp');
button.addEventListener('click', (event) =>{
    div.style.display = 'block';
    mial.innerText = randomEmail();
});

close.addEventListener('click', (event) =>{
    div.style.display = 'none';
});



inp.addEventListener('change', (event) =>{
    if(inp.value == ""){
        inp.style.border = '2px solid gray';}else
    if(validator.validate(inp.value) === true){
        inp.style.border = '2px solid green';
    }else if(validator.validate(inp.value) === false){ inp.style.border = '2px solid red'}
    });




