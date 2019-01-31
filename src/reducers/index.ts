import {
    combineReducers
} from 'redux';
import nav from './NavReducer';
import demo from './DemoReducer'
const reducer = combineReducers({
    nav,
    demo
});

const appReducer = (state: any, action: any) => {
    return reducer(state, action);
};

export default appReducer;