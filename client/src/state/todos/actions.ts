import { READ_TODOS_SUCCESS, READ_TODOS_ERROR } from 'state/const';

import { serverUrl, headers } from 'const';

import { handleError } from 'helpers';

import { TDispatch } from 'state/types';

// Add Dispatch functionality
import store from 'state/store';
const dispatch = store.dispatch;

// CREATE
export const createTodo = async (description: string) => {
  try {
    // Send to server api (add todo)
    const body = { description };
    const res = await fetch(`${serverUrl}/todos`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    // Update todos state
    // ...
  } catch (error: any) {
    handleError(error);

    // Update State
    // dispatch({ type: CREATE_TODO_ERROR });
  };
};

// READ
// All todos
export const readTodos = async () => {
  try {
    const res = await fetch(`${serverUrl}/todos`);
    const data = await res.json();

    // Update State
    dispatch({
      type: READ_TODOS_SUCCESS,
      payload: data,
    });

  } catch (error: any) {
    // Update State
    dispatch({ type: READ_TODOS_ERROR });

    handleError(error);
  };
};

// UPDATE
export const updateTodo = async () => {
};

// DELETE
export const deleteTodo = async (id: number) => {
  try {
    await fetch(`${serverUrl}/todos/${id}`, {
      method: 'DELETE',
    });
  } catch (error: any) {
    handleError(error);
  };
};
