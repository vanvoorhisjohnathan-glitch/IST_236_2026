import React from "react";
import { Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function ReviewScreen(props) {
  const tax = props.currentPrice * 0.06;
  const total = props.currentPrice + tax;

  return (
    <LinearGradient
      colors={["#1e3c72", "#2a5298"]}
      style={{ flex: 1, padding: 20 }}
    >
      <ScrollView>
        <Title text="Order Review" />

        {props.services
          .filter(service => service.value)
          .map(service => (
            <Text key={service.id} style={{ fontFamily: "bodyFont" }}>
              {service.name} - ${service.price}
            </Text>
          ))}

        {props.rentalMembership && (
          <Text style={{ fontFamily: "bodyFont" }}>
            Rental Membership - $100
          </Text>
        )}

        <Text style={{ marginTop: 20, fontFamily: "bodyFont" }}>
          Subtotal: ${props.currentPrice.toFixed(2)}
        </Text>
        <Text style={{ fontFamily: "bodyFont" }}>
          Sales Tax (6%): ${tax.toFixed(2)}
        </Text>
        <Text style={{ fontSize: 18, fontFamily: "bodyFont" }}>
          Final Total: ${total.toFixed(2)}
        </Text>

        <NavButton text="Return Home" onPress={props.returnHome} />
      </ScrollView>
    </LinearGradient>
  );
}