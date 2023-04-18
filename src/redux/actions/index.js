import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actionType";

export const addTask = (title) => {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
};

export const toogle_task = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: {
      id,
    },
  };
};

export const delete_task = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
};
