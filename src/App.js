
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddTask from './Component/AddTask/AddTask';
import TodoList from './Component/TodoList/TodoList';
import { addTask, DeleteTask } from './redux/actions/TodoAction';

function App(props) {
  const todoList = useSelector(state => state.todoList)
  const dispatch = useDispatch()
  
 
  const HandleDelete = (idtask) =>{
    dispatch(DeleteTask(idtask))
  }

  return (
    <div className="app">
      <h1> ToDo App</h1>
      <AddTask  />
      <TodoList todo={todoList}  HandleDelete={HandleDelete}/>
      
    </div>
  );
}

export default App;
