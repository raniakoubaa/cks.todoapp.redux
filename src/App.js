
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddTask from './Component/AddTask/AddTask';
import Filter from './Component/Filter/Filter';
import TodoList from './Component/TodoList/TodoList';
import { addTask, DeleteTask, TaskIsDone } from './redux/actions/TodoAction';

function App(props) {
  const todoList = useSelector(state => state.todoList)
  const dispatch = useDispatch()
  
  const handleAdd = (newTask) => {
    dispatch(addTask(newTask))
  }
  const HandleDone =(done) =>{
    dispatch(TaskIsDone(done))
  }
  const HandleDelete = (idtask) =>{
    dispatch(DeleteTask(idtask))
  }
  return (
    <div className="app">
      <h1> ToDo App</h1>
      <AddTask handleAdd={handleAdd} />
      <TodoList todo={todoList}  HandleDelete={HandleDelete}/>
      <Filter HandleDone={HandleDone}/>
    </div>
  );
}

export default App;
