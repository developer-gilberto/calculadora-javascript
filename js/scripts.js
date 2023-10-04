let todosNumeros = document.querySelectorAll('.numbers');
let todosOperadores = document.querySelectorAll('.operadores');
let display = document.querySelector('.display');
let ceZeraDisplay = document.querySelector('.ce');
let igual = document.querySelector('.igual');
let ponto = document.querySelector('.ponto');
let permiteOperador = true;
let permitePonto = true;

ceZeraDisplay.addEventListener('click', () => {

    permiteOperador = true;
    permitePonto = true;
    display.innerText = '0';
});

function inserirPonto(){

    if(permitePonto == false){

        display.innerText += '';
    } else {

        display.innerText += '.';
        permitePonto = false;
    };
};

ponto.addEventListener('click', () => {

    inserirPonto();
});

todosNumeros.forEach((button) => {

    button.addEventListener('click', () => {

        if(display.innerText == '0'){

            display.innerText = button.innerText;
        } else {

            display.innerText += button.innerText;   
        };
    });
});

todosOperadores.forEach((button) => {

    button.addEventListener('click', () => {
        
        if(display.innerText == '0'){

            display.innerText = '0' + button.innerText;
            permiteOperador = false;
            permitePonto = true;
        };
        if(permiteOperador == false){

            display.innerText += '';
        } else {

            display.innerText += button.innerText;
            permiteOperador = false;
            permitePonto = true;
        };
    });
});

igual.addEventListener('click', () => {

    console.log('O resultado de ' + display.innerText);
    display.innerText = eval(display.innerText);
    permiteOperador = true;
    permitePonto = true;
    console.log('É igual a ' + display.innerText);
});