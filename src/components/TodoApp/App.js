import React, { Component } from 'react'

// Components
import AddTodo from './AddTodo';
import ViewTodoList from './ViewTodoList';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos:[], 
             curr_id: 0
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault(); 
        const newTodo = {title: e.target.elements[0].value,
                            complete: false,
                            id: this.state.curr_id};
         
        const oldList = this.state.todos;
        oldList.push(newTodo);

        this.setState({todos: oldList, curr_id: this.state.curr_id + 1 });
    }

    completeTodoItem = (id) => {
        let oldList = this.state.todos;

        oldList.map( item => item.id === id && (item.complete = !item.complete) );
        this.setState({todos: oldList});
    } 

    removeTodoItem = (id) => {
        let oldList = this.state.todos; 
        oldList = oldList.filter( item => item.id !== id); 
        
        this.setState({todos: oldList });
    }
    
    render() {
        return (
            <div>
                <AddTodo handleFormSubmit={this.handleFormSubmit}/>
                <ViewTodoList 
                        todos={this.state.todos} 
                        completeTodoItem={this.completeTodoItem}
                        removeTodoItem={this.removeTodoItem} />
            </div>
        )
    }
}

export default App
