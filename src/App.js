import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    taskName: 'finish app',
    id: 1234,
    completed:false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }

  handleClearCompleted = () => {

    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    });
  }

  handleAddTask = (taskName) => {

    const newTask = {
      taskName: taskName,
      id: Date.now(), 
      completed:false
    };

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    });
  }

  handleToggleTask = (selectedTask) => {

    this.setState({
      ...this.state, 
      tasks: this.state.tasks.map(task => {
        if(task.id === selectedTask.id) {
          return({
            ...item, 
            completed: !task.completed
          })
        } else {
          return task;
        }

      })
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>To Do List</h2>
          <TodoForm handleAddTask={this.handleAddTask} />
        </div>
        <TodoList handleToggleTask={this.handleToggleTask} tasks={this.state.tasks} />
        <button onClick={this.handleClearCompleted} className='clearBtn'>Clear Completed</button>
      </div>
    );
  }
}

export default App;
