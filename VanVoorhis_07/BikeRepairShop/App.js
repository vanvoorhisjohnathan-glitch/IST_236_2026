import React, { useEffect } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { useBikeRepairStates } from "./states";
import HomeScreen from "./screens/HomeScreen";
import ReviewScreen from "./screens/ReviewScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const state = useBikeRepairStates();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        titleFont: require("./assets/fonts/Orbitron-Regular.ttf"),
        bodyFont: require("./assets/fonts/Raleway-Regular.ttf"),
      });

      state.setCurrentScreen("home");
      await SplashScreen.hideAsync();
    }

    loadFonts();
  }, []);

  const calculateTotal = () => {
    let total = 0;

    const selectedTime = state.repairTimeRadioButtons.find(
      (btn) => btn.id === state.repairTimeId
    );
    total += selectedTime.price;

    state.services.forEach(service => {
      if (service.value) total += service.price;
    });

    if (state.rentalMembership) total += 100;

    state.setCurrentPrice(total);
    state.setCurrentScreen("review");
  };

  const resetOrder = () => {
    state.setRepairTimeId("0");
    state.setServices(state.services.map(s => ({ ...s, value: false })));
    state.setNewsletter(false);
    state.setRentalMembership(false);
    state.setCurrentPrice(0);
    state.setCurrentScreen("home");
  };

  if (!state.currentScreen) return null;

  return (
    <View style={{ flex: 1 }}>
      {state.currentScreen === "home" ? (
        <HomeScreen {...state} submitOrder={calculateTotal} />
      ) : (
        <ReviewScreen {...state} returnHome={resetOrder} />
      )}
    </View>
  );
}