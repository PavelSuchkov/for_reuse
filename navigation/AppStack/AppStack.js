import React, {useContext, useEffect, useState} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DashboardStack from './DashboardStack/DashboardStack';
import CatalogStack from './CatalogStack/CatalogStack';
import AccountStack from './AccountStack/AccountStack';
import OrdersStack from './OrdersStack/OrdersStack';
import CartStack from './CartStack/CartStack';
import Icon from "react-native-vector-icons/FontAwesome5";
import {observer, MobXProviderContext} from 'mobx-react';
import {View, Text} from 'react-native';
import {h_normalize, w_normalize} from "food-track-common/utils/normalizeSize";


const BADGE = {
    minWidth: w_normalize(20),
    minHeight: w_normalize(20),
    paddingHorizontal: w_normalize(4),
    backgroundColor: '#ff5588',
    borderRadius: 50,
    position: 'absolute',
    top: h_normalize(-12),
    right: w_normalize(5),
    justifyContent: 'center',
    alignItems: 'center'
};
const GetIcon = observer(({name, isNotifications = false, icon, tintColor}) => {
    const {
        notificationsStore,
        notificationsStore: {notifications, badges},
        userStore: {isLoggedUser},
        cartStore: {cartOrders, cartBadgeCount, }
    } = useContext(MobXProviderContext);

    const [cart, setCart] = useState(0)

    useEffect(() => {
        if(isLoggedUser) {
           badges.cart !== undefined && setCart(badges.cart.count)
        }
    }, [isLoggedUser])

    useEffect(() => {
        setCart(cartBadgeCount)
    }, [cartBadgeCount, isLoggedUser])

    const counts = {
        dash: badges.count,
        cart: cart
        // cart: badges.cart.count
        // cart: 0
    }
    return (
        <>
            <Icon name={icon} color={tintColor} size={w_normalize(16)}/>
            {
                isNotifications && counts[name] > 0 && isLoggedUser &&
                <View style={BADGE}>
                    <Text style={{fontSize: h_normalize(12), color: '#fff'}}>
                        {counts[name]}
                    </Text>
                </View>
            }
        </>
    );
});
const AppStack = createBottomTabNavigator(
    {
        Dashboard: {
            screen: DashboardStack,
            navigationOptions: () => ({
                tabBarLabel: 'Главная',
                tabBarIcon: ({tintColor}) => {
                    return <GetIcon isNotifications={true}
                                    icon={'th-large'}
                                    tintColor={tintColor}
                                    name='dash'
                    />
                },
            }),
        },
        Catalog: {
            screen: CatalogStack,
            navigationOptions: () => ({
                tabBarLabel: 'Каталог',
                tabBarIcon: ({tintColor}) => {
                    return <GetIcon icon={'search'}
                                    tintColor={tintColor}
                                    name='catalog'
                    />
                },
            }),
        },
        Cart: {
            screen: CartStack,
            navigationOptions: () => ({
                tabBarLabel: 'Корзина',
                tabBarIcon: ({tintColor}) => {
                    return <GetIcon isNotifications={true}
                                    icon={'shopping-cart'}
                                    tintColor={tintColor}
                                    name='cart'
                    />
                },
            }),
        },
        Orders: {
            screen: OrdersStack,
            navigationOptions: () => ({
                tabBarLabel: 'Заказы',
                tabBarIcon: ({tintColor}) => {
                    return <GetIcon icon={'carrot'}
                                    tintColor={tintColor}
                                    name='order'
                    />
                },
            }),
        },
        Account: {
            screen: AccountStack,
            navigationOptions: () => ({
                tabBarLabel: 'Профиль',
                tabBarIcon: ({tintColor}) => {
                    return <GetIcon icon={'user-alt'}
                                    tintColor={tintColor}
                                    name='profile'
                    />
                },
            }),
        },
    },
    {
        initialRouteName: 'Dashboard',
        tabBarOptions: {
            activeTintColor: '#52C7B2',
            inactiveTintColor: '#B4BBC2',
            style: {
                padding: h_normalize(5),
            },
        },
    },
);

export default AppStack;
