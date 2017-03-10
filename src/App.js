import React, { Component } from 'react';
import logo from './logo.svg';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyReactComponent from './MyReactComponent'
import AppBar from './AppBar'
import MyTrend from './MyTrend'
import Toolbar from './Toolbar'
import Drawer from './Drawer'
import MyList from './MyList'

import './App.css';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/
const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar />
      <MyList />
    </div>
  </MuiThemeProvider>
);

export default App;