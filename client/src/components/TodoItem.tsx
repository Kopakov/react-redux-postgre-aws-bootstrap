import React from 'react';

import { updateTodo, deleteTodo } from 'state/todos/actions';

import { ITodo } from 'types/todos';

interface ITodoItemComponent {
  todo: ITodo;
};

const TodoItem: React.FC<ITodoItemComponent> = props => {
  const { todo } = props;
  const { id, description } = todo;

  return (
    <div className='card mb-4'>
      <div className='row'>
        <div className='col'>
          <div className='card-body'>
            {description}
          </div>
        </div>
        <div className='col-auto'>
          <div className='card-body'>
            <button className='btn btn-sm btn-outline btn-light me-3' onClick={updateTodo}>
              <span className='bi bi-pencil me-2 text-muted'></span>
              Edit
            </button>
            <button className='btn btn-sm btn-outline-danger' onClick={() => deleteTodo(id)}>
              <span className='bi bi-trash me-2'></span>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
