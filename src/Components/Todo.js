import React, { Component } from 'react'

class Todo extends Component{


    render = () => {
        return (
            <div>
                <label>
                    <input
                     type="checkbox"
                     checked={this.props.record.completed}
                     onChange={() => {this.props.handleChange(this.props.record.id)}}
                    /> 
                      
                      {this.props.record.text}
                </label>
            </div>
        );
    }

}

export default Todo