import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            items: []
        };
    }
        // Whenever the user inputs text and adds it, it will clear out the textbox so it's prepared for the next input.
        inputChange = e => {
            this.setState({input: e.target.value})
        }
        
        // Allows the user to press the button to collect their input in an items array.
        formSubmit = e => {
            e.preventDefault();
            console.log("This is State", this.state.items)
            this.setState({
                items : [...this.state.items, this.state.input],
                input : ''
            })
        }
        // Will allow the user to remove an item in the array.
        deleteItem = item => {
            const newItems = this.state.items.filter(items => {
                return items !== item;
            });
            this.setState({
                items: [...newItems]
            })
        }

    render() {
        return(
            <form onSubmit = {this.formSubmit}>
                <input value = {this.state.input} onChange = {this.inputChange}></input>
                <button>Add</button>
                <ul>
                    {this.state.items.map((item, index) => {
                    return <li key = {index}>{this.state.items[index]}
                    <button onClick={(e) => this.deleteItem(item)} type="button" className="btn btn-default btn-sm">Delete</button>
                    </li>
                    })}
                </ul> 
            </form>
        )
    }
};

export default TodoList;