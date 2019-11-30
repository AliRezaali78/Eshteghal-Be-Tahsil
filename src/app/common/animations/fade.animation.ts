import { transition, style, state, trigger, animate, animation, useAnimation } from '@angular/animations';

export let fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate('{{ duration }} {{ easing }}', style({ opacity: 1 }))
], {
    params: {
        duration: '0.5s',
        easing: 'linear'
    }
});

export let fadeOutAnimation = animation([
    style({ opacity: 1 }),
    animate('{{ duration }} {{ easing }}', style({ opacity: 0 }))
], {
    params: {
        duration: '0.5s',
        easing: 'linear'
    }
});

export let fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        useAnimation(fadeInAnimation)
    ]),
    transition(':leave', [
        useAnimation(fadeOutAnimation)
    ])
]);

export let fadeIn = trigger('fadeIn', [
    transition(':enter', [
        useAnimation(fadeInAnimation)
    ])
]);


export let fadeOut = trigger('fadeOut', [
    transition(':leave', [
        useAnimation(fadeOutAnimation)
    ])
])