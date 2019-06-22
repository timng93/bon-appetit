import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

export default createBottomTabNavigator(
  {
    Home: HomeStack,
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
