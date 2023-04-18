import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import TaskTile from "./TaskTile";
import TaskForm from "./TaskForm";
import FloatingBtn from "../../components/FloatingBtn";
import Counter from "../../components/Counter";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selector";
import { delete_task, toogle_task } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function TaskScreen() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const dispatch = useDispatch();
  const renderItem = ({ item }) => {
    return (
      <TaskTile
        task={item}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    );
  };

  const tasks = useSelector(getTasks);

  const onUpdateTask = (id) => {
    dispatch(toogle_task(id));
  };
  const onDeleteTask = (id) => {
    dispatch(delete_task(id));
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
            {isFormVisible && <TaskForm />}
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
