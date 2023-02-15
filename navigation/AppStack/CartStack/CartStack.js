import {createStackNavigator} from 'react-navigation-stack';
import CartScreen from '../../../screens/AppScreens/CartScreens/CartScreen/CartScreen';
import CartOrderDetailsScreen
    from '../../../screens/AppScreens/CartScreens/CartOrderDetailsScreen/CartOrderDetailsScreen';
import {
    createDefaultNavigationOptions,
    baseHeader,
} from 'food-track-common/utils/navigationUtils';

const CartStack = createStackNavigator(
    {
        Cart: {
            screen: CartScreen,
            navigationOptions: createDefaultNavigationOptions(
                {
                    ...baseHeader,
                    bg: '#52C7B2',
                    titleColor: '#fff',
                    title: 'Корзина',
                    textAlign: 'left',
                },
                true,
            ),
        },
        CartOrderDetails: {
            screen: CartOrderDetailsScreen,
            navigationOptions: createDefaultNavigationOptions({
                ...baseHeader,
                bg: '#52C7B2',
                titleColor: '#fff',
                title: 'Новый заказ',
                textAlign: 'center',
            }),
        },
    },
    {
        initialRouteName: 'Cart',
    },
);

export default CartStack;
