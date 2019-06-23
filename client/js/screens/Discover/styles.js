import { StyleSheet } from 'react-native';

import { container, colors, dimensions, margin } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container
  },
  // recipeList: { margin: margin.xxs },
  recipeWrapper: {
    width: dimensions.fullWidth / 2.25,
    height: dimensions.fullWidth / 2.25,
    margin: margin.xs,
    backgroundColor: colors.primaryText,
    borderRadius: 20
  }
});

export default styles;
