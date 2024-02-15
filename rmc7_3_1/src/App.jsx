import { useState } from 'react'
import FormTodo from './FormTodo';
import TaskList from './TaskList';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,  1);
    setTodos(newTodos);
  };

  const toggleTodoComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <FormTodo onAddTodo={addTodo} />
      <TaskList
        todos={todos}
        onRemoveTodo={removeTodo}
        onToggleTodoComplete={toggleTodoComplete}
      />
    </div>
  );
}

export default App
