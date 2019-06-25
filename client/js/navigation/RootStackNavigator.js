import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import AuthLoadingScreen from "../../js/components/AuthLoading/AuthLoading";
import LoginScreen from "../../js/screens/Login";

import NavigationLayout from "./NavigationLayout";

const AppStack = createStackNavigator(
  {
    Layout: NavigationLayout
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator({Login: LoginScreen});
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
