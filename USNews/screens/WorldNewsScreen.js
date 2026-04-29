import React from 'react';
import { View } from 'react-native';
import List from '../components/List';
import { NEWS } from '../data/dummy-data';

const WorldNewsScreen = ({ navigation }) => {
  const data = NEWS.filter(item => item.category === 'world');

  return (
    <View>
      <List data={data} navigation={navigation} />
    </View>
  );
};

export default WorldNewsScreen;