import { FlatList } from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";

export default function HomeScreen({ navigation }) {
  function renderItem(itemData) {
    return (
      <CountryGridTile
        title={itemData.item.name}
        color={itemData.item.color}
        onPress={() =>
          navigation.navigate("Destinations", {
            countryId: itemData.item.id,
          })
        }
      />
    );
  }

  return (
    <FlatList
      data={COUNTRIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}