// import { fetchTasks } from '../../api/taskAPI';

export const SET_TASKS = "SET_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

// Action to fetch tasks
// export const loadTasks = () => {
//   return (dispatch) => {
//     fetchTasks()
//       .then((response) => {
//         dispatch({ type: SET_TASKS, payload: response.data });
//       })
//       .catch((error) => {
//         console.error("Error fetching tasks:", error);
//       });
//   };
// };

export const loadTasks = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5001/tasks");
      const data = await response.json();
      dispatch({ type: "SET_TASKS", payload: data });
    } catch (error) {
      dispatch({ type: "SET_TASKS", error });
    }
  };
};

// Action to add a new task
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

// Action to delete a task
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

// Action to update a task
export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});
