import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import AuthLoading from "../../js/components/AuthLoading";
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
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
