import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import UserRegistrationScreen from 'food-track-common/screens/RegistrationStack/UserRegistrationScreen/UserRegistrationScreen';
import CompanyRegistrationScreen from 'food-track-common/screens/RegistrationStack/CompanyRegistrationScreen/CompanyRegistrationScreen';
import AddressRegistrationScreen from 'food-track-common/screens/RegistrationStack/AddressRegistrationScreen/AddressRegistrationScreen';
import {
  baseHeader,
  createDefaultNavigationOptions,
} from 'food-track-common/utils/navigationUtils';

const RegistrationStack = createStackNavigator(
  {
    UserRegistration: {
      screen: () => <UserRegistrationScreen companyType={'restaurant'} />,
      navigationOptions: ({ navigation }) =>
        createDefaultNavigationOptions(
          {
            ...baseHeader,
            title: 'Ваши данные',
          },
          false,
          () => navigation.navigate('Start'),
        ),
    },
    CompanyRegistration: {
      screen: CompanyRegistrationScreen,
      navigationOptions: () =>
        createDefaultNavigationOptions({
          ...baseHeader,
          title: 'Данные компании',
        }),
    },
    AddressRegistration: {
      screen: AddressRegistrationScreen,
      navigationOptions: () =>
        createDefaultNavigationOptions({
          ...baseHeader,
          title: 'Адрес заведения',
        }),
    },
  },
  {
    initialRouteName: 'UserRegistration',
  },
);

export default RegistrationStack;
