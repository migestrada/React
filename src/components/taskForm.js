import React, {Component } from 'react';

export default class TaskForm extends Component{
    
    state = {
        title: '',
        description: '' ,
    }

    onSubmit = (e) =>{
        e.preventDefault()
        this.props.addTask(this.state.title, this.state.description)
    }

    onChanche = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render (){
        return <form onSubmit={this.onSubmit}>
            <input 
                name="title" type="text" 
                placeholder="Task Name"  
                onChange={this.onChanche} 
                value={this.state.title}
            />
            <br />
            <br />
            <textarea 
                name="description" 
                placeholder="Write a description task" 
                onChange={this.onChanche} 
                value={this.state.description}
            />

            <br />
            <br />
            <button type="submit">
                Save Task
            </button>
        </form>
    }

}
