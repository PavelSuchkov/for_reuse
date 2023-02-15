import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import AppStack from './AppStack/AppStack';
import AuthStack from './AuthStack/AuthStack';
import LoadingScreen from '../screens/LoadingScreen/LoadingScreen';

const AppNavigation = createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'Loading',
        },
    ),
);

export default AppNavigation;
