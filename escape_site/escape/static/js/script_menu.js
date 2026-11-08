const navig_button_l = document.querySelector('.left-btn');
const navig_button_r = document.querySelector('.right-btn');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menu_mobile = document.querySelector('.menu-mobile');
const navig = document.querySelector('.navig');
const img_navigbtn_l = document.getElementById('navig_btn_l');
const img_navigbtn_r = document.getElementById('navig_btn_r');
const welcome_text = document.querySelector('.welcome_text');
const about_text = document.querySelector('.about_text');
const manifesto_text = document.querySelector('.manifesto_text');
const roadmap_text = document.querySelector('.roadmap_text');
const room_text = document.querySelector('.room_text');
const images = document.querySelectorAll('.welcome_img, .about_img, .manifesto_img, .roadmap_img, .room_img');
const welcome_img = document.querySelector('.welcome_img');
const about_img = document.querySelector('.about_img');
const manifesto_img = document.querySelector('.manifesto_img');
const roadmap_img = document.querySelector('.roadmap_img');
const room_img = document.querySelector('.room_img');
const soon_img = document.querySelector('.soon_img');
const navig_text = document.querySelector('.navig-text');
const button_menu = document.querySelector('.button-menu');
const first_top_line = document.querySelector('.first_top_line');
const second_top_line = document.querySelector('.second_top_line');
const first_bottom_line = document.querySelector('.first_bottom_line');
const second_bottom_line = document.querySelector('.second_bottom_line');
const bot = document.querySelector('.bot');
const page = document.querySelector('.page');

let count_menu = 0

button_menu.addEventListener('click', () => {
    if (count_menu == 0){
        first_top_line.classList.add("active")
        second_top_line.classList.add("active")
        first_bottom_line.classList.add("active")
        second_bottom_line.classList.add("active")
        menu.classList.add("animate-in")
        menu_mobile.classList.add("animate-in")
        count_menu += 1;
    }
    else{
        first_top_line.classList.remove("active")
        second_top_line.classList.remove("active")
        first_bottom_line.classList.remove("active")
        second_bottom_line.classList.remove("active")
        menu.classList.remove("animate-in")
        menu_mobile.classList.remove("animate-in")
        count_menu -= 1;
    }
});

menu.addEventListener('click', (event) => {
    if (!navig.contains(event.target) && !bot.contains(event.target) && count_menu == 1) {
        left_line.classList.remove("active")
        right_line.classList.remove("active")
        bottom_line.classList.remove("active")
        menu.classList.remove("animate-in")
        header.style.backgroundColor = "white";
        header.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.12)";
        count_menu -= 1;
    }
  });

document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 && count_menu == 1){ 
        left_line.classList.remove("active")
        right_line.classList.remove("active")
        bottom_line.classList.remove("active")
        menu.classList.remove("animate-in")
        header.style.backgroundColor = "white";
        header.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.12)";
        count_menu -= 1;
	}
});

navig_text.addEventListener('mouseover', () => {
    images.forEach((image) => {
      image.classList.add('hover');
    });
  });
  
  navig_text.addEventListener('mouseout', () => {
    images.forEach((image) => {
      image.classList.remove('hover');
    });
  });

navig_button_l.addEventListener('click', () => {
    if (count_navig == 1){
        welcome_img.classList.remove('out')
        about_img.classList.add('in')
        welcome_text.classList.add('active')
        about_text.classList.remove('active')
        navig_text.textContent = "Welcome"
        navig_button_l.classList.add("block")
        count_navig -= 1;
    }
    else if (count_navig == 2){
        about_img.classList.remove('out')
        manifesto_img.classList.add('in')
        about_text.classList.add('active')
        manifesto_text.classList.remove('active')
        navig_text.textContent = "About"
        count_navig -= 1;
    }
    else if (count_navig == 3){
        manifesto_img.classList.remove('out')
        roadmap_img.classList.add('in')
        manifesto_text.classList.add('active')
        roadmap_text.classList.remove('active')
        navig_text.textContent = "Manifesto"
        count_navig -= 1;
    }
    else if (count_navig == 4){
        roadmap_img.classList.remove('out')
        room_img.classList.add('in')
        roadmap_text.classList.add('active')
        room_text.classList.remove('active')
        soon_img.classList.remove('active');
        navig_text.textContent = "Road Map"
        count_navig -= 1;
        navig_button_r.classList.remove("block")
    }
});

navig_button_r.addEventListener('click', () => {
if (count_navig == 0){
    welcome_img.classList.add('out')
    about_img.classList.remove('in')
    welcome_text.classList.remove('active')
    about_text.classList.add('active')
    navig_text.textContent = "About"
    navig_button_l.classList.remove("block")
    count_navig += 1;
}
else if (count_navig == 1){
    about_img.classList.add('out')
    manifesto_img.classList.remove('in')
    about_text.classList.remove('active')
    manifesto_text.classList.add('active')
    navig_text.textContent = "Manifesto"
    count_navig += 1;
}
else if (count_navig == 2){
    manifesto_img.classList.add('out')
    roadmap_img.classList.remove('in')
    manifesto_text.classList.remove('active')
    roadmap_text.classList.add('active')
    navig_text.textContent = "Road Map"
    count_navig += 1;
}
else if (count_navig == 3){
    roadmap_img.classList.add('out')
    room_img.classList.remove('in')
    roadmap_text.classList.remove('active')
    room_text.classList.add('active')
    soon_img.classList.add('active');
    navig_text.textContent = "Room"
    count_navig += 1;
    navig_button_r.classList.add("block")
}
});

