import '/style.css'

document.querySelector('#randomCirclesApp').innerHTML = `
<main>
<div class="container flex">
    <div class="nav">
        <h1>random circles</h1>
        <button id='newCanvas'>new canvas</button>
        <button id='themeSwitchButton' class='themeSwitch' onclick='switchTheme()'>
            <img src="https://joshkoter.com/wp-content/uploads/2021/09/themeSwitch.png" alt="switch theme" title='switch theme'>
        </button>
    </div>
    <a href='https://youtu.be/dQw4w9WgXcQ' title="don't click">
        <canvas></canvas>
    </a>
</div>
</main>
  `