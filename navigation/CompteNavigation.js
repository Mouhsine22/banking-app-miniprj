import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createDrawerNavigator } from 'react-navigation-drawer'



import CompteScreen from '../screens/compte/CompteScreen';
import OperationScreen from '../screens/operation/OperationScreen';
import HeaderButton from '../components/UI/HeaderButton';
import Colors from '../constants/Colors';

const CompteNavigator = createStackNavigator(
    {
        compteOverview: CompteScreen
    }, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.accent
        }
    },
    headerTintColor: 'white'
}
);


const OperationNavigator = createStackNavigator({
    OperationOverview: OperationScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.accent
        }
    },
    headerTintColor: 'white'
});


const AppNavigator = createDrawerNavigator({
    MyAccount: CompteNavigator,
    Operations: OperationNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accent
    }
})


CompteScreen.navigationOptions = navData => {
    return {
        headerTitle: 'My Account',
        headerRight: () => <HeaderButtons HeaderButtons={HeaderButton}>
            <Item
                title='Menu'
                iconName="md-menu"
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    }


};

OperationScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Operations',
        headerRight: () => <HeaderButtons HeaderButtons={HeaderButton}>
            <Item
                title='Menu'
                iconName="md-menu"
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    }
};

export default createAppContainer(AppNavigator);