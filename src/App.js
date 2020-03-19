import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
import todosData from "./todosData"


class App extends Component {
    constructor (){
        super()
        this.state ={
           todos : [todosData]

        }
    }
    render(){ 
    const todoComponents = this.state.todos.map(item =>
        <ToDoItem key ={item.id} todo ={item}/>
        ) 

    return(
        
        <div className = "todo-list">
            {todoComponents}
        </div>
    )
}
}

export default App;