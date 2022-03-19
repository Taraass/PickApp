import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";


import LoadingScreen from "./Screens/LoadingScreen";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import PostScreen from "./Screens/PostScreen";


import React from "react";

const AppContainer = createStackNavigator(
    {
        default: createBottomTabNavigator(
            {
                Home: {
                    screen: HomeScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
                    }
                },

                Post: {
                    screen: PostScreen,
                    navigationOptions: {
                        tabBarIcon: ({tintColor}) => <Ionicons name="ios-add-circle" size={36} color={tintColor}/>
                    }
                },
                Profile: {
                    screen: ProfileScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />
                    }
                }
            },
            {
                tabBarOptions: {
                    activeTintColor: "#2c3a6b",
                    inactiveTintColor: "#B8BBC4",
                    showLabel: true
                }
            }
        ),
    },
    {
        headerMode: "none"
    }
);

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppContainer,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);