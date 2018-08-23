import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: '분석',
    tabBarIcon: (data: any) => {
        return <Ionicons name={Platform.OS === 'ios' ? 'ios-search':'md-search'} size={25} color={data.tintColor} />;
    },
};

const LinksStack = createStackNavigator({
    Links: LinksScreen,
});

LinksStack.navigationOptions = {
    tabBarLabel: '추천',
    tabBarIcon: (data: any) => {
        return <Ionicons name={Platform.OS === 'ios' ? 'ios-thumbs-up':'md-thumbs-up'} size={25} color={data.tintColor} />;
    },    
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: '설정',
    tabBarIcon: (data: any) => {
        return <Ionicons name={Platform.OS === 'ios' ? 'ios-settings':'md-settings'} size={25} color={data.tintColor} />;
    },    
};

export default createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack,
});
