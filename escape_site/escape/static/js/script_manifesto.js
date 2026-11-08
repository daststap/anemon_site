const button_r = document.querySelector('.btm_right');
const button_l = document.querySelector('.btm_left');
const img_btm_l = document.getElementById('btm_l');
const img_btm_r = document.getElementById('btm_r');
const back_img = document.querySelector('.back-img');
const pers_img1 = document.getElementById('pers_img1');
const pers_img2 = document.getElementById('pers_img2');
const pers_img3 = document.getElementById('pers_img3'); 
const pers_img4 = document.getElementById('pers_img4');
const pers1= document.querySelector('.pers_1');
const pers2 = document.querySelector('.pers_2');
const pers3 = document.querySelector('.pers_3'); 
const pers4 = document.querySelector('.pers_4');
const img_back = document.getElementById('img_back');
const dialog_text = document.querySelector('.dialog-text');
const btm_roadmap = document.querySelector('.btm_roadmap');
const btm_roadmap_2 = document.querySelector('.btm_roadmap_2');
const btm_opacity = document.querySelector('.btm_opacity')
let count = 0;
let count_opacity = 0;
let text_edit = '';
let charIndex = 0;
let timer;

btm_opacity.addEventListener('click', () => {
    if (count_opacity == 0){
        btm_opacity.classList.add('active');
        pers1.classList.add('inactive');
        pers2.classList.add('inactive');
        pers3.classList.add('inactive');
        pers4.classList.add('inactive');
        count_opacity += 1;
    }

    else if (count_opacity == 1){
        btm_opacity.classList.remove('active');
        pers1.classList.remove('inactive');
        pers2.classList.remove('inactive');
        pers3.classList.remove('inactive');
        pers4.classList.remove('inactive');
        count_opacity -= 1;
    }
})


button_r.addEventListener('click', () => {
    if (count == 0){
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_2.png";
        button_l.classList.remove('block');
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "We want to embark on a journey into the world of art and fantasy. We aim to inspire, amaze, and unite!";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);
        count += 1;
    }
    
    else if (count == 1){
        pers_img2.classList.add('in');
        pers_img2.classList.remove('out');
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_3.png";
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "Our team hopes that you will be able to use our project as a path to freedom and self-expression.";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count += 1;
    }
    
    else if (count == 2){
        back_img.classList.add('in');
        back_img.classList.remove('out');
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202_2.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_4.png";
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "We take pride in helping to break free from stereotypes and prejudices, allowing everyone to be themselves without limitations!";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count += 1;
    }
    
    else if (count == 3){
        pers_img3.classList.add('in');
        pers_img4.classList.add('in');
        pers_img3.classList.remove('out');
        pers_img4.classList.remove('out');
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202_3.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_5.png";
        img_back.src = window.staticUrl + "img/manifesto_img/back_img_2.png";
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "Each new creation and every step in our project symbolizes our aspiration for growth and change.";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count += 1;
    }
    
    else if (count == 4){
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202_4.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_6.png";
        pers_img3.src = window.staticUrl + "img/manifesto_img/img%20pers%203_2.png";
        pers_img4.src = window.staticUrl + "img/manifesto_img/img%20pers%204_2.png";
        img_back.src = window.staticUrl + "img/manifesto_img/back_img_3.png";
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "We are constantly improving, creating increasingly captivating plots and stories ready for adaptation across various media formats. We strive to better ourselves!";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count += 1;
    }
    
    else if (count == 5){
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202_2.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_4.png";
        pers_img3.src = window.staticUrl + "img/manifesto_img/img%20pers%203_3.png";
        pers_img4.src = window.staticUrl + "img/manifesto_img/img%20pers%204_3.png";
        img_back.src = window.staticUrl + "img/manifesto_img/back_img_4.png";
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "We will continue to create, remain open to new ideas, and work together.";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count += 1;
    }
    
    else if (count == 6){
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202_4.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_6.png";
        pers_img3.src = window.staticUrl + "img/manifesto_img/img%20pers%203_2.png";
        pers_img4.src = window.staticUrl + "img/manifesto_img/img%20pers%204_2.png";
        back_img.classList.remove('in');
        back_img.classList.add('out');
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "Have the chance to share with us our inspirations and emotions via joining Escape.";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count += 1;
    }
    
    else if (count == 7){
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_2.png";
        pers_img3.src = window.staticUrl + "img/manifesto_img/img%20pers%203_2.png";
        pers_img4.src = window.staticUrl + "img/manifesto_img/img%20pers%204.png";
        img_back.src = window.staticUrl + "img/manifesto_img/back_img_3.png";
        button_r.classList.add('block');
        dialog_text.textContent = '';
        charIndex = 0;
        btm_roadmap.classList.add('in');
        btm_roadmap_2.classList.add('in');
        btm_opacity.classList.add('out');
        clearInterval(timer);
        text_edit = "Join this pathway with us today!";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count += 1;
    }
    
});

