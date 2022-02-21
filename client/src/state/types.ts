// Redux State Types
import store from 'state/store';

// Reducer Action Interface
export interface IAction {
  type: string; // Any string from ./const.ts or ./todos/types
  payload?: any; // Type any to pass different data
};

// // State Type
// // Per Redux Typescript docs: https://react-redux.js.org/tutorials/typescript-quick-start
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type TRootState = ReturnType<typeof store.getState>;

// Dispatch Type
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TDispatch = typeof store.dispatch;