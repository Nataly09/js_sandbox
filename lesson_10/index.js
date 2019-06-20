const convert_btn = document.getElementById("convert-btn");
const monitor = document.getElementById('relation-rate');
const base_currency = document.getElementById("base-currency");
const count = document.getElementById("count");
const rel_currency = document.getElementById('rel-currency');
const loader = document.getElementById('loader');

convert_btn.addEventListener("click", () => {
    const base = base_currency.value;
    const rel = rel_currency.value;

    base_currency.disabled = true;
    rel_currency.disabled = true;
    count.disabled = true;
    convert_btn.disabled = true;
    loader.style.display = 'block';

    fetch( `https://api.exchangeratesapi.io/latest?base=${base}`, {metod: 'GET'})
    .then((response) => response.json()).then((crs) => {

        if(base_currency.value === rel_currency.value){
            monitor.textContent = 'Выберите другую валюту'
        }else{
            monitor.textContent = `${(crs.rates[rel] * count.value).toFixed(2)} ${rel_currency.value}`;
        };

        setTimeout(() => {
            base_currency.disabled = false;
            rel_currency.disabled = false;
            count.disabled = false;
            convert_btn.disabled = false;
            loader.style.display = 'none';
        }, 1000);
    });


});

const date_start = document.getElementById('date_start');
const date_finish = document.getElementById('date_finish');
const approve = document.getElementById('rate-master');

approve.addEventListener('click', () => {
    let start = date_start.value;
    let finish = date_finish.value;
    
    fetch( `https://api.exchangeratesapi.io/history?start_at=${start}&end_at=${finish}&base=USD`, {metod: 'GET'})
    .then((response) => response.json()).then((intervals) => {
        for(let key in intervals.rates){
            const div = document.createElement('div');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let h3 = document.createElement('h3');
            console.log(key);
            h3.innerHTML = key;
            p1.innerHTML = `${intervals.rates[key].USD}  USD`;
            p2.innerHTML = `${(intervals.rates[key].GBP).toFixed(2)}  GBP`;
            p3.innerHTML = `${(intervals.rates[key].EUR).toFixed(2)}  EUR`;
                p1.style.margin =  '0px';
                p1.style.padding =  '5px';
                p1.style.borderBottom =  '1px solid rgb(243, 158, 0)';
                p2.style.margin =  '0px';
                p2.style.padding =  '5px';
                p2.style.borderBottom =  '1px solid rgb(243, 158, 0)';
                p3.style.margin =  '0px';
                p3.style.padding =  '5px';
            div.style.border = '1px solid rgb(243, 158, 0)';
            div.style.marginTop = '10px';
            document.body.append(h3);
            document.body.append(div);
            
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
        }});
});



