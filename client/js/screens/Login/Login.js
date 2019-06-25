import React from "react";
import {View, Text, Button} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import PropTypes from "prop-types";

import styles from "./styles";

class Login extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Login.</Text>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}

Login.propTypes = {};

export default Login;
