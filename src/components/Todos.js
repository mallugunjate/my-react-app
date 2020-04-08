import React, { Component, Children } from 'react';

class Todos extends Component {
 render() {
   var todoData = this.props;
   console.log(todoData);
   return (
     <div>
       <ul>
         {todoData.map(item=>
          <li>{title}</li>

          )}
       </ul>
     </div>
   )
 }
}
export default Todos;
