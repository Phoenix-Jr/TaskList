import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "../actions/actionType";
const initialState = [{ id: 1, title: "Init task", isCompleted: false }];

export const taskList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          isCompleted: false,
        },
      ];
    case TOGGLE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id) task.isCompleted = !task.isCompleted;
        return task;
      });
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
};
