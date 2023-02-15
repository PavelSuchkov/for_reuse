import { createStackNavigator } from 'react-navigation-stack';
import AllCompaniesScreen from 'food-track-common/screens/CompaniesScreens/AllCompaniesScreen/AllCompaniesScreen';
import { removeHeader } from 'food-track-common/utils/navigationUtils';

const CompaniesStack = createStackNavigator(
  {
    AllCompanies: {
      screen: AllCompaniesScreen,
    },
  },
  {
    initialRouteName: 'AllCompanies',
    defaultNavigationOptions: removeHeader(),
  },
);

export default CompaniesStack;
