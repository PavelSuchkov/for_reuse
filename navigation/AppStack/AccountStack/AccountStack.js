import {createStackNavigator} from 'react-navigation-stack';
import React from "react";
import AccountScreen from '../../../screens/AppScreens/AccountScreens/AccountScreen/AccountScreen';
import CompaniesStack from './stacks/CompaniesStack';
import SettingsScreen
    from '../../../screens/AppScreens/AccountScreens/SettingsScreens/AllSettingsScreen/AllSettingsScreen';

import {
    createDefaultNavigationOptions,
    primaryHeader,
} from 'food-track-common/utils/navigationUtils';
import NewCompanyFormScreen from 'food-track-common/screens/CompaniesScreens/NewCompanyFormScreen/NewCompanyFormScreen';
import CompanyScreen from 'food-track-common/screens/CompaniesScreens/CompanyScreen/CompanyScreen';
import CompanyEditScreen from 'food-track-common/screens/CompaniesScreens/CompanyEditScreen/CompanyEditScreen';
import CreateAddressScreen from 'food-track-common/screens/CompaniesScreens/CreateAddressScreen/CreateAddressScreen';
import EditAddressScreen from 'food-track-common/screens/CompaniesScreens/EditAddressScreen/EditAddressScreen';
import ReviewsScreen from 'food-track-common/screens/CompaniesScreens/ReviewsScreen/ReviewsScreen';

const AccountStack = createStackNavigator(
    {
        Account: {
            screen: AccountScreen,
            navigationOptions: createDefaultNavigationOptions(
                {...primaryHeader, title: 'Профиль'},
                true,
            ),
        },
        Companies: {
            screen: CompaniesStack,
            navigationOptions: createDefaultNavigationOptions({
                ...primaryHeader,
                title: 'Мои компании',
            }),
        },
        AllSettings: {
            screen: SettingsScreen,
            navigationOptions: createDefaultNavigationOptions({
                ...primaryHeader,
                title: 'Настройки',
            }),
        },
        NewCompany: {
            screen: NewCompanyFormScreen,
            navigationOptions: createDefaultNavigationOptions({
                ...primaryHeader,
                title: 'Новое заведение',
            }),
        },
        Company: {
            screen: CompanyScreen,
            navigationOptions: ({navigation}) => {
                const navigationParams = navigation.getParam('backRoute');
                const funcRoute = () => {
                    if (navigationParams) {
                        navigation.navigate(navigationParams)
                    } else {
                        navigation.goBack()
                    }
                };
                return createDefaultNavigationOptions({
                        ...primaryHeader,
                        title: " ",
                    },
                    false,
                    () => funcRoute(),
                    false
                )
            },
        },
        CompanyEdit: {
            screen: CompanyEditScreen,
            navigationOptions: createDefaultNavigationOptions({
                ...primaryHeader,
                title: 'Данные заведения',
            }),
        },
        CreateAddress: {
            screen: CreateAddressScreen,
            navigationOptions: createDefaultNavigationOptions({
                ...primaryHeader,
                title: ' ',
            }),
        },
        EditAddress: {
            screen: EditAddressScreen,
            navigationOptions: createDefaultNavigationOptions({
                ...primaryHeader,
                title: ' ',
            }),
        },
        Reviews: {
            screen: ReviewsScreen,
            navigationOptions: createDefaultNavigationOptions({
                ...primaryHeader,
                title: 'Отзывы',
            }),
        },
    },
    {
        initialRouteName: 'Account',
    },
);

export default AccountStack;
