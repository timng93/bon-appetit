import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Discover new recipes!</Text>

      <FlatList
        data={[
          {
            title: 'chicken teriyaki',
            description: 'chicken with teriyaki sauce',
            tags: ['popular', 'chicken', 'japanese']
          },
          {
            title: 'salmon teriyaki',
            description: 'salmon with teriyaki sauce',
            tags: ['salmon', 'japanese']
          },
          {
            title: 'tofu teriyaki',
            description: 'tofu with teriyaki sauce',
            tags: ['tofu', 'japanese']
          },
          {
            title: 'beef teriyaki',
            description: 'beef with teriyaki sauce',
            tags: ['beef', 'japanese']
          },
          {
            title: 'chicken teriyaki 2',
            description: 'chicken with teriyaki sauce',
            tags: ['popular', 'chicken', 'japanese']
          },
          {
            title: 'salmon teriyaki 2',
            description: 'salmon with teriyaki sauce',
            tags: ['salmon', 'japanese']
          },
          {
            title: 'tofu teriyaki 2',
            description: 'tofu with teriyaki sauce',
            tags: ['tofu', 'japanese']
          },
          {
            title: 'beef teriyaki 2',
            description: 'beef with teriyaki sauce',
            tags: ['beef', 'japanese']
          }
        ]}
        renderItem={({ item }) => (
          <View style={styles.recipeWrapper}>
            <Text>{item.description}</Text>
            <Text>{item.title}</Text>
            <Text>{item.tags.join(', ')}</Text>
          </View>
        )}
        keyExtractor={item => item.title}
        numColumns={2}
      />
    </View>
  );
};
