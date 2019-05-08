import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import rotateReducer from './reducers/rotateReducer';
import animationReducer from './reducers/animationReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
const allReducers = combineReducers({
    mainAction:rotateReducer,
    animationSpeed: animationReducer
})
const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())
const unsub = store.subscribe(() => {
    console.log(store.getState())
})

unsub();

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

