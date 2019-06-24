
//1
function waitForScroll() {
    return new Promise((resolve) => {
        window.addEventListener('scroll', resolve);
    })
}


const color1 = Math.floor(Math.random() * (255 - 0) + 0);
const color2 = Math.floor(Math.random() * (255 - 0) + 0);
const color3 = Math.floor(Math.random() * (255 - 0) + 0);
function drawOnScroll() {
    waitForScroll().then(() => {
        const div = document.getElementById('div');
        div.style.background = `rgb(${color1}, ${color2}, ${color3})`;
        div.style.marginTop = '10px';
    })
}

//2

function waitForAnswer() {
    return new Promise((resolve, reject) => {
        window.addEventListener('keypress', (x) => {
            if (x.keyCode == 89) {
                resolve();
            } else if (x.keyCode == 78) {
                reject();
            }
        })
    })
}


function setText(text) {
    const div = document.getElementById('div1');
    div.innerHTML = text;
}

//setText(' Вы сделали домашнее задание? Y / N');
waitForAnswer()
    .then(() => setText('Так держать!'))
    .catch(() => setText('Нужно подтянуть('))


//3

let timeout_id = null;

function waitForTime(time) {
    return new Promise((resolve) => {
         timeout_id = setTimeout(() => { resolve('100 кликов вне очереди') }, time);
    }).then(msg => {
        setText(msg);
    });
}


function waitForClicks(clicknum) {
    return new Promise((resolve) => {
        let click = 0;
        window.addEventListener('click', () => {
            click++
            if (click === clicknum) {
                if (timeout_id !== null){
                    clearTimeout(timeout_id);
                }

                resolve('Good job, comrade');
            }
        })
    }).then(msg => {
        setText(msg);
    });
}


function clickChallange(clicknum, time){
    setText(`У вас есть ${time} секунд, чтобы сделать ${clicknum} кликов`);

    Promise.race([waitForTime(time), waitForClicks(clicknum)]);

    
}


