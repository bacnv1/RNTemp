import Router from '../navigation/Router';
import {SCREEN_NAME} from "../const/Const";

const firstAction = Router.router.getActionForPathAndParams(SCREEN_NAME.Demo);
const initialNavState = Router.router.getStateForAction(firstAction!);

export default (state = initialNavState, action: any) => {
    const nextState = Router.router.getStateForAction(action, state);;
    return nextState || state;
};
