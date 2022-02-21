import { READ_TODOS_SUCCESS, READ_TODOS_ERROR } from 'state/const';

import { ITodo } from 'types/todos';

import { IAction } from 'state/types';

// State Type
export interface ITodosState {
  loading: boolean;
  data: ITodo[];
  error: boolean;
};

const initialState: ITodosState = {
  loading: true,
  data: [], // Empty todos array
  error: false,
};

const todosReducer = (state = initialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case READ_TODOS_SUCCESS:
      return {
        loading: false,
        data: payload.data, // Update todos
        error: false,
      };
    case READ_TODOS_ERROR:
      return {
        loading: false,
        data: [], // Clean todos in case something exist
        error: true,
      };
    default:
      return state;
  };
};

export default todosReducer;
