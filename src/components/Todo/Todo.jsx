import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from '../List/List';
import './Todo.css';

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      task: '',
      items: [],
    };
  }

  componentDidMount() {
    const items = localStorage.getItem('items');
    if (items) {
      this.setState({ items: JSON.parse(items) });
    }
  }

  handleOnChange = (e) => {
    const {
      target: { value },
    } = e;

    this.setState({
      task: value,
    });
  };

  handleOnSubmit = (e) => {
    const { task, items } = this.state;

    e.preventDefault();

    if (task.trim() !== '') {
      const newItem = {
        id: uuidv4(),
        task,
        completed: false,
      };
      this.setState({
        task: '',
        items: [...items, newItem],
      });
      localStorage.setItem('items', JSON.stringify([...items, newItem]));
    }
  };

  markAsCompleted = (id) => {
    const { items } = this.state;

    const foundTask = items.find((task) => task.id === id);

    foundTask.completed = true;

    this.setState({
      task: '',
      ...items,
      ...foundTask,
    });
    localStorage.setItem('items', JSON.stringify([...items]));
  };

  removeTask = (id) => {
    const { items } = this.state;

    const filteredTasks = items.filter((task) => task.id !== id);

    this.setState({
      items: filteredTasks,
    });
    localStorage.setItem('items', JSON.stringify(filteredTasks));
  };

  render() {
    const { task, items } = this.state;

    return (
      <div className="Todo">
        <h1>New Task:</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input value={task} onChange={this.handleOnChange} />
        </form>
        <List
          items={items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default Todo;
