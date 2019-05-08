import {
    SPEED_UP,
    SLOW_DOWN
} from '../constants/actionConstants';

const animationAction = (speed = 10, { type, animationSpeed }) => {
    switch (type) {
        case SPEED_UP:
            return animationSpeed
        case SLOW_DOWN:
            return animationSpeed
        default:
            return speed;
    }
}

export default animationAction;