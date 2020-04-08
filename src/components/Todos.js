import React, { Component, Children } from 'react';

class Todos extends Component {
 render() {
   const todoData = this.props.todos;
   
   return (
     <div>
       {todoData.map(function(d, idx){
         console.log(idx);
         console.log(d.title);
         <li key={idx}>{d.title}</li>
       })}
     </div>
   )
 }
}
export default Todos;
