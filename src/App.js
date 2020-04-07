import React from 'react';
import Todos from './components/Todos'
import './App.css';

function App() {
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
  return (
    <div className="App">
      <Todos todos={this.state.todos}/>
    </div>
  );
}

export default App;
