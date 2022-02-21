// App Reducers
// Import Reducers
import todosReducer from 'state/todos/reducer';

/*
  Combine reducers

  Left side: state name to access state or its parts in components using useSelector hook
  Right: state reducer

  Sample of access state in components:
  const user = useSelector((state: TRootState) => state.user);
*/
const rootReducer = {
  todos: todosReducer,
};

export default rootReducer;
