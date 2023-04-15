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
    const audioElement = new Audio('./sound/rain.wav');
    const thunderElement = new Audio('./sound/thunder.wav');

    const playAudio = (audio) => {
        audio.play();
        audio.loop = true;
    };

    const playThunder = () => {
        playAudio(thunderElement);
        const delay = Math.floor(Math.random() * 25000) + 5000;
        setTimeout(playThunder, delay);
    };

    playThunder();

    // Створюємо кнопку
    const button = document.createElement('button');
    button.textContent = 'Toggle Sound';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.left = '10px';

    // Додаємо обробник кліку на кнопку
    button.addEventListener('click', () => {
        if (audioElement.paused) {
            playAudio(audioElement);
            playAudio(thunderElement);
        } else {
            audioElement.pause();
            thunderElement.pause();
        }
    });

    // Додаємо кнопку на сторінку
    document.body.appendChild(button);
}

function windowLoad() {
    rain();
    addRainSound();
}

window.addEventListener('load', windowLoad);
