import React from "react";
import {View, Text, Image, FlatList, TouchableOpacity} from "react-native";

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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RecipeModal", {
                  recipe: item,
                  image: images
                })
              }
            >
              <Text>{item.title}</Text>
              <Image style={styles.image} source={images[item.title]} />
              {item.tags.map(tag => (
                <Text key={tag.id}>{tag.name}</Text>
              ))}
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.title}
        numColumns={2}
      />
    </View>
  );
};
