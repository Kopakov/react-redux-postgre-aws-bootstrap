import React, { useState } from 'react';

import { createTodo } from 'state/todos/actions';

const InputTodo: React.FC = () => {
  // Todo State
  const [description, setDescription] = useState('');

  // Input Change
  const handleInputChange = (value: string) => {
    setDescription(value);
  };

  // Handle Form Submit
  const handleFormSubmit = async (e: any) => {
    e.preventDefault(); // Prevent form sending
    createTodo(description);
  };

  return (
    <div className='py-4'>
      <form onSubmit={e => handleFormSubmit(e)}>
        <div className='input-group'>
          <input type='text' className='form-control form-control-lg' onChange={e => handleInputChange(e.target.value)} />
          <button type='submit' className='btn btn-lg btn-primary'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
