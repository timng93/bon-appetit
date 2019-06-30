import {createStackNavigator, createBottomTabNavigator} from "react-navigation";

import DiscoverScreen from "../screens/Discover";
import FavesScreen from "../screens/Faves";
import ProfileScreen from "../screens/Profile";

const DiscoverStack = createStackNavigator({
  Discover: DiscoverScreen
});

const FavesStack = createStackNavigator({
  Faves: FavesScreen
});

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

export default createBottomTabNavigator(
  {
    Discover: DiscoverStack,
    Faves: FavesStack,
    Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarOptions: {
        activeTintColor: "#000000",
        inactiveTintColor: "#000000",
        labelStyle: {
          fontSize: 10
        },
        style: {
          backgroundColor: "#ffffff",
          color: "red"
        }
      }
    })
  }
);
