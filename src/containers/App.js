import { connect } from 'react-redux';
import generateSpinAction from '../actions/rotateActions';
import {fasterAnimation, slowerAnimation} from '../actions/animationActions'
import App from '../App';

const mapStateToProps = state => {
    return {
        spin: state.mainAction.spin,
        btnText: state.mainAction.btnText,
        animationSpeed: state.animationSpeed
    }
};

const mapDispatchToProps =  dispatch  => {
    return {
        onIconClick: spin => {
            dispatch(generateSpinAction(spin))},
        speedUpAnim: speed => dispatch(fasterAnimation(speed)),
        slowDownAnim: speed => dispatch(slowerAnimation(speed))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)