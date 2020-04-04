import React from 'react'

function TodoItem(props) {
    return (
        <div>
            <div style={{width:"300px", display:"inline-block"}}> 
                <button type="checkbox"  style={{ float: "left"}}
                    onClick={()=> props.removeTodoItem(props.item.id)}>
                    X
                </button>
                <h5 style={{display:"inline-block"}}>{props.item.title}</h5>
                <input type="checkbox"  
                    style={{ transform: "scale(2.5)", float: "right", marginTop: "10px"}}
                    onChange={()=> props.completeTodoItem(props.item.id)}
                    defaultChecked={props.item.complete}
                    />
                <hr/> 
            </div>
        </div>
    )
}

export default TodoItem
