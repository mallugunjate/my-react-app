import React from 'react';
function Todos() {
  console.log(this.props.todos)
  return (
    <div>
      <h3>{this.props.todos.title}</h3>
    </div>
  );
}

export default Todos;
