import {createStackNavigator} from 'react-navigation-stack';
import {
    createDefaultNavigationOptions,
    primaryHeader,
    removeHeader,
} from 'food-track-common/utils/navigationUtils';
import DashboardScreen from "food-track-common/screens/DashboardScreen/DashboardScreen";
import ReviewsScreen from "food-track-common/screens/CompaniesScreens/ReviewsScreen/ReviewsScreen";
import OrderScreen from "../../../screens/AppScreens/OrdersScreens/OrderScreen/OrderScreen";
import CompanyScreen from "food-track-common/screens/CompaniesScreens/CompanyScreen/CompanyScreen";

const DashboardStack = createStackNavigator(
    {
        Dashboard: {
            screen: DashboardScreen,
            navigationOptions: ({navigation}) =>
                createDefaultNavigationOptions(
                    {
                        ...primaryHeader,
                        textAlign: 'left',
                        title: 'A-B Way покупатель'
                    },
                    navigation.isFirstRouteInParent(),
                ),
        },
        DashOrder: {
            screen: OrderScreen,
            navigationOptions: ({navigation}) => {
                return (
                    createDefaultNavigationOptions({
                            ...primaryHeader,
                            title: `Заказ № ${navigation.getParam('orderId')}`,
                        },
                    )
                )
            }
        },
        DashReviews: {
            screen: ReviewsScreen,
            navigationOptions: createDefaultNavigationOptions({
                ...primaryHeader,
                title: 'Отзывы',
            }),
        },
        DashCompany: {
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

    },
    {
        initialRouteName: 'Dashboard',
    },
);

export default DashboardStack;
