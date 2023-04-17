import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import TaskScreen from "./src/Screens/Tasks";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
