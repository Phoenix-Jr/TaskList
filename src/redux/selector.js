export const getTasks = (store) => store.taskList;
export const getCompletedTasks = (store) =>
  store.taskList.filter((t) => t.isCompleted === true);
