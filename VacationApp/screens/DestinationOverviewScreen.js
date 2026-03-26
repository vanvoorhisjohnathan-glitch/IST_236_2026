import { useState } from "react";
import { View, FlatList, Modal, Text, Image, Button } from "react-native";
import { DESTINATIONS } from "../data/dummy-data";
import DestinationItem from "../components/DestinationItem";

export default function DestinationOverviewScreen({ route }) {
  const [selected, setSelected] = useState(null);

  const countryId = route.params.countryId;

  const displayed = DESTINATIONS.filter(
    (dest) => dest.countryId === countryId
  );

  return (
    <View>
      <FlatList
        data={displayed}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <DestinationItem
            {...itemData.item}
            onPress={() => setSelected(itemData.item)}
          />
        )}
      />

      <Modal visible={selected !== null}>
        {selected && (
          <View>
            <Image source={{ uri: selected.imageUrl }} style={{ height: 200 }} />
            <Text>{selected.description}</Text>
            <Button title="Close" onPress={() => setSelected(null)} />
          </View>
        )}
      </Modal>
    </View>
  );
}