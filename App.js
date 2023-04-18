import { StyleSheet, SafeAreaView } from "react-native";
import TaskScreen from "./src/Screens/Tasks";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TaskScreen />
      </SafeAreaView>
    </Provider>
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
