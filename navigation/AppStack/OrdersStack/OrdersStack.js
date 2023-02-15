import { createStackNavigator } from 'react-navigation-stack';
import AllOrdersScreen from '../../../screens/AppScreens/OrdersScreens/AllOrdersScreen/AllOrdersScreen';
import OrderScreen from '../../../screens/AppScreens/OrdersScreens/OrderScreen/OrderScreen';
import DeliveryOffersScreen from '../../../screens/AppScreens/OrdersScreens/DeliveryOffersScreen/DeliveryOffersScreen';
import SingleOfferScreen from '../../../screens/AppScreens/OrdersScreens/SingleOfferScreen/SingleOfferScreen';

import {
  createDefaultNavigationOptions,
  baseHeader,
  primaryHeader,
} from 'food-track-common/utils/navigationUtils';
import CompaniesStack from "../AccountStack/stacks/CompaniesStack";
import CompanyScreen from "food-track-common/screens/CompaniesScreens/CompanyScreen/CompanyScreen";
import ReviewsScreen from "food-track-common/screens/CompaniesScreens/ReviewsScreen/ReviewsScreen";

const OrdersStack = createStackNavigator(
  {
    AllOrders: {
      screen: AllOrdersScreen,
      navigationOptions: ({ navigation }) =>
        createDefaultNavigationOptions(
          { ...primaryHeader, title: 'Заказы' },
          navigation.isFirstRouteInParent(),
        ),
    },
    Order: {
      screen: OrderScreen,
      navigationOptions: ({ navigation }) =>
        createDefaultNavigationOptions({
          ...primaryHeader,
          title: `Заказ № ${navigation.getParam('orderId')}`,
        }),
    },
    DeliveryOffers: {
      screen: DeliveryOffersScreen,
      navigationOptions: createDefaultNavigationOptions({
        ...primaryHeader,
        title: 'Предложения',
      }),
    },
    SingleOffer: {
      screen: SingleOfferScreen,
      navigationOptions: ({ navigation }) =>
        createDefaultNavigationOptions({
          ...primaryHeader,
          title: `Заказ № ${navigation.getParam('orderId')}`,
        }),
    },
      CompanyFromOrder: {
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
      OrderReviews: {
          screen: ReviewsScreen,
          navigationOptions: createDefaultNavigationOptions({
              ...primaryHeader,
              title: 'Отзывы',
          }),
      },
  },
  {
    initialRouteName: 'AllOrders',
  },
);

export default OrdersStack;
