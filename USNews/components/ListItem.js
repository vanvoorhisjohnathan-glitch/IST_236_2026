import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('NewsDetail', { newsId: item.id })}
    >
      <View style={styles.container}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.headline}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  date: {
    color: 'gray'
  }
});

export default ListItem;