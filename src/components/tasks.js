import React, {Component} from 'react';
import PropTypes from 'prop-types'

import Task from './task'

class Tasks extends Component {
    render(){
        return this.props.tasks.map(el => 
        <Task 
            task ={el} 
            key ={ el.id } 
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
        />)
    }
}


Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;