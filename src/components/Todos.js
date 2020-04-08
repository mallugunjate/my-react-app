import React, { Component, Children } from "react";

class Todos extends Component {
  render() {
    const todoData = this.props.todos;
    return (
      <div>
        <ul>
          {todoData.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

//export default Todos;
