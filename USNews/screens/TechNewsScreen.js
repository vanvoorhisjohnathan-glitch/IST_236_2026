import React from 'react';
import { View } from 'react-native';
import List from '../components/List';
import { NEWS } from '../data/dummy-data';

const TechNewsScreen = ({ navigation }) => {
  const data = NEWS.filter(item => item.category === 'tech');

  return (
    <View>
      <List data={data} navigation={navigation} />
    </View>
  );
};

export default TechNewsScreen;