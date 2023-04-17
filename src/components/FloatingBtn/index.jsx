import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";

export default function FloatingBtn({ toggle, isOpen }) {
  return (
    <Pressable style={styles.btn} onPress={toggle}>
      <Text style={styles.txt}>{isOpen ? "x" : "+"}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  btn: {
    // padding: 20,
    position: "absolute",
    borderRadius: 40,
    bottom: 20,
    width: 40,
    height: 40,
    right: 20,
    backgroundColor: "orange",
    // flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
  },
  txt: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
