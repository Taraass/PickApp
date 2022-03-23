import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from "@expo/vector-icons";
import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./Screens/HomeScreen";
import LoadingScreen from "./Screens/LoadingScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import PostScreen from "./Screens/PostScreen";
import SearchScreen from "./Screens/SearchScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppContainer() {
    return (
    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
            options={{
                headerShown: false,
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-home' size={24} color={tintColor} />
        }} name="Home" component={HomeScreen}/>
        <Tab.Screen
            options={{
                headerShown: false,
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-add-circle" size={36} color={tintColor}/>
        }} name="Post" component={PostScreen}/>
        <Tab.Screen
            options={{
                headerShown: false,
                tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />
        }} name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
    )
}

function AuthContainer() {
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
            <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

function SwitchNavigator() {
    return (
    <Stack.Navigator options={{headerShown: false}} initialRouteName="Loading">
        <Stack.Screen options={{headerShown: false}} name="Loading" component={LoadingScreen} />
        <Stack.Screen options={{headerShown: false}} name="AppContainer"  component={AppContainer} />
        <Stack.Screen options={{headerShown: false}} name="AuthContainer" component={AuthContainer} />
        <Stack.Screen options={{headerShown: false}} name="Search" component={SearchScreen} />
    </Stack.Navigator>
    )
}
export default function App(){
    return (
        <NavigationContainer>
            <SwitchNavigator/>
        </NavigationContainer>
    )
}
