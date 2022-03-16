import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from "./Screens/RegisterScreen";
import {createStackNavigator} from "react-navigation-stack";
import React from 'react';

/*const AppContainer = createStackNavigator(
    {
      default: createBottomTabNavigator(
          {
            Home: {
              screen: HomeScreen,
              navigationOptions: {
                  tabBarIcon: ({tintColor}) => <Ionicons name='ios-home' size={24} color={tintColor} />
              }
            },


          }
      )
    }
)
*/

const AuthStack = createStackNavigator( {
    Login: LoginScreen,
    Register: RegisterScreen
})
export default createAppContainer(
    createSwitchNavigator(
        {
          Auth: AuthStack
        },
        {
          initialRouteName: "Auth"
        }
    )
)
