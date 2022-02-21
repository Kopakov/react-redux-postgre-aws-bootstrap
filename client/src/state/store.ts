import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'state/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;