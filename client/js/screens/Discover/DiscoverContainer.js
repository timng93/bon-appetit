import React, {Component} from "react";
import {Query} from "react-apollo";
import {ALL_RECIPES_QUERY} from "../../apollo/queries";
import Loader from "../../components/Loader";
import Discover from "./Discover";

const recipeImages = {
  "Vietnamese Egg Rolls": require("../../assets/images/Recipes/spring-rolls.jpg")
};

export default class DiscoverContainer extends Component {
  render() {
    return (
      <Query query={ALL_RECIPES_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return console.log(error);
          return <Discover recipes={data.allRecipes} images={recipeImages} />;
        }}
      </Query>
    );
  }
}
