import TodoTask from "./ToDoTask";
import './ToDoStyles.css';

function ToDo() {
 return(
  <div className='Container'>
      <header>

          <h2>ToDo List</h2>

          <input
           type='text'
           autoComplete='off'
           placeholder='Type your Task here...'
           name='Task'
           className='input'
          />

          <button type='submit' className='btn-create'>
           Create a Task
          </button>

      </header>

        <div className='line'></div>

        <TodoTask />
  </div>
 );
}

export default ToDo;