import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import DiscoverScreen from '../screens/Discover';
import ShareScreen from '../screens/Share';
import ProfileScreen from '../screens/Profile';

const DiscoverStack = createStackNavigator({
  Discover: DiscoverScreen
});

const ShareStack = createStackNavigator({
  Share: ShareScreen
});

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

export default createBottomTabNavigator(
  {
    Discover: DiscoverStack,
    Share: ShareStack,
    Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: '#000000',
        inactiveTintColor: '#000000',
        labelStyle: {
          fontSize: 10
        },
        style: {
          backgroundColor: '#ffffff',
          color: 'red'
        }
      }
    })
  }
);
