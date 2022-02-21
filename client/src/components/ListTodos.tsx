import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { TodoItem } from 'components';

import { readTodos } from 'state/todos/actions';

import { ITodo } from 'types/todos';

const ListTodos: React.FC = () => {
  // Todos state

  // Fetch todos when component ready
  useEffect(() => {
    readTodos();
  }, []);

  // if (todos.length === 0) {
  //   return <div className='alert alert-light'>No todos found</div>;
  // };

  // return (
  //   <div className='py-4'>
  //     {todos.map((todo: ITodo) => <TodoItem key={todo.id} todo={todo} />)}
  //   </div>
  // );
  return <h2>Todos List</h2>
};

export default ListTodos;
