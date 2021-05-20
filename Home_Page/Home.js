//import { AnimeCovers } from './Animes.js'
const AnimeCovers = [
    {
        id:1,
        image:'image/bnhas.png',
        title:'Boku No Hero Academia S5',
    },
    {
        id:2,
        image:'image/shaman.jpg',
        title:'Shaman King (2021)',
    },
    {
        id:3,
        image:'image/zero.jpg',
        title:'Endes Zero',
    },
    {
        id:4,
        image:"image/jd.jpg",
        title:"Tensei shitara Slime Datta Ken (2nd Season)",
    },
    {
        id:5,
        image:"image/WT.jpg",
        title:"World Trigger (2nd Season)",
    }
];

let AnimeIndex = 0;

const Cover = document.querySelector('#Cover');
const title = document.querySelector('.Anime_title');
const nextBtn = document.querySelector('.nextAnime');
const prevBtn = document.querySelector('.prevAnime');
const Texts = document.querySelectorAll('.black');
const Images = document.querySelectorAll('.images');
const InputSearch = document.querySelector('.inSearch');
const PageTravel = document.querySelectorAll('.number');
const Contact = document.querySelector('.contact');
const InputEmail = document.querySelector('.inputEmail');
const form = document.querySelector('.News');
const paragraph = document.querySelector('#para');

function CoverImg() {
    title.innerHTML = AnimeCovers[AnimeIndex].title;
    Cover.src = AnimeCovers[AnimeIndex].image;
}CoverImg();

window.onload = CoverImg;

function prevAnime() {
    AnimeIndex--;

    if(AnimeIndex < 0) {
        AnimeIndex = AnimeCovers.length - 1;
    }

    CoverImg();
    console.log(AnimeIndex);
}

function nextAnime() {
    AnimeIndex++; 

    if(AnimeIndex > AnimeCovers.length - 1) {
        AnimeIndex = 0;
    }

    CoverImg();
    console.log(AnimeIndex);
}

nextBtn.addEventListener('click',() => {
    nextAnime();
});
prevBtn.addEventListener('click',() => {
    prevAnime();
});

setInterval(nextAnime,3500);

const InputStyle = getComputedStyle(InputSearch);
console.log(InputStyle);

function White() {
    ThePage.classList.remove('Dark');
    document.body.style.backgroundImage = "url('./image/back.jpeg')";
    Dark_light.src = './image/sun.png';
    Texts.forEach((text) => {
        text.style.color = 'black';
    });
    Images.forEach((image) => {
        image.style.border = '1px solid black'
    })
    InputSearch.classList.add('Inputwm');

    PageTravel.forEach(num => {
        num.style.border = '1px solid black';
        num.addEventListener('onmouseover',(nu) => {
            nu.style.background = 'rgba(255, 68, 0, 0.911)';
        })
    });
    Contact.style.background = 'black';
    InputEmail.style.background = 'white';
    InputEmail.style.color = 'black';
    paragraph.style.color = 'white';
}

function Black() {
    ThePage.classList.add('Dark');
    document.body.style.background = 'black';
    Dark_light.src = './image/moon.png';
    Texts.forEach((text) => {
        text.style.color = 'white';
    })

    InputSearch.classList.remove('Inputwm');

    Contact.style.background = 'white';
    InputEmail.style.background = 'black';
    InputEmail.style.color = 'white';
    paragraph.style.color = 'black';
}

const Dark_light = document.querySelector('.DL');
const ThePage = document.querySelector('.ThePage');
Dark_light.addEventListener('click',() => {
    const isLight = ThePage.classList.contains('Dark');
    if(isLight) {
        White();
    }else {
        Black();
    }
})

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const Alert = document.getElementById('alert');
const InputValue = InputEmail.value;

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const msg = "Enter an email adress";
    const text = "Thanks for joining us!!";

    if(!InputValue) {
        Alert.innerHTML = msg;

        setTimeout(function() {
            Alert.innerHTML = "";
        },2000)

    }else if(InputValue) {
        Alert.innerHTML = text;
        InputValue = "";
    }
})