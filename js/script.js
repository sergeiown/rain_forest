'use strict';

function rain() {
    const rainContainer = document.querySelector('.rain');
    let drops = '';

    for (let index = 0; index < 100; index++) {
        const randomAnimate = Math.floor(Math.random() * 98 + 2);
        const randomBottom = Math.floor(Math.random() * 4 + 2);

        drops += `
            <div class="drop" style="
                left:${index}%;
                bottom:${randomBottom + 100}%;
                animation-delay: 0.${randomAnimate}s;
                animation-duration: 0.5${randomAnimate}s">
                <div class="stem" style="
                    animation-delay: 0.${randomAnimate}s;
                    animation-duration: 0.5${randomAnimate}s">
                </div>
                <div class="splat" style="
                    animation-delay: 0.${randomAnimate}s;
                    animation-duration: 0.5${randomAnimate}s">
                </div>
            </div>`;
    }

    rainContainer.innerHTML = drops;
}

function addRainSound() {
    const audioElement = new Audio('https://zvukipro.com/index.php?do=download&id=11782');
    const thunderElement = new Audio('https://zvukipro.com/index.php?do=download&id=792');
    let thunderTimeoutId;

    const playAudio = (audio) => {
        audio.play();
        audio.loop = true;
    };

    const playThunder = (audio) => {
        audio.play();
        audio.loop = false;
        clearTimeout(thunderTimeoutId);
        delayThunder(audio);
    };

    const delayThunder = (audio) => {
        const delay = Math.floor(Math.random() * 25000) + 10000;
        thunderTimeoutId = setTimeout(() => playThunder(audio), delay);
        console.log(`Next thunder at ${Math.round(delay / 1000, 0)} seconds`);
    };

    const button = document.createElement('button');
    button.textContent = '🔇';
    button.style.fontSize = '3rem';
    button.style.opacity = '0.4';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.left = '10px';

    button.addEventListener('click', () => {
        if (audioElement.paused) {
            playAudio(audioElement);
            delayThunder(thunderElement);
            button.textContent = '🔊';
        } else {
            audioElement.pause();
            thunderElement.pause();
            button.textContent = '🔇';
            clearTimeout(thunderTimeoutId);
        }
    });

    document.body.appendChild(button);
}

function windowLoad() {
    rain();
    addRainSound();
}

window.addEventListener('load', windowLoad);
