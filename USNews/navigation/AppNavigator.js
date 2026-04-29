import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WorldNewsScreen from '../screens/WorldNewsScreen';
import USNewsScreen from '../screens/USNewsScreen';
import TechNewsScreen from '../screens/TechNewsScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import BookmarksScreen from '../screens/BookmarksScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Stack for news screens + detail
function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WorldNews" component={WorldNewsScreen} />
      <Stack.Screen name="USNews" component={USNewsScreen} />
      <Stack.Screen name="TechNews" component={TechNewsScreen} />
      <Stack.Screen 
        name="NewsDetail" 
        component={NewsDetailScreen} 
        options={{ title: 'News Detail' }} 
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName="WorldNews">
      <Drawer.Screen name="News" component={NewsStack} />
      <Drawer.Screen name="Bookmarks" component={BookmarksScreen} />
    </Drawer.Navigator>
  );
}