import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../../screens/AuthScreens/LoginScreen/LoginScreen';
import {
    createDefaultNavigationOptions,
    removeHeader,
} from 'food-track-common/utils/navigationUtils';
import theme from 'food-track-common/theme/theme';
import ActivationCodeScreen from "food-track-common/screens/LoginScreens/ActivationCodeScreen";

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: removeHeader(),
        },
        // Start: {
        //     screen: StartScreen,
        //     navigationOptions: removeHeader(),
        // },
        Sms: {
            screen: ActivationCodeScreen,
            navigationOptions: ({navigation}) => createDefaultNavigationOptions({
                    bg: theme.colors.white,
                },
                false,
                () => navigation.navigate('Dashboard'),
                false
            ),
        },
        // Registration: {
        //     screen: RegistrationStack,
        //     navigationOptions: removeHeader(),
        // },
    },
    {
        initialRouteName: 'Login',
    },
);
export default AuthStack;
