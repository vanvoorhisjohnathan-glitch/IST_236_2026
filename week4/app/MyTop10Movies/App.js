// Import React and required React Native components
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView
} from "react-native";

// Array containing movie data (id, title, rating, and local poster image)
const movieData = [
  { id: "1", title: "Iron Man", rating: 7.9, poster: require("./assets/ironman.jpg") },
  { id: "2", title: "Avengers: Age of Ultron", rating: 7.3, poster: require("./assets/ultron.jpg") },
  { id: "3", title: "Guardians of the Galaxy", rating: 8.0, poster: require("./assets/guardians.jpg") },
  { id: "4", title: "Green Book", rating: 8.2, poster: require("./assets/greenbook.jpg") },
  { id: "5", title: "Star Wars: Revenge of the Sith", rating: 7.6, poster: require("./assets/sith.jpg") },
  { id: "6", title: "Gladiator", rating: 8.5, poster: require("./assets/gladiator.jpg") },
  { id: "7", title: "Kingdom of Heaven", rating: 7.2, poster: require("./assets/kingdom.jpg") },
  { id: "8", title: "Braveheart", rating: 8.3, poster: require("./assets/braveheart.jpg") },
  { id: "9", title: "WALL-E", rating: 8.4, poster: require("./assets/walle.jpeg") },
  { id: "10", title: "Spider-Man: Into the Spider-Verse", rating: 8.4, poster: require("./assets/spiderman.jpg") }
];

// Receives title, rating, and poster as props
const MovieItem = ({ title, rating, poster }) => {
  return (
    <View style={styles.card}>
      {/* Movie poster image */}
      <Image source={poster} style={styles.poster} />

      {/* Movie title */}
      <Text style={styles.movieName}>{title}</Text>

      {/* Movie rating with star icon */}
      <Text style={styles.rating}>⭐ {rating}</Text>
    </View>
  );
};

// Main App component
export default function App() {
  return (
    // SafeAreaView ensures content does not overlap device notches/status bars
    <SafeAreaView style={styles.container}>
      <View style={styles.innerBox}>
        
        {/* Header title */}
        <Text style={styles.header}>My Top 10 Movies</Text>

        {/* FlatList efficiently renders scrolling lists */}
        <FlatList
          data={movieData} // Data source for the list
          keyExtractor={(item) => item.id} // Unique key for each item
          renderItem={({ item }) => (
            // Render each movie using the MovieItem component
            <MovieItem
              title={item.title}
              rating={item.rating}
              poster={item.poster}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

// Styles for the application
const styles = StyleSheet.create({
  // Main container styling
  container: {
    flex: 1, // Takes up full screen
    backgroundColor: "#000", // Black background
    alignItems: "center", // Center content horizontally
  },

  // Inner bordered box that wraps the content
  innerBox: {
    width: "90%", // 90% width of screen
    borderWidth: 1,
    borderColor: "white",
    padding: 15,
  },

  // Header text styling
  header: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  // Card layout for each movie item
  card: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },

  // Poster image styling
  poster: {
    width: 50,
    height: 75,
    resizeMode: "cover",
    borderRadius: 5,
  },

  // Movie title styling
  movieName: {
    color: "white",
    flex: 1, // Takes remaining space between image and rating
    textAlign: "center",
  },

  // Rating text styling
  rating: {
    color: "white",
    width: 60,
    textAlign: "right",
  },
});
