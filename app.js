//function pickNumber() {
//    let amount = document.getElementById('amount').value;
//    let fromNumber = document.getElementById('fromNumber').value;
//    let toNumber = document.getElementById('toNumber').value;
//    console.log(`${amount}, ${fromNumber}, ${toNumber}`);
//    }
let drawnedNumber = [];
let value;


function pickNumber() {
    selectIndex('amount');
    selectIndex('fromNumber');
    selectIndex('toNumber');
    
for (let i = 0; i < selectIndex('amount'); i++) {
    value = pickRandomNumber('fromNumber' , 'toNumber'); {
    while (drawnedNumber.includes(value)) {
        value = pickRandomNumber('fromNumber' , 'toNumber');
    }
    drawnedNumber.push(value);
    console.log(drawnedNumber);
    }
}
showTextOnScreen('displayResult', `<label class="texto__paragrafo">The drawn number ${singularOrPlural()} : ${drawnedNumber}.</label>`);
alterButtonStatus();
}

function reset(){
    resetIndex('amount');
    resetIndex('fromNumber');
    resetIndex('toNumber');

    drawnedNumber.splice(0 , drawnedNumber.length);
    showTextOnScreen('displayResult', `<label class="texto__paragrafo">The drawn number is: none until now</label>`);
    alterButtonStatus();
}

function selectIndex (tag) {
    let typeInput = parseInt(document.getElementById(tag).value);
    return typeInput;
}
function resetIndex (tag , text) {
    document.getElementById(tag).value = text;
}

function showTextOnScreen(label , text){
    let blank = document.getElementById(label);
    blank.innerHTML = text;
}

function pickRandomNumber(min, max){
    minValue = Math.ceil(selectIndex(min));
    maxValue = Math.floor(selectIndex(max));
    let result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    return result;
}
function singularOrPlural(){
    let are = drawnedNumber.length <= 1 ? 'is' : 'are';
    return are
}
function alterButtonStatus(){
    let button = document.getElementById('btn-reset');
    if (button.classList.contains('container__botao-desabilitado')) {
        button.classList.remove('container__botao-desabilitado');
        button.classList.add('container__botao');
    } else {
        button.classList.remove('container__botao');
        button.classList.add('container__botao-desabilitado');
    }
}