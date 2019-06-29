import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import AuthLoading from "../../js/components/AuthLoading";
import Login from "../../js/screens/Login";
import NavigationLayout from "./NavigationLayout";
import RecipeModal from "../components/RecipeModal";
import ReviewModal from "../components/ReviewModal";

const AppStack = createStackNavigator(
  {
    Layout: NavigationLayout,
    RecipeModal: RecipeModal,
    ReviewModal: ReviewModal
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator({Login: Login});
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
