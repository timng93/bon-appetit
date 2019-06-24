import { StyleSheet } from 'react-native';

import {
  container,
  colors,
  dimensions,
  margin,
  padding,
  jusBtwn
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container
  },
  recipeWrapper: {
    width: dimensions.fullWidth / 2.25,
    height: dimensions.fullWidth / 2.25,
    margin: margin.xs,
    padding: padding.xxs,
    backgroundColor: colors.primaryText,
    borderRadius: 20,
    ...jusBtwn
  },
  image: {
    width: 80,
    height: 80
  }
});

export default styles;
