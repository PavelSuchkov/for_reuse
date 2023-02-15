import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../../../screens/AppScreens/CatalogScreens/CategoriesScreen/CategoriesScreen';
import ProductsScreen from '../../../screens/AppScreens/CatalogScreens/ProductsScreen/ProductsScreen';
import FiltersScreen from '../../../screens/AppScreens/CatalogScreens/FiltersScreen/FiltersScreen';
import SingleProductScreen from '../../../screens/AppScreens/CatalogScreens/SingleProductScreen/SingleProductScreen';
import SupplierProductScreen
    from '../../../screens/AppScreens/CatalogScreens/SupplierProductScreen/SupplierProductScreen';
import SupplierProductImagesScreen
    from '../../../screens/AppScreens/CatalogScreens/SupplierProductImagesScreen/SupplierProductImagesScreen';
import {
    removeHeader,
    createDefaultNavigationOptions,
    baseHeader, primaryHeader,
} from 'food-track-common/utils/navigationUtils';
import {uppercaseFirstLetter} from 'food-track-common/utils/commonUtils';
import CompanyScreen from "food-track-common/screens/CompaniesScreens/CompanyScreen/CompanyScreen";
import ReviewsScreen from "food-track-common/screens/CompaniesScreens/ReviewsScreen/ReviewsScreen";

const CatalogStack = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: ({navigation}) => {
                const data = navigation.getParam('data');
                const title = data ? data.title : 'Каталог';
                const isFirstRoute = navigation.isFirstRouteInParent();
                const isSearchPrevRoute = navigation.getParam('isSearchPrevRoute');
                const setIsOpenSearch = navigation.getParam('setIsOpenSearch');
                const goBackFunc = () => {
                    if (isSearchPrevRoute) {
                        setIsOpenSearch(true);
                        navigation.goBack();
                    } else {
                        navigation.goBack()
                    }
                }
                return createDefaultNavigationOptions(
                    {
                        ...primaryHeader,
                        // bg: '#52C7B2',
                        titleColor: '#fff',
                        title: uppercaseFirstLetter(title),
                    },
                    isFirstRoute,
                    goBackFunc
                );
            },
        },
        Products: {
            screen: ProductsScreen,
            navigationOptions: ({navigation}) => {
                const category = navigation.getParam('category');
                const title = category ? category?.title : '';
                const isSearchPrevRoute = navigation.getParam('isSearchPrevRoute');
                const setIsOpenSearch = navigation.getParam('setIsOpenSearch');
                const goBackFunc = () => {
                    if (isSearchPrevRoute) {
                        setIsOpenSearch(true);
                        navigation.goBack();
                    } else {
                        navigation.goBack()
                    }
                }
                return createDefaultNavigationOptions({
                        ...primaryHeader,
                        // bg: '#52C7B2',
                        titleColor: '#fff',
                        title: uppercaseFirstLetter(title),
                    },
                    false,
                    goBackFunc
                );
            },
        },
        SingleProduct: {
            screen: SingleProductScreen,
            navigationOptions: removeHeader(),
        },
        Filters: {
            screen: FiltersScreen,
            navigationOptions: createDefaultNavigationOptions({
                ...primaryHeader,
                title: ' ',
            }),
        },
        SupplierProduct: {
            screen: SupplierProductScreen,
            navigationOptions: removeHeader(),
        },
        SupplierProductImages: {
            screen: SupplierProductImagesScreen,
            navigationOptions: removeHeader(),
        },
        CatalogCompany: {
            screen: CompanyScreen,
            navigationOptions: () => {
                return createDefaultNavigationOptions({
                        ...primaryHeader,
                        title: " ",
                    }
                )
            },
        },
        ReviewsCompany: {
            screen: ReviewsScreen,
            navigationOptions: createDefaultNavigationOptions({
                ...primaryHeader,
                title: 'Отзывы',
            }),
        },
    },
    {
        initialRouteName: 'Categories',
        // defaultNavigationOptions: {
        //   header: () => <SearchHeader />,
        // },
    },
);

export default CatalogStack;
