import React, { Component } from 'react';

import './task.css';

class Task extends Component {
    render (){
        const {task} = this.props;
        return <div>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox"/>
            <button style={btnDelete}>X</button>
        </div>
    }
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding : '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}
export default Task;