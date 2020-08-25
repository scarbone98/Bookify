/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Home, Splash, Profile, Book} from './views';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

const BookNavigator = createStackNavigator(
    {
        'Book': {screen: Book}
    },
    {initialRouteName: 'Book'}
)

const HomeNavigator = createStackNavigator(
    {
        'Home': {
            screen: Home,
            navigationOptions: ({navigation}) => {
                return {
                    headerShown: false
                }
            }

        },
        'Book': {screen: BookNavigator}
    },
    {initialRouteName: 'Home'}
)

const ProfileNavigator = createStackNavigator(
    {
        'Profile': {
            screen: Profile,
            navigationOptions: ({navigation}) => {
                return {
                    headerShown: false
                }
            }
        },
        'Book': {screen: BookNavigator}
    },
    {initialRouteName: 'Profile'}
)

const DrawerNavigation = createDrawerNavigator(
    {
        Home: {
            navigationOptions: {
                drawerLabel: 'Home'
            },
            screen: HomeNavigator
        },
        Profile: {
            navigationOptions: {
                drawerLabel: 'Profile'
            },
            screen: ProfileNavigator
        }
    },
    {
        initialRouteName: 'Home'
    }
)

const SwitchNavigator = createSwitchNavigator(
    {
        'Splash': {screen: Splash},
        'Drawer': {screen: DrawerNavigation}
    },
    {initialRouteName: 'Splash'}
)

const Navigator = createAppContainer(SwitchNavigator);


export default Navigator;
