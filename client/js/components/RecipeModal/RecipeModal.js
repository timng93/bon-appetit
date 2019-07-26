import React from "react";
import {View, Text, Button, Image} from "react-native";
import {withNavigation} from "react-navigation";
import PropTypes from "prop-types";
import styles from "./styles";

const RecipeModal = ({navigation}) => {
  const recipe = navigation.getParam("recipe");
  const image = navigation.getParam("image");
  const allRatings = recipe.reviews.map(review => review.rating);
  const averageRating = allRatings.reduce(
    (a, b) => (a + b) / allRatings.length
  );
  return (
    <View style={styles.container}>
      <View style={styles.close}>
        <View style={styles.flex}>
          <Button onPress={() => navigation.goBack()} title="Dismiss" />
          <Text style={styles.title}>{recipe.title}</Text>
          <Image style={styles.image} source={image[recipe.title]} />
          <Text style={styles.title}>{recipe.description}</Text>
          <Text style={styles.rating}>Rating: {averageRating}</Text>
          <Button
            onPress={() =>
              navigation.navigate("ReviewModal", {
                recipeData: recipe
              })
            }
            title="Add a Review"
          />
        </View>
      </View>
    </View>
  );
};
RecipeModal.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default withNavigation(RecipeModal);
