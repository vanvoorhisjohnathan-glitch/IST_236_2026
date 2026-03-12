import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import Title from "../components/Title";
import ReserveButton from "../components/ReserveButton";

function HomeScreen() {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [sites, setSites] = useState(1);

  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [showSites, setShowSites] = useState(false);

  const [reservation, setReservation] = useState("");

  function reserveHandler() {
    setReservation(
      `Check In: ${checkIn}
Check Out: ${checkOut}
Guests: ${guests}
Campsites: ${sites}`
    );
  }

  return (
    <ImageBackground
      source={require("../assets/images/background.jpeg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Title>Evergreen Campground</Title>

        <Pressable onPress={() => setShowCheckIn(true)}>
          <Text style={styles.text}>Check In: {checkIn.toLocaleString()}</Text>
        </Pressable>

        {showCheckIn && (
          <DateTimePicker
            value={checkIn}
            mode="date"
            onChange={(event, selectedDate) => {
                if (event.type === "set" && selectedDate) {
                setCheckIn(selectedDate);
            }
            setShowCheckIn(false);
        }}
          />
        )}

        <Pressable onPress={() => setShowCheckOut(true)}>
          <Text style={styles.text}>Check Out: {checkOut.toLocaleString()}</Text>
        </Pressable>

        {showCheckOut && (
        <DateTimePicker
          value={checkOut}
          mode="date"
          display="default"
            onChange={(event, selectedDate) => {
            if (event.type === "set" && selectedDate) {
        setCheckOut(selectedDate);
      }
      setShowCheckOut(false);
    }}
  />
)}

        <Pressable onPress={() => setShowGuests(!showGuests)}>
          <Text style={styles.text}>Guests: {guests}</Text>
        </Pressable>

        {showGuests && (
          <View style={styles.pickerContainer}>
            <Picker selectedValue={guests} onValueChange={setGuests}>
              {[...Array(15)].map((_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={i + 1} />
              ))}
            </Picker>
          </View>
        )}

        <Pressable onPress={() => setShowSites(!showSites)}>
          <Text style={styles.text}>Campsites: {sites}</Text>
        </Pressable>

        {showSites && (
          <View style={styles.pickerContainer}>
            <Picker selectedValue={sites} onValueChange={setSites}>
              {[...Array(5)].map((_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={i + 1} />
              ))}
            </Picker>
          </View>
        )}

        <ReserveButton onPress={reserveHandler} />

        <Text style={styles.reservation}>{reservation}</Text>
      </View>
    
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 30,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    marginVertical: 10,
  },
  reservation: {
    color: "white",
    marginTop: 20,
  },
  pickerContainer: {
  backgroundColor: "white",
  borderRadius: 10,
  marginVertical: 10,
},

picker: {
  color: "black",
},

pickerItem: {
  color: "black",
},
});