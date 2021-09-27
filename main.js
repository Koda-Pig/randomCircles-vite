import './style.css'

// random circle generator
// taken from MDN - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#why_bother
const btn = document.getElementById('newCanvas');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// let WIDTH = document.documentElement.clientWidth;
// let HEIGHT = document.documentElement.clientHeight;
let WIDTH = 800;
let HEIGHT = 800;
canvas.width = WIDTH;
canvas.height = HEIGHT;
function random(number) {
    return Math.floor(Math.random()*number);
}
function draw() {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for (let i = 0; i < 220; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(64,99,67,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
    }
}
btn.addEventListener('click',draw);

// theme switcher
function switchTheme() {
    var element = document.body;
    element.classList.toggle('dark-mode');
}