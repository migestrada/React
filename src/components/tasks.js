import React, {Component} from 'react';
import Task from './task'

class Tasks extends Component {
    render(){
        return this.props.tasks.map(el => <Task task ={el} key ={ el.id }/>)
    }
}

export default Tasks;