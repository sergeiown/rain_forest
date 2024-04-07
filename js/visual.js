'use strict';

export default function addRain() {
    const rainContainer = document.querySelector('.rain');
    let drops = '';

    for (let index = 0; index < 100; index++) {
        const randomAnimate = Math.floor(Math.random() * 98 + 2);
        const randomBottom = Math.floor(Math.random() * 38 + 2);

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
