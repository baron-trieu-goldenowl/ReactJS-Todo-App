import {
  UPDATE_TODO,
  DELETE_TODO,
  CHANGE_TODO_FILTER,
  CLEAR_COMPLETED_TODO,
} from '../constants/todoConstants';

export const updateTodoDispatchRequest = (id, attributes) => ({
  type: UPDATE_TODO,
  payload: { id, attributes },
});

export const deleteTodoDispatchRequest = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const changeTodoFilterDispatchRequest = (filter) => ({
  type: CHANGE_TODO_FILTER,
  payload: { filter },
});

export const clearCompletedTodoDispatchRequest = () => ({
  type: CLEAR_COMPLETED_TODO,
});

export const updateTodo = (id, attributes) => (dispatch) => {
  dispatch(updateTodoDispatchRequest(id, attributes));
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch(deleteTodoDispatchRequest(id));
};

export const changeTodoFilter = (filter) => (dispatch) => {
  dispatch(changeTodoFilterDispatchRequest(filter));
};

export const clearCompletedTodo = () => (dispatch) => {
  dispatch(clearCompletedTodoDispatchRequest());
};
