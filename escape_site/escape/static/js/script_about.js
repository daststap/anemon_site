const body = document.body;
const button_r = document.querySelector('.btm_right');
const button_l = document.querySelector('.btm_left');
const major = document.querySelector('.major');
const image = document.querySelector('.image');
const backimg_1 = document.querySelector('.backimg_1');
const backimg_2 = document.querySelector('.backimg_2');
const backimg_4 = document.querySelector('.backimg_4');
const backimg_5 = document.querySelector('.backimg_5');
const pic3 = document.querySelector('.pic3');
const pic_1 = document.querySelector('.pic_1');
const pic_2 = document.querySelector('.pic_2');
const pic_3 = document.querySelector('.pic_3');
const pic_4 = document.querySelector('.pic_4');
const pic_5 = document.querySelector('.pic_5');
const text = document.querySelector(".text")
const titleText = document.querySelector('.titleText');
const containter_text = document.querySelector('.container-text');
const des = document.querySelector('.des');
const opensea = document.querySelector('.opensea');
const btm_manifesto = document.querySelector('.btm_manifesto');
const btm_manifesto_2 = document.querySelector('.btm_manifesto_2')
const btm_opensea = document.querySelector('.btm_opensea');
const btm_opensea_img = document.querySelector('.btm_opensea_img')
const btm_opensea_2 = document.querySelector('.btm_opensea_2')
const soon_blind = document.querySelector('.soon_blind')
const img_btm_l = document.getElementById('btm_l');
const img_btm_r = document.getElementById('btm_r');
let count = 0;
const titleTemplate = document.createElement('template');
titleTemplate.innerHTML = '<h1 class="title">{{ title }}</h1>';

const desTemplate = document.createElement('template');
desTemplate.innerHTML = '<p class="des">{{ description }}</p>';

btm_opensea.addEventListener('mouseover', () => {
  setTimeout(() => {
    btm_opensea_img.src = window.staticUrl + "img/main_img/buttons/opensea_btm_hover.png";
  }, 100); 
});

btm_opensea.addEventListener('mouseout', () => {
  setTimeout(() => {
    btm_opensea_img.src = window.staticUrl + "img/main_img/buttons/opensea_btm.png";
  }, 100); 
});

btm_opensea_2.addEventListener('mouseover', () => {
  soon_blind.style.width = 0;
});

btm_opensea_2.addEventListener('mouseout', () => {
  soon_blind.style.width = '45px';
});

button_r.addEventListener('click', (event) => {
  event.preventDefault();
  if (count == 0){
    pic_1.classList.add('out');
    pic_2.classList.add('in');
    backimg_1.classList.remove('in')
    backimg_1.classList.add('out')
    backimg_2.classList.add('in')
    backimg_2.classList.remove('out')
    button_l.classList.remove('block');
    titleText.classList.remove('about')
    titleText.textContent = "WITH LOVE"
    des.textContent = "The development of each element was approached with love and attention to detail. We endeavored to embody our own artistic style that has not been seen before."
    count += 1;
  }
  else if (count == 1){
        pic_2.classList.remove('in');
        pic_2.classList.add('out');
        pic_3.classList.add('in');
        backimg_2.classList.remove('in');
        backimg_2.classList.add('out');
        image.classList.add('size');
        pic3.classList.add('in');
        opensea.classList.remove('in');
        btm_opensea.classList.remove('in');
        btm_opensea_2.classList.remove('in');
        titleText.textContent = "TRAITS"
        des.innerHTML = "Each avatar represents a uniquely generated model with over 500 characteristics. They describe not only the external features but also special skills and equipment. <br><br> Despite the presence of rare elements, the fixed cost of each avatar is 0.08 ETH. Avatars are presented as ERC-721 tokens on the Ethereum blockchain and stored on IPFS."
        count += 1;
    }
  else if (count == 2){
        pic_3.classList.add('out');
        pic_3.classList.remove('in');
        pic_4.classList.add('in');
        backimg_4.classList.add('in')
        backimg_4.classList.remove('out')
        image.classList.remove('size')
        text.classList.add('color')
        titleText.textContent = "TALES"
        des.textContent = "In addition to creating a unique NFT collection, we are also developing captivating stories and plots centered around our avatars. These are presented in the format of visual novels and the mini-quests that precede them. "
        count += 1;
    }
    else if (count == 3){
        pic_4.classList.add('out');
        pic_4.classList.remove('in');
        pic_5.classList.add('in');
        image.style.alignitems = "start";
        image.classList.add("in")
        backimg_4.classList.remove('in')
        backimg_4.classList.add('out')
        backimg_5.classList.add('in')
        backimg_5.classList.remove('out')
        btm_manifesto.classList.add('in')
        btm_manifesto_2.classList.add('in')
        titleText.textContent = "COMMUNITY"
        des.innerHTML = "These stories are not only created by us but are actively shaped by our users. Your actions, item choices, and decisions directly influence the development and outcome of the characters' stories. <br><br>With multiple endings, the stories become truly unique. Thus, our users are not just observers of the plot but become a part of it, living the characters' stories along with us."
        button_r.classList.add('block');
        count += 1;
    }
});

