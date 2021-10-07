import './style.css'

// random circle generator
// taken from MDN - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#why_bother
const newCanvasButton = document.getElementById('newCanvas');
const themeSwitchButton = document.getElementById('themeSwitchButton')
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let WIDTH = 800;
let HEIGHT = 800;
canvas.width = WIDTH;
canvas.height = HEIGHT;

newCanvasButton.addEventListener('click', draw)
themeSwitchButton.addEventListener('click', switchTheme)

function draw() {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for (let i = 0; i < 220; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(64,99,67,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
    }
}

function switchTheme() { 
    document.body.classList.toggle('dark-mode')
}

function random(number) {
    return Math.floor(Math.random()*number);
}