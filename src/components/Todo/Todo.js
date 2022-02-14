import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "../List/List";
import "./Todo.css";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      items: [],
    };
  }

  componentDidMount() {
    const items = localStorage.getItem("items");
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
    e.preventDefault();

    if (this.state.task.trim() !== "") {
      const newItem = {
        id: uuidv4(),
        task: this.state.task,
        completed: false,
      };
      this.setState({
        task: "",
        items: [...this.state.items, newItem],
      });
      localStorage.setItem(
        "items",
        JSON.stringify([...this.state.items, newItem])
      );
    }
  };

  markAsCompleted = (id) => {
    const foundTask = this.state.items.find((task) => task.id === id);

    foundTask.completed = true;

    this.setState({
      task: "",
      ...this.state.items,
      ...foundTask,
    });
    localStorage.setItem("items", JSON.stringify([...this.state.items]));
  };

  removeTask = (id) => {
    const filteredTasks = this.state.items.filter((task) => task.id !== id);

    this.setState({
      items: filteredTasks,
    });
    localStorage.setItem("items", JSON.stringify(filteredTasks));
  };

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input value={this.state.task} onChange={this.handleOnChange} />
        </form>
        <List
          items={this.state.items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default Todo;
