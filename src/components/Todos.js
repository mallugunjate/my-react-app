import React, { Component } from 'react';

class Todos extends Component {
  // render () {
  //   return (this.props.todos((todo)=>(
  //     <h3>(todo.title)</h3>    
  //   ))
  //   );
  // }

  render() {
    return(
      <div>
        <h3>(this.props.todos)</h3>
      </div>
    );
}
// function Todos() {
//   console.log(this.props.todos)
//   return (
//     <div>
//       <h3>{this.props.todos.title}</h3>
//     </div>
//   );
// }
}
export default Todos;
