import { View, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const onChangeText = (text) => {
    setTitle(text);
  };
  const onAddNewTask = () => {
    if (title === "") return;

    dispatch(addTask(title));
    setTitle("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={title}
        placeholder="Nouvelle Tâche"
      />
      <Button
        title="Ajouter"
        color={"blue"}
        onPress={onAddNewTask}
        style={styles.input}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: "70%",
    height: 40,
    padding: 10,
  },
});
