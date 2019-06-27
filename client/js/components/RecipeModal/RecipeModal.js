import React from "react";
import {View, Text, Button} from "react-native";
import {withNavigation} from "react-navigation";
import PropTypes from "prop-types";
import styles from "./styles";

const RecipeModal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
        <Text style={styles.title}>This is the recipe modal</Text>
      </View>
    </View>
  );
};
RecipeModal.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default withNavigation(RecipeModal);
