import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    campFont: require("./assets/fonts/CampFont.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <HomeScreen />;
}