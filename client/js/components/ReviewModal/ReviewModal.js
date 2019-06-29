import React from "react";
import {View, Text, Button, Image} from "react-native";
import {withNavigation} from "react-navigation";
import PropTypes from "prop-types";
import styles from "./styles";



const ReviewModal = ({navigation}) => {
  //   const recipe = navigation.getParam("recipe");
  //   const image = navigation.getParam("image");

  //   console.log(recipe);
  return (
    <View style={styles.container}>
      <View style={styles.close}>
        <View style={styles.flex}>
          <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
      </View>
    </View>
  );
};
ReviewModal.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default withNavigation(ReviewModal);
