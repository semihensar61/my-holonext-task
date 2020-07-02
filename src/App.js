import React, {Component} from 'react';
import './App.css';
import Viewer from './Components/Viewer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
      <Viewer />
      </div>
    );
  }
}

export default App;