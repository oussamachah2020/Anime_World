
const pics = [
    "./image/bakugo.png",
    "./image/hashira.png",
    "./image/naruto.png",
    "./image/waifu2.png",
    "./image/waifu.png",
    "./image/asta.png",
]

let count = 0;

const Content = document.querySelector('.content');
function changeImage() {
    Content.innerHTML = `<img src="${pics[count]}" width="450px" height="450px">`;
}changeImage();

const NextImg = document.querySelector('.nextImg');
const PrevImg = document.querySelector('.prevImg');

window.addEventListener('DOMContentLoaded',() => {
    changeImage();
})

function up() {
    count++
    if(count > pics.length - 1) {
        count = 0;
    }
    changeImage();
}

function Down() {
    count--;
    if(count < 0) {
        count = pics.length -1;
    }
    changeImage();
}

NextImg.addEventListener('click',() => {
    up();
})


PrevImg.addEventListener('click',() => {
    Down();
})

setInterval(up,2000);

const form = document.querySelector('.info');
const Inputs = document.querySelectorAll('.input');
const Alert = document.querySelector('.alert');

let msg = '📛 Enter your informations !!!';


form.addEventListener('submit',(el) => {
    el.preventDefault();
    
    Inputs.forEach((input) => {
        const InValue = input.value;
        if(InValue == "") {
            Alert.innerHTML = msg;
            Alert.classList.add('show-alert');
        }
    })
})

setInterval(function() {
    Alert.innerHTML = "";
    Alert.classList.remove('show-alert');
},3000)