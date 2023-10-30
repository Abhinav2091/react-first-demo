import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToTable from "./components/ToTable";
import ToDoForm from "./components/ToDoForm";

function App() {

  const [showAddToDoForm,setShowAddToDoForm] = useState(false)

  const [todos, setTodos] = useState([
    { rowNo: 1, desc: 'Feed Puppy', assigned: 'Abhinav' },
    { rowNo: 2, desc: 'brush teeth in Night', assigned: 'Abhinav' },
    { rowNo: 3, desc: 'Learn react', assigned: 'Abhinav' },
    { rowNo: 4, desc: 'Build projects', assigned: 'Abhinav' }
  ])

  const addTodo = (desc, assigned) => {

    let rowNumber = 1;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNo + 1;
    }
    const newTodo = {
      rowNo: rowNumber,
      desc: desc,
      assigned: assigned
    };
    setTodos(todos => [...todos, newTodo])

  }

  const deleteToDo = (rowNo) => {
    let filtered = todos.filter(function (value) {
      return value.rowNo !== rowNo;
    });
    setTodos(filtered);
  }


  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your TODO's list
        </div>
        <div className="card-body">
          <ToTable
            todos={todos} deleteToDo={deleteToDo}></ToTable>
          <button className="btn btn-primary"
          onClick={()=>setShowAddToDoForm(!showAddToDoForm)}>
            {showAddToDoForm?"Close new ToDo":"Open new ToDo"}
            </button>
        </div>
      </div>
      {showAddToDoForm && <ToDoForm addTodo={addTodo}></ToDoForm>} 
    </div>
  );
}

export default App;