button_l.addEventListener('click', () => {
    if (count == 1){
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201.png";
        button_l.classList.add('block');
        dialog_text.textContent = '';
        text_edit = "Welcome to the Manifesto.";
        charIndex = 0;
        clearInterval(timer);
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);
        count -= 1;
        bla.textContent = document.documentElement.clientWidth;
    }
    else if (count == 2){
        pers_img2.classList.add('out');
        pers_img2.classList.remove('in');
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_2.png";
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "We want to embark on a journey into the world of art and fantasy. We aim to inspire, amaze, and unite!";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count -= 1;
    }
    
    else if (count == 3){
        back_img.classList.add('out');
        back_img.classList.remove('in');
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_3.png";
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "Our team hopes that you will be able to use our project as a path to freedom and self-expression.";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count -= 1;
    }
    
    else if (count == 4){
        pers_img3.classList.add('out');
        pers_img4.classList.add('out');
        pers_img3.classList.remove('in');
        pers_img4.classList.remove('in');
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202_2.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_4.png";
        img_back.src = window.staticUrl + "img/manifesto_img/back_img_1.png";
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "We take pride in helping to break free from stereotypes and prejudices, allowing everyone to be themselves without limitations!";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count -= 1;
    }
    
    else if (count == 5){
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202_3.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_5.png";
        pers_img3.src = window.staticUrl + "img/manifesto_img/img%20pers%203.png";
        pers_img4.src = window.staticUrl + "img/manifesto_img/img%20pers%204.png";
        pers_img4.src = window.staticUrl + "img/manifesto_img/img%20pers%204.png";
        img_back.src = window.staticUrl + "img/manifesto_img/back_img_2.png";
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "Each new creation and every step in our project symbolizes our aspiration for growth and change.";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count -= 1;
    }
    
    else if (count == 6){
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202_4.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_6.png";
        pers_img3.src = window.staticUrl + "img/manifesto_img/img%20pers%203_2.png";
        pers_img4.src = window.staticUrl + "img/manifesto_img/img%20pers%204_2.png";
        img_back.src = window.staticUrl + "img/manifesto_img/back_img_3.png";
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "We are constantly improving, creating increasingly captivating plots and stories ready for adaptation across various media formats. We strive to better ourselves!";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count -= 1;
    }
    
    else if (count == 7){
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202_2.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_4.png";
        pers_img3.src = window.staticUrl + "img/manifesto_img/img%20pers%203_3.png";
        pers_img4.src = window.staticUrl + "img/manifesto_img/img%20pers%204_3.png";
        img_back.src = window.staticUrl + "img/manifesto_img/back_img_4.png";
        dialog_text.textContent = '';
        back_img.classList.add('in');
        back_img.classList.remove('out');
        charIndex = 0;
        clearInterval(timer);
        text_edit = "We will continue to create, remain open to new ideas, and work together.";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count -= 1;
    }
    
    else if (count == 8){
        const viewport_width = document.documentElement.clientWidth;
        pers_img2.src = window.staticUrl + "img/manifesto_img/img%20pers%202_4.png";
        pers_img1.src = window.staticUrl + "img/manifesto_img/img%20pers%201_6.png";
        pers_img3.src = window.staticUrl + "img/manifesto_img/img%20pers%203_2.png";
        pers_img4.src = window.staticUrl + "img/manifesto_img/img%20pers%204_2.png";
        img_back.src = window.staticUrl + "img/manifesto_img/back_img_3.png";
        btm_opacity.classList.remove('out');
        button_r.classList.remove('block');
        btm_roadmap.classList.remove('in');
        btm_roadmap_2.classList.remove('in');
        dialog_text.textContent = '';
        charIndex = 0;
        clearInterval(timer);
        text_edit = "Have the chance to share with us our inspirations and emotions via joining Escape.";
        timer = setInterval(() => {
            const char = text_edit[charIndex];
            dialog_text.textContent += char;
            charIndex++;
            if (charIndex >= text_edit.length) {
                clearInterval(timer);
            }
        }, 25);

        count -= 1;
    }
    
})