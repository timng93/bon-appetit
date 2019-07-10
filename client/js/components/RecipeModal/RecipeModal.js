import React, {Component} from "react";
import {View, Text, Button, Image} from "react-native";
import {withNavigation} from "react-navigation";
import PropTypes from "prop-types";
import styles from "./styles";
import Loader from "../Loader";
import {Query} from "react-apollo";
import {GET_REVIEWS_FOR_RECIPE} from "../../apollo/queries";

class RecipeModal extends Component {
  render() {
    const {navigation} = this.props;
    const recipe = navigation.getParam("recipe");
    const image = navigation.getParam("image");
    console.log(recipe);
    return (
      <Query query={GET_REVIEWS_FOR_RECIPE} variables={{id: recipe.id}}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return console.log(error);
          console.log(data);
          return (
            <View style={styles.container}>
              <View style={styles.close}>
                <View style={styles.flex}>
                  <Button onPress={() => navigation.goBack()} title="Dismiss" />
                  <Text style={styles.title}>{recipe.title}</Text>
                  <Image style={styles.image} source={image[recipe.title]} />
                  <Text style={styles.title}>{recipe.description}</Text>
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
        }}
      </Query>
    );
  }
}

RecipeModal.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default withNavigation(RecipeModal);
