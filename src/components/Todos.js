import React, { Component, Children } from 'react';

class Todos extends Component {
 render() {
   const todoData = this.props.todos;
   
   return (
     <div>
       <ul>
       {todoData.map(function(d, idx){
         <li key={idx}>{d.title}</li>
       })}
       </ul>>
       
     </div>
   )
 }
}
export default Todos;
