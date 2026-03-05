import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Switch,
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import Checkbox from "expo-checkbox";

import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function HomeScreen(props) {
  return (
      <ScrollView style={{ padding: 20 }}>
        <Title text="Bike Repair Shop" />

        <Text style={{ fontFamily: "bodyFont" }}>Service Time</Text>
        <RadioGroup
          radioButtons={props.repairTimeRadioButtons}
          selectedId={props.repairTimeId}
          onPress={props.setRepairTimeId}
        />

        <Text style={{ marginTop: 20, fontFamily: "bodyFont" }}>
          Services
        </Text>

        {props.services.map((item, index) => (
          <View key={item.id} style={{ flexDirection: "row", marginVertical: 5 }}>
            <Checkbox
              value={item.value}
              onValueChange={() => {
                const updated = [...props.services];
                updated[index].value = !updated[index].value;
                props.setServices(updated);
              }}
            />
            <Text style={{ marginLeft: 10, fontFamily: "bodyFont" }}>
              {item.name} (${item.price})
            </Text>
          </View>
        ))}

        <Text style={{ marginTop: 20, fontFamily: "bodyFont" }}>
          Newsletter Signup
        </Text>
        <Switch value={props.newsletter} onValueChange={props.setNewsletter} />

        <Text style={{ marginTop: 20, fontFamily: "bodyFont" }}>
          Rental Membership ($100)
        </Text>
        <Switch
          value={props.rentalMembership}
          onValueChange={props.setRentalMembership}
        />

        <NavButton text="Submit Order" onPress={props.submitOrder} />
      </ScrollView>
  );
}