'use strict';

import addRain from './visual.js';
import addRainSound from './sound.js';

function windowLoad() {
    addRain();
    addRainSound();
}

window.addEventListener('load', windowLoad);