button_l.addEventListener('click', (event) => {
  event.preventDefault();
  if (count == 1){
    titleText.textContent = "ABOUT"
    titleText.classList.add('about')
    des.textContent = "The 'Escape' collection features 8,000 unique avatars that reflect our creative philosophy in the world of Web-3. Each one possesses its own distinct characteristics, granting owners exclusive rights and the opportunity to participate in future projects."
    pic_1.classList.remove('out');
    pic_2.classList.remove('in');
    image.classList.remove('size')
    backimg_2.classList.remove('in')
    backimg_2.classList.add('out')
    backimg_1.classList.add('in')
    backimg_1.classList.remove('out')
    button_l.classList.add('block');
    count -= 1;
  }
  else if (count == 2){
    pic_2.classList.add('in');
    pic_2.classList.remove('out');
    pic_3.classList.remove('in');
    image.classList.add('size');
    pic3 .classList.add('size');
    backimg_2.classList.add('in');
    backimg_2.classList.remove('out');
    opensea.classList.add('in');
    btm_opensea.classList.add('in');
    btm_opensea_2.classList.add('in');
    titleText.textContent = "WITH LOVE"
    des.textContent = "The development of each element was approached with love and attention to detail. We endeavored to embody our own artistic style that has not been seen before."
    count -= 1;
  }
  else if (count == 3){
    body.style.background = "linear-gradient(rgba(255,255,255,1) 0%, rgba(255,255,255,1) 75%, rgba(237,237,237,1) 100%)";
    pic_3.classList.add('in');
    pic_3.classList.remove('out');
    pic_4.classList.remove('in');
    backimg_4.classList.remove('in')
    backimg_4.classList.add('out')
    text.classList.remove('color');
    titleText.textContent = "TRAITS"
    des.innerHTML = "Each avatar represents a uniquely generated model with over 500 characteristics. They describe not only the external features but also special skills and equipment. <br><br> Despite the presence of rare elements, the fixed cost of each avatar is 0.08 ETH. Avatars are presented as ERC-721 tokens on the Ethereum blockchain and stored on IPFS."
    count -= 1;
  }
  else if (count == 4){
    pic_4.classList.remove('out');
    pic_4.classList.add('in');
    pic_5.classList.remove('in');
    btm_manifesto.classList.remove('in')
    btm_manifesto_2.classList.remove('in')
    backimg_5.classList.remove('in')
    backimg_5.classList.add('out')
    backimg_4.classList.add('in')
    backimg_4.classList.remove('out')
    image.classList.remove("in")
    titleText.textContent = "TALES"
    des.innerHTML = des.textContent = "In addition to creating a unique NFT collection, we are also developing captivating stories and plots centered around our avatars. These are presented in the format of visual novels and the mini-quests that precede them. "
    count -= 1;
    button_r.classList.remove('block');
}
});