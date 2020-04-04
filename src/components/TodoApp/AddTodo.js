import React from 'react'

function AddTodo(props) {
    return (
        <div>
            <br />
            <h3><b>Add Todo</b></h3>
            <form onSubmit={props.handleFormSubmit}>
                <input type="text" />
            </form>
        </div>
    )
}

export default AddTodo
