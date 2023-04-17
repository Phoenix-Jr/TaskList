import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const date = new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingTop: 25,
  },
  date: {
    fontSize: 26,
    fontWeight: "bold",
  },
});
