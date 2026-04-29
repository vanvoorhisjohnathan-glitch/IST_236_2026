import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NEWS } from '../data/dummy-data';

const NewsDetailScreen = ({ route }) => {
  const newsId = route.params.newsId;
  const newsItem = NEWS.find(n => n.id === newsId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: newsItem.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{newsItem.headline}</Text>
      <Text>{newsItem.date}</Text>
      <Text>{newsItem.author} - {newsItem.agency}</Text>
      <Text>{newsItem.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 },
  image: { width: '100%', height: 200 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 }
});

export default NewsDetailScreen;