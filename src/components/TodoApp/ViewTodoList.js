import React from 'react'
import TodoItem from './TodoItem';

function ViewTodoList(props) {
    return (
        <div style={{textAlign:"center"}}>
            <hr/>
            <h4><b>Todos</b></h4> 
            
            <div style={{width:"300px", display:"inline-block"}}>  <hr/></div>
            {props.todos.map( item =>  <TodoItem key={item.id} item={item} 
                                        completeTodoItem={props.completeTodoItem}
                                        removeTodoItem={props.removeTodoItem}    /> )}
        </div>
    )
}

export default ViewTodoList
