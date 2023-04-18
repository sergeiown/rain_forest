'use strict';

export default function addRainSound() {
    const rainElement = new Audio('../assets/sound/rain.mp3');
    const thunderElement = new Audio('../assets/sound/thunder.mp3');
    let thunderTimeoutId;

    const playRain = (audio) => {
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

    if (rainElement && thunderElement) {
        const button = document.createElement('button');
        button.textContent = '🔇';
        button.style.fontSize = '3rem';
        button.title = 'Turn on sound';
        button.style.backgroundColor = 'transparent';
        button.style.opacity = '0.75';
        button.style.position = 'fixed';
        button.style.top = '10px';
        button.style.left = '10px';

        button.addEventListener('click', () => {
            if (rainElement.paused) {
                playRain(rainElement);
                delayThunder(thunderElement);
                button.textContent = '🔊';
                button.title = 'Turn off sound';
            } else {
                rainElement.pause();
                thunderElement.pause();
                button.textContent = '🔇';
                button.title = 'Turn on sound';
                clearTimeout(thunderTimeoutId);
            }
        });

        document.body.appendChild(button);
    }
}
