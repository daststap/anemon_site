const button_r = document.querySelector('.btm_right');
const button_l = document.querySelector('.btm_left');
const img_btm_l = document.getElementById('btm_l');
const img_btm_r = document.getElementById('btm_r');
const date = document.querySelector(".date")
const card_1 = document.querySelector('.card_1');
const card_2 = document.querySelector('.card_2');
const card_3 = document.querySelector('.card_3');
const card_4 = document.querySelector('.card_4');
const ind_1 = document.querySelector('.ind_1');
const ind_2 = document.querySelector('.ind_2');
const ind_3 = document.querySelector('.ind_3');
const ind_4 = document.querySelector('.ind_4');
let count = 0;

window.onload = () => {
    setTimeout(() => {
      card_1.classList.add('animate-out');
      card_2.classList.add('animate-out');
      card_3.classList.add('animate-out');
      card_4.classList.add('animate-out');
      date.style.opacity = 1;
    }, 500);
    };

button_r.addEventListener('click', () => {
    if (count == 0){
        ind_1.classList.remove('in')
        ind_2.classList.remove('out')
        ind_1.classList.add('out')
        ind_2.classList.add('in')
        card_2.classList.remove('animate-out')
        card_2.classList.add('animate-in')
        card_3.classList.remove('animate-out')
        card_3.classList.add('animate-in')
        count += 1;
        button_l.classList.remove('block');
    }
    else if (count == 1){
        ind_2.classList.remove('in')
        ind_3.classList.remove('out')
        ind_2.classList.add('out')
        ind_3.classList.add('in')
        card_3.classList.remove('animate-in')
        card_3.classList.add('animate-in2')
        card_4.classList.remove('animate-out')
        card_4.classList.add('animate-in')
        count += 1;
    }
    else if (count == 2){
        ind_3.classList.remove('in')
        ind_4.classList.remove('out')
        ind_3.classList.add('out')
        ind_4.classList.add('in')
        card_4.classList.remove('animate-in')
        card_4.classList.add('animate-in2')
        count += 1;
        button_r.classList.add('block');
    }
})

button_l.addEventListener('click', () => {
    if (count == 1){
        ind_1.classList.remove('out')
        ind_2.classList.remove('in')
        ind_1.classList.add('in')
        ind_2.classList.add('out')
        card_2.classList.remove('animate-in')
        card_2.classList.add('animate-out')
        card_3.classList.remove('animate-in')
        card_3.classList.add('animate-out')
        count -= 1;
        button_l.classList.add('block');
    }
    
    else if (count == 2){
        ind_2.classList.remove('out')
        ind_3.classList.remove('in')
        ind_2.classList.add('in')
        ind_3.classList.add('out')
        card_3.classList.remove('animate-in2')
        card_3.classList.add('animate-in')
        card_4.classList.remove('animate-in')
        card_4.classList.add('animate-out')
        count -= 1;
    }
    else if (count == 3){
        ind_3.classList.remove('out')
        ind_4.classList.remove('in')
        ind_3.classList.add('in')
        ind_4.classList.add('out')
        card_4.classList.remove('animate-in2')
        card_4.classList.add('animate-in')
        count -= 1;
        button_r.classList.remove('block');
    }
})

ind_1.addEventListener('click', () => {
    count = 0;
    card_2.classList.remove('animate-in')
    ind_1.classList.remove('out')
    ind_2.classList.remove('out')
    ind_3.classList.remove('out')
    ind_4.classList.remove('out')
    ind_2.classList.add('out')
    ind_3.classList.add('out')
    ind_4.classList.add('out')
    ind_1.classList.remove('in')
    ind_2.classList.remove('in')
    ind_3.classList.remove('in')
    ind_4.classList.remove('in')
    card_3.classList.remove('animate-in')
    card_3.classList.remove('animate-in2')
    card_4.classList.remove('animate-in')
    card_4.classList.remove('animate-in2')
    card_2.classList.add('animate-out')
    card_3.classList.add('animate-out')
    card_4.classList.add('animate-out')
    ind_1.classList.add('in')
    button_l.classList.add('block');
    button_r.classList.remove('block');
})

ind_2.addEventListener('click', () => {
    count = 1;
    card_2.classList.remove('animate-in')
    ind_1.classList.remove('out')
    ind_2.classList.remove('out')
    ind_3.classList.remove('out')
    ind_4.classList.remove('out')
    ind_1.classList.add('out')
    ind_3.classList.add('out')
    ind_4.classList.add('out')
    ind_1.classList.remove('in')
    ind_2.classList.remove('in')
    ind_3.classList.remove('in')
    ind_4.classList.remove('in')
    card_3.classList.remove('animate-in')
    card_3.classList.remove('animate-in2')
    card_4.classList.remove('animate-in')
    card_4.classList.remove('animate-in2')
    card_2.classList.add('animate-in')
    card_3.classList.add('animate-in')
    card_4.classList.add('animate-out')
    ind_2.classList.add('in')
    button_l.classList.remove('block');
    button_r.classList.remove('block');
})

ind_3.addEventListener('click', () => {
    count = 2;
    card_2.classList.remove('animate-in')
    ind_1.classList.remove('out')
    ind_2.classList.remove('out')
    ind_3.classList.remove('out')
    ind_4.classList.remove('out')
    ind_1.classList.add('out')
    ind_2.classList.add('out')
    ind_4.classList.add('out')
    ind_1.classList.remove('in')
    ind_2.classList.remove('in')
    ind_3.classList.remove('in')
    ind_4.classList.remove('in')
    card_3.classList.remove('animate-in')
    card_3.classList.remove('animate-in2')
    card_4.classList.remove('animate-in')
    card_4.classList.remove('animate-in2')
    card_2.classList.add('animate-in')
    card_3.classList.add('animate-in2')
    card_4.classList.add('animate-in')
    ind_3.classList.add('in')
    button_l.classList.remove('block');
    button_r.classList.remove('block');
})

ind_4.addEventListener('click', () => {
    count = 3;
    card_2.classList.remove('animate-in')
    ind_1.classList.remove('out')
    ind_2.classList.remove('out')
    ind_3.classList.remove('out')
    ind_4.classList.remove('out')
    ind_1.classList.add('out')
    ind_2.classList.add('out')
    ind_3.classList.add('out')
    ind_1.classList.remove('in')
    ind_2.classList.remove('in')
    ind_3.classList.remove('in')
    ind_4.classList.remove('in')
    card_3.classList.remove('animate-in')
    card_3.classList.remove('animate-in2')
    card_4.classList.remove('animate-in')
    card_4.classList.remove('animate-in2')
    card_2.classList.add('animate-in')
    card_3.classList.add('animate-in2')
    card_4.classList.add('animate-in2')
    ind_4.classList.add('in')
    button_l.classList.remove('block');
    button_r.classList.add('block');
})