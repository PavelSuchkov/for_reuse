import { createStackNavigator } from 'react-navigation-stack';
import { removeHeader } from 'food-track-common/utils/navigationUtils';
import AllSettingsScreen from '../../../../screens/AppScreens/AccountScreens/SettingsScreens/AllSettingsScreen/AllSettingsScreen';

const SettingsStack = createStackNavigator(
  {
    AllSettings: {
      screen: AllSettingsScreen,
    },
  },
  {
    initialRouteName: 'AllSettings',
    defaultNavigationOptions: removeHeader(),
  },
);

export default SettingsStack;
