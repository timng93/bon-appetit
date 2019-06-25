import React from "react";
import {ActivityIndicator, StatusBar, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("token");

    this.props.navigation.navigate(userToken ? "Discover" : "Auth");
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
