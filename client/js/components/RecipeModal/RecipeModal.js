import React from "react";
import {View, Text, Button, Image} from "react-native";
import {withNavigation} from "react-navigation";
import PropTypes from "prop-types";
import styles from "./styles";

// const recipeImages = {
//   "Vietnamese Egg Rolls": require("../../assets/images/Recipes/spring-rolls.jpg")
// };

const RecipeModal = ({navigation}) => {
  const recipe = navigation.getParam("recipe");
  const image = navigation.getParam("image");

  console.log(recipe);
  return (
    <View style={styles.container}>
      <View style={styles.close}>
        <View style={styles.flex}>
          <Button onPress={() => navigation.goBack()} title="Dismiss" />
          <Text style={styles.title}>{recipe.title}</Text>
          <Image style={styles.image} source={image[recipe.title]} />
          <Text style={styles.title}>{recipe.description}</Text>
        </View>
      </View>
    </View>
  );
};
RecipeModal.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default withNavigation(RecipeModal);
