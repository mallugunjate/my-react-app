import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title:'Wake up at morning 5pm',
        completed:false
      },
      {
        id:2,
        title:'Go to gym',
        completed:false
      },
      {
        id:3,
        title:'Have breakfast',
        completed:false
      },
      {
        id:4,
        title:'Go to office',
        completed:false
      }
    ]
  }
  render() {
    console.log(this.state.todos)
    return(
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}
// function App() {
  
//   return (
//     <div className="App">
//       <Todos todos={this.state.todos}/>
//     </div>
//   );
// }

export default App;
