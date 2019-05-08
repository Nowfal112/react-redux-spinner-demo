import {
    START_ROTATING,
    STOP_ROTATING
} from '../constants/actionConstants';

 const toggleSpinning = (state = 'true', { type }) => {
    switch (type) {
        case STOP_ROTATING:
            return Object.assign({}, {
                spin: false,
                btnText: 'Unfreeze'
            });
        case START_ROTATING:
        default:
            return Object.assign({}, {
                spin: state,
                btnText: 'Freeze'
            })
    }
};

export default toggleSpinning;