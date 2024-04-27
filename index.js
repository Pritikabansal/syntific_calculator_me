let topbox = document.querySelector('#topbox');
let btn = document.querySelectorAll('.a');

for (item of btn) {
    item.addEventListener('click', (e) => {
        const btnText = e.target.textContent;
        if (btnText!== 'More') {
            topbox.value += btnText;
        }
    });
}

function sin() {
    if (isNaN(topbox.value)) {
        alert('Please enter a number');
        return;
    }
    topbox.value = Math.sin(topbox.value);
}

function cos() {
    if (isNaN(topbox.value)) {
        alert('Please enter a number');
        return;
    }
    topbox.value = Math.cos(topbox.value);
}

function tan() {
    if (isNaN(topbox.value)) {
        alert('Please enter a number');
        return;
    }
    topbox.value = Math.tan(topbox.value);
}

function log() {
    if (isNaN(topbox.value) || topbox.value <= 0) {
        alert('Please enter a positive number');
        return;
    }
    topbox.value = Math.log(topbox.value);
}

function exp() {
    topbox.value = Math.exp(topbox.value);
}

function e() {
    topbox.value = 2.718281828459045;
}

function pi() {
    topbox.value = 3.14159265359;
}

function pow() {
    if (isNaN(topbox.value)) {
        alert('Please enter a number');
        return;
    }
    topbox.value = Math.pow(topbox.value, 2);
}

function sqrt() {
    if (isNaN(topbox.value) || topbox.value < 0) {
        alert('Please enter a non-negative number');
        return;
    }
    topbox.value = Math.sqrt(topbox.value);
}

function fact() {
    if (isNaN(topbox.value)) {
        alert('Please enter a number');
        return;
    }
    let num = parseInt(topbox.value);
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f = f * i;
    }
    topbox.value = f;
}

function backspace() {
    topbox.value = topbox.value.substr(0, topbox.value.length - 1);
}

function calculate() {
    if (isNaN(topbox.value)) {
        alert('Please enter a valid expression');
        return;
    }
    let prevCalculation = topbox.value + " = " + eval(topbox.value);
    document.getElementById("prev-calculation").innerText = prevCalculation;
    topbox.value = eval(topbox.value);
}

const buttons = document.querySelector('.b-box5');
const buttons1 = document.querySelector('.b-box6');
const buttons2 = document.querySelector('.b-box7');
function toggleButtons() {
    buttons.classList.toggle('hidden');
    buttons1.classList.toggle('hidden');
    buttons2.classList.toggle('hidden');
}