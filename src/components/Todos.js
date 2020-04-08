import React, { Component, Children } from 'react';

class Todos extends Component {
 render() {
   const todoData = this.props;
   console.log(todoData);
   return (
     <div>
       {todoData.map(function(d, idx){
         return (<li key={idx}>{d.title}</li>)
       })}
     </div>
   )
 }
}
export default Todos;
