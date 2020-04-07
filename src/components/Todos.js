import React, { Component } from 'react';

class Todos extends Component {
  render () {
    return (this.props.todos((todo)=>(
      <h3>(todo.title)</h3>    
    ))
    );
  }
}
// function Todos() {
//   console.log(this.props.todos)
//   return (
//     <div>
//       <h3>{this.props.todos.title}</h3>
//     </div>
//   );
// }

export default Todos;
