import React, {Component} from "react";
import {View, Text, Button, Image} from "react-native";
import {withNavigation} from "react-navigation";
import PropTypes from "prop-types";
import styles from "./styles";
import StarRating from "react-native-star-rating";
import {GET_REVIEWS_FOR_RECIPE} from "../../apollo/queries";

class ReviewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
      recipeId: null
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    const {navigation} = this.props;
    const recipeData = navigation.getParam("recipeData");
    console.log(recipeData);

    return (
      <View>
        <View style={styles.header} />
        <StarRating
          style={styles.container}
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={rating => this.onStarRatingPress(rating)}
        />
        <Button onPress={() => navigation.goBack()} title="Submit Review" />
      </View>
    );
  }
}

ReviewModal.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(ReviewModal);