navig_text.addEventListener('click', () => {
    if (count_navig == 0){
        location.href = window.welcomeUrl;
    }
    else if (count_navig == 1){
        location.href = window.aboutUrl;
    }
    else if (count_navig == 2){
        location.href = window.manifestoUrl;
    }
    else if (count_navig == 3){
        location.href = window.roadmapUrl; 
    }
});

welcome_text.addEventListener('click', () => {
    welcome_img.classList.remove('out')
    welcome_img.classList.remove('in')
    about_img.classList.remove('out')
    about_img.classList.add('in')
    manifesto_img.classList.remove('out')
    manifesto_img.classList.add('in')
    roadmap_img.classList.remove('out')
    roadmap_img.classList.add('in')
    room_img.classList.remove('out')
    room_img.classList.add('in')
    welcome_text.classList.add('active')
    about_text.classList.remove('active')
    manifesto_text.classList.remove('active')
    roadmap_text.classList.remove('active')
    room_text.classList.remove('active')
    soon_img.classList.remove('active');
    navig_text.textContent = "Welcome"
    navig_button_l.classList.add("block")
    navig_button_r.classList.remove("block")
    count_navig = 0;
});

about_text.addEventListener('click', () => {
    welcome_img.classList.add('out')
    welcome_img.classList.remove('in')
    about_img.classList.remove('out')
    about_img.classList.remove('in')
    manifesto_img.classList.remove('out')
    manifesto_img.classList.add('in')
    roadmap_img.classList.remove('out')
    roadmap_img.classList.add('in')
    room_img.classList.remove('out')
    room_img.classList.add('in')
    welcome_text.classList.remove('active')
    about_text.classList.add('active')
    manifesto_text.classList.remove('active')
    roadmap_text.classList.remove('active')
    room_text.classList.remove('active')
    soon_img.classList.remove('active');
    navig_text.textContent = "About"
    navig_button_l.classList.remove("block")
    navig_button_r.classList.remove("block")
    count_navig = 1;
});

manifesto_text.addEventListener('click', () => {
    welcome_img.classList.add('out')
    welcome_img.classList.remove('in')
    about_img.classList.add('out')
    about_img.classList.remove('in')
    manifesto_img.classList.remove('out')
    manifesto_img.classList.remove('in')
    roadmap_img.classList.remove('out')
    roadmap_img.classList.add('in')
    room_img.classList.remove('out')
    room_img.classList.add('in')
    welcome_text.classList.remove('active')
    about_text.classList.remove('active')
    manifesto_text.classList.add('active')
    roadmap_text.classList.remove('active')
    room_text.classList.remove('active')
    soon_img.classList.remove('active');
    navig_text.textContent = "Manifesto"
    navig_button_l.classList.remove("block")
    navig_button_r.classList.remove("block")
    count_navig = 2;
});

roadmap_text.addEventListener('click', () => {
    welcome_img.classList.add('out')
    welcome_img.classList.remove('in')
    about_img.classList.add('out')
    about_img.classList.remove('in')
    manifesto_img.classList.add('out')
    manifesto_img.classList.remove('in')
    roadmap_img.classList.remove('out')
    roadmap_img.classList.remove('in')
    room_img.classList.remove('out')
    room_img.classList.add('in')
    welcome_text.classList.remove('active')
    about_text.classList.remove('active')
    manifesto_text.classList.remove('active')
    roadmap_text.classList.add('active')
    room_text.classList.remove('active')
    soon_img.classList.remove('active');
    navig_text.textContent = "Road Map"
    navig_button_l.classList.remove("block")
    navig_button_r.classList.remove("block")
    count_navig = 3;
});

room_text.addEventListener('click', () => {
    welcome_img.classList.add('out')
    welcome_img.classList.remove('in')
    about_img.classList.add('out')
    about_img.classList.remove('in')
    manifesto_img.classList.add('out')
    manifesto_img.classList.remove('in')
    roadmap_img.classList.add('out')
    roadmap_img.classList.remove('in')
    room_img.classList.remove('out')
    room_img.classList.remove('in')
    welcome_text.classList.remove('active')
    about_text.classList.remove('active')
    manifesto_text.classList.remove('active')
    roadmap_text.classList.remove('active')
    room_text.classList.add('active')
    soon_img.classList.add('active');
    navig_text.textContent = "Room"
    navig_button_l.classList.remove("block")
    navig_button_r.classList.add("block")
    count_navig = 4;
});