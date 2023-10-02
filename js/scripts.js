let numbers = document.querySelectorAll('.numbers');
let operadores = document.querySelectorAll('.operadores');
let display = document.querySelector('.display');
let ce = document.querySelector('.ce');
let igual = document.querySelector('.igual');

ce.addEventListener('click', () => {
    display.textContent = '0'
})

numbers.forEach((numbers) => {
    numbers.addEventListener('click', () => {
        if(display.textContent == '0'){
            display.textContent = ''
        }
        display.textContent += numbers.textContent
    });
})

operadores.forEach((operadores) => {
    operadores.addEventListener('click', () => {
        if(display.textContent == '0'){
            display.textContent = ''
        }
        display.textContent += operadores.textContent
    });
})

igual.addEventListener('click', () => {
    display.textContent = eval(display.textContent);
})