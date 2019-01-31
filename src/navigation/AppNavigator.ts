import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers';
import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore,} from 'redux';
import {connect} from 'react-redux';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from '../observable'
import Router from './Router';
import appReducer from '../reducers';

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});
const middleware = createReactNavigationReduxMiddleware(
    // @ts-ignore
    "root", state => state.nav
);

const App = reduxifyNavigator(Router, "root");
const mapStateToProps = (state: any) => ({
    state: state.nav,
});

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
    appReducer,
    applyMiddleware(loggerMiddleware, epicMiddleware)
);
epicMiddleware.run(rootEpic)


// @ts-ignore
const AppNavigator = connect(mapStateToProps)(App);
export default AppNavigator