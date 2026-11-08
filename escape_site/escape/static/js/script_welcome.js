const main = document.querySelector('main')
const button_r = document.querySelector('.btm_right');
const button_l = document.querySelector('.btm_left');
const bg_img = document.querySelector('.bg_img');
const w_1 = document.querySelector('.w-1');
const w_2 = document.querySelector('.w-2');
const w_3 = document.querySelector('.w-3');
const w_4 = document.querySelector('.w-4');
const pers_1 = document.querySelector('.pic_pers_1');
const pers_2 = document.querySelector('.pic_pers_2');
const des_3 = document.querySelector('.des_3');
const pic_1 = document.querySelector('.pic_1');
const des_4 = document.querySelector('.des_4');
const btm_about = document.querySelector('.btm_about');
const btm_about_2 = document.querySelector('.btm_about_2');
const des_5 = document.querySelector('.des_5');
const des_6 = document.querySelector('.des_6');
const menu_pointer = document.querySelector('.menu_pointer');
const img_pers_1 = document.getElementById('pers1')
const img_pers_2 = document.getElementById('pers2')
const img_btm_l = document.getElementById('btm_l');
const img_btm_r = document.getElementById('btm_r');
const img_3 = document.getElementById('img3');
let count = 0;

button_r.addEventListener('click', () => {
    if (count < 5){
        count += 1;
    }
    if (count == 1){
        button_l.classList.remove('block');
        w_1.classList.add('animate-out');
        w_2.classList.add('animate-in');
        bg_img.style.backgroundImage = "url(" + window.staticUrl + "img/welcome_img/img_bg_2.png)";
    }
    else if (count == 2){
        w_2.classList.add('animate-out');
        w_3.classList.add('animate-in');
        bg_img.style.backgroundImage = "url(" + window.staticUrl + "img/welcome_img/img_bg_3.png)";
    }
    else if (count == 3){
        //main.classList.add('rotate-bg');
        bg_img.classList.add('animate-out')
        des_3.classList.add('animate-out');
        pic_1.classList.add('animate-out');
        w_3.classList.add('animate-out');
        setTimeout(() => {
            w_4.style.opacity = 1;
            pers_1.classList.add('animate-in');
            pers_2.classList.add('animate-in');
            des_4.classList.remove('animate-out')
            des_4.classList.remove('animate-out2')
            btm_about.classList.add('in');
            btm_about_2.classList.add('in');
            btm_about_2.classList.add('in');
            des_4.classList.add('animate-in');
            bg_img.style.backgroundImage = "url(" + window.staticUrl + "img/welcome_img/img_bg_4.png)"
        }, 250);
    }
    else if (count == 4){
        img_pers_1.src = window.staticUrl + "img/welcome_img/img%20pers%20a.png";
        img_pers_2.src = window.staticUrl + "img/welcome_img/img%20pers%20b%20talk.png";
        des_5.classList.add('animate-in');
        des_4.classList.remove('animate-in')
        des_4.classList.remove('animate-out2')
        des_4.classList.add('animate-out')

    }
    else if (count == 5){
        des_5.classList.add('animate-out');
        des_6.classList.add('animate-in');
        des_4.classList.remove('animate-in')
        des_4.classList.remove('animate-out')
        des_4.classList.add('animate-out2')
        button_r.classList.add('block');
    }
});

button_l.addEventListener('click', () => {
 if (count > 0){
    count -= 1;
}
    if(count == 0){
        button_l.classList.add('block');
        w_1.classList.remove('animate-out');
        w_2.classList.remove('animate-in');
        bg_img.style.backgroundImage = "url(" + window.staticUrl + "img/welcome_img/img_bg_1.png)";
    }
    if(count == 1){
        w_2.classList.remove('animate-out');
        w_3.classList.remove('animate-in');
        bg_img.style.backgroundImage = "url(" + window.staticUrl + "img/welcome_img/img_bg_2.png)";
    }
    if(count == 2){
        bg_img.classList.remove('animate-out')
        des_3.classList.remove('animate-out');
        pic_1.classList.remove('animate-out');
        w_3.classList.remove('animate-out');
        w_4.style.opacity = 0;
        pers_1.classList.remove('animate-in');
        pers_2.classList.remove('animate-in');
        des_4.classList.remove('animate-in');
        btm_about.classList.remove('in')
        btm_about_2.classList.remove('in')
        bg_img.style.backgroundImage = "url(" + window.staticUrl + "img/welcome_img/img_bg_3.png)";
    }
    if(count == 3){
        img_pers_1.src = window.staticUrl + "img/welcome_img/img%20pers%20a%20talk.png";
        img_pers_2.src = window.staticUrl + "img/welcome_img/img%20pers%20b.png";
        des_5.classList.remove('animate-in');
        des_4.classList.add('animate-in')
        des_4.classList.remove('animate-out2')
        des_4.classList.remove('animate-out')
    }
    if(count == 4){
        des_5.classList.remove('animate-out');
        des_6.classList.remove('animate-in');
        button_r.classList.remove('block');
        des_4.classList.remove('animate-in')
        des_4.classList.remove('animate-out2')
        des_4.classList.add('animate-out')
    }
});