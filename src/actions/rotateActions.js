import {
    START_ROTATING,
    STOP_ROTATING
} from '../constants/actionConstants'

const generateSpinAction = spin => {
    return spin
    ? {
        type: START_ROTATING,
        payload: true
    }
    : {   
        type: STOP_ROTATING,
        payload: false
    }
}

export default generateSpinAction;