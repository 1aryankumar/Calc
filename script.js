const display = document.querySelector('.display'); 
const buttons = document.querySelectorAll('button'); 

const calulate = document.querySelector

buttons.forEach((button) => {
    button.addEventListener('click', (e) => calulate(e.target.dataset.value)); });