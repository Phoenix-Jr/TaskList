import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import TaskTile from "./TaskTile";
import TaskForm from "./TaskForm";
import FloatingBtn from "../../components/FloatingBtn";
import Counter from "../../components/Counter";

export default function TaskScreen() {
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const renderItem = ({ item }) => {
    return (
      <TaskTile
        task={item}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    );
  };
  const onAddTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, isCompleted: false }]);
  };

  const onUpdateTask = (id) => {
    const filtered = tasks.map((task) => {
      if (task.id === id) task.isCompleted = !task.isCompleted;
      return task;
    });
    setTasks(filtered);
  };
  const onDeleteTask = (id) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };
  const _toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {isFormVisible && <TaskForm onAddTask={onAddTask} />}
            <View style={styles.container}>
              <Counter nb={tasks.length} title={"Tâches crées"} />
              <Counter
                nb={tasks.filter((task) => task.isCompleted === true).length}
                title={"Tâches effectuées"}
              />
            </View>
          </>
        }
        // ListFooterComponent={}
        data={tasks}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FloatingBtn toggle={_toggleForm} isOpen={isFormVisible} />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
