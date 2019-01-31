import { createStackNavigator } from 'react-navigation';
import DemoContainer from '../container/DemoContainer';
import {SCREEN_NAME} from "../const/Const";
// define list screen
const appNavigations = createStackNavigator({
    [SCREEN_NAME.Demo]: {
        screen: DemoContainer,
        navigationOptions: {
            header: null
        }
    },
});
export default appNavigations;