import React from 'react';

import { InputTodo, ListTodos } from 'components';

const App: React.FC = () => {
  return (
    <div className='py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 col-md-9 mx-auto'>
            <h1 className='mb-3'>Todo List</h1>
            <InputTodo />
            <ListTodos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
