import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const List = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ListItem item={item} navigation={navigation} />
      )}
    />
  );
};

export default List;