import {
    SPEED_UP,
    SLOW_DOWN
} from '../constants/actionConstants';

export const fasterAnimation = speed => ({
    type: SPEED_UP,
    animationSpeed: speed <= 2 ? 1 : speed-2
    })

export const slowerAnimation = speed => ({
    type: SLOW_DOWN,
    animationSpeed: speed >= 10 ? 10 : speed+2
    });
