import React from 'react';

const Todo = props => {

    console.log('hello from Todo props', props);
    const handleClick = () => {
        props.handleToggleTask(props.task);
    }

    return (
        <div onClick={handleClick} className={`task${props.task.completed ? 'completed' : ''}`}>
            <p> {props.task.taskName}</p>
        </div>
    );
};

export default Todo;