import React from "react";
import {View, Text, Image, FlatList, Button} from "react-native";

import styles from "./styles";

export default ({recipes, images, navigation}) => {
  console.log(recipes);
  console.log(images);

  return (
    <View style={styles.container}>
      <Text>Discover new recipes!</Text>

      <FlatList
        data={recipes}
        renderItem={({item}) => (
          <View style={styles.recipeWrapper}>
            <Text>{item.title}</Text>
            <Image style={styles.image} source={images[item.title]} />
            {item.tags.map(tag => (
              <Text key={tag.id}>{tag.name}</Text>
            ))}
            <Button
              onPress={() => navigation.navigate("RecipeModal")}
              title="Info"
              color="#fff"
            />
          </View>
        )}
        keyExtractor={item => item.title}
        numColumns={2}
      />
    </View>
  );
};
