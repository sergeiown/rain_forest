'use strict';

import addRain from './visual.js';
import addRainSound from './sound.js';

function windowLoad() {
    addRain();
    addRainSound();
}

window.addEventListener('orientationchange', () => {
    location.reload();
});

window.addEventListener('load', windowLoad);
