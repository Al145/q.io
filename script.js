const questions = document.querySelector('.questions');
const right = document.querySelector('.right');
const caption = document.querySelector('.caption');
const descr = document.querySelector('.descr');
const h2Hide = document.querySelector('.caption_2');
const modalWindow = document.querySelector('#modal-window');
const modalWin = document.querySelector('.modal-win');
const modalText = document.querySelector('.modal-text');
const modalNum = document.querySelector('.modal-num');
const twoTiers = document.querySelector('.links');
const start = document.querySelector('#start');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const form = document.querySelector('.registration');
const answer = document.querySelectorAll('.answer');
let counter = 0;
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);


modalWin.style.display = 'none';
start.addEventListener('click', () => {
    answer
        .forEach(function (element) {
            element.style.display = 'block';
        });
    caption.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a urna sit amet';
    descr.innerHTML = '';
    descr.style.marginBottom = '60px';
    h2Hide.innerHTML = '';
    right.style.animation = 'move 1s ease both';
    twoTiers
        .classList
        .add('two-tiers');
    root
        .style
        .setProperty('--main-color', '#fc8950');
    start.style.display = 'none';
    mod();
})

function mod() {
    for (let i = 0; i < answer.length; i++) {
        answer[i].onclick = modal;
    }

    function modal() {
        modalWindow.style.display = 'block';
        modalWin.style.display = 'block';
        btn4.style.display = 'block';
        let allInputs = questions.querySelectorAll('input');
        allInputs.forEach((answer) => {
            let text = {
                num1: '24%',
                text1: 'людей обращают внимание на а.',
                text1_1: 'пользователей — Вариант А',
                num2: '30%',
                text2: 'людей обращают внимание на б.',
                text2_2: 'пользователей — Вариант Б',
                num3: '46%',
                text3: 'людей обращают внимание на с.'
            }
            if (this.name === 'btn1') {
                modalText.innerHTML = text.text1;
                modalNum.innerHTML = text.num1;
            } else if (this.name === 'btn2') {
                modalText.innerHTML = text.text2;
                modalNum.innerHTML = text.num2;
            }
            if (this.name == 'btn3') {
                modalText.innerHTML = text.text3;
                modalNum.innerHTML = text.num3;
            }
        });
    }
    if (counter === 0) {
        btn4.addEventListener('click', () => {
            modalWin.style.display = 'none';
            btn4.style.display = 'none';
            modalWindow.style.display = 'none';
            let text = {
                num1: '52.4%',
                text1_1: 'пользователей — Вариант А',
                num2: '47.6%',
                text2_2: 'пользователей — Вариант Б'
            }
            btn1.addEventListener('click', () => {
                modalText.innerHTML = text.text1_1;
                modalNum.innerHTML = text.num1;
                btn4.style.display = 'block';
            })
            btn2.addEventListener('click', () => {
                modalText.innerHTML = text.text2_2;
                modalNum.innerHTML = text.num2;
                btn4.style.display = 'block';
            })
            caption.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod';
            root.style.setProperty('--main-color', '#fcc150');
            btn3.style.display = 'none';
            counter++;
            if (counter === 1) {
                caption.innerHTML = 'Lorem ipsum';
                btn4.addEventListener('click', () => {
                    root.style.setProperty('--main-color', '#1da7c0');
                    btn1.style.display = 'none';
                    btn2.style.display = 'none';
                    form.style.display = 'block';
                    btn4.style.display = 'none';
                    root.style.setProperty('--main-color', '#1da7c0');
                })
            }
        })
    }
}