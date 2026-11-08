const button_menu = document.querySelector('.button-menu');
const left_line = document.querySelector('.left_line');
const right_line = document.querySelector('.right_line');
const bottom_line = document.querySelector('.bottom_line');
const page = document.querySelector('.page');
const menu = document.querySelector('.menu');

let count_menu = 0

button_menu.addEventListener('click', () => {
    if (count_menu == 0){
        left_line.classList.add("active")
        right_line.classList.add("active")
        bottom_line.classList.add("active")
        menu.classList.add("animate-in")
        count_menu += 1;
    }
    else{
        left_line.classList.remove("active")
        right_line.classList.remove("active")
        bottom_line.classList.remove("active")
        menu.classList.remove("animate-in")
        count_menu -= 1;
    }
});

menu.addEventListener('click', () => {
    left_line.classList.remove("active")
    right_line.classList.remove("active")
    bottom_line.classList.remove("active")
    menu.classList.remove("animate-in")
    count_menu -= 1;
});