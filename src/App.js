import React, {Component} from 'react';
//import React from 'react';
import './App.css';
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
// import './Components/Viewer.js'
import Viewer from './Components/Viewer'

// Amplify.configure(awsconfig);

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