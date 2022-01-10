import React from 'react';

const todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  handleCompletedTask = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => {
        return !task.completed;
      })
    });
  }

  handleAddTask = (taskName) => {
    const newTask = {
      taskName: taskName,
      id: Date.now(), 
      completed:false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask]
    });
  }

  handleToggleTask = (selectedTask) => {

    this.setState({
      ...this.state, 
      todos: this.state.todos.map(task => {
        if(task.id === selectedTask.id) {
          return({
            ...item, 
            completed: !task.completed
          })
        } else {
          return task;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
