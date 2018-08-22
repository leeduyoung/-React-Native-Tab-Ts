import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    //   tabBarIcon: ({ focused }) => (
    //     <TabBarIcon
    //       focused={focused}
    //       name={
    //         Platform.OS === 'ios'
    //           ? `ios-information-circle${focused ? '' : '-outline'}`
    //           : 'md-information-circle'
    //       }
    //     />
    //   ),

    tabBarIcon: (data: any) => {
        // const { routeName } = "navigation.state";
        const routeName = 'Home';
        let iconName = '';

        if (routeName === 'Home') 
        {
            iconName = `ios-information-circle${data.focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Settings') 
        {
            iconName = `ios-options${data.focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={data.tintColor} />;
    },
};

const LinksStack = createStackNavigator({
    Links: LinksScreen,
});

LinksStack.navigationOptions = {
    tabBarLabel: 'Links',
    //   tabBarIcon: ({ focused }) => (
    //     <TabBarIcon
    //       focused={focused}
    //       name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    //     />
    //   ),
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    // tabBarIcon: ({ focused }) => (
    //     <TabBarIcon
    //         focused={focused}
    //         name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    //     />
    // ),
};

export default createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack,
});
