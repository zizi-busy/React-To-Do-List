import React from 'react';
import ToDoItem from './ToDoItem';


function App (){
    return(
        
        <div className = "todo-list">
        <h1>To-Do List</h1>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
        </div>
    )
}


export default App;