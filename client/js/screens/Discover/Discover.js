import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const recipes = [
  {
    title: 'chicken teriyaki',
    description: 'chicken with teriyaki sauce',
    tags: [popular, chicken, japanese]
  },
  {
    title: 'salmon teriyaki',
    description: 'salmon with teriyaki sauce',
    tags: [salmon, japanese]
  },
  {
    title: 'tofu teriyaki',
    description: 'tofu with teriyaki sauce',
    tags: [tofu, japanese]
  },
  {
    title: 'beef teriyaki',
    description: 'beef with teriyaki sauce',
    tags: [beef, japanese]
  }
];

export default () => {
  return (
    <View style={styles.container}>
      <Text>Discover new recipes!</Text>
    </View>
  );
};
