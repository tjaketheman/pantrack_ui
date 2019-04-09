import React, { Component } from 'react';
import Routes from './routes/Routes';
import Navtop from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#FFFCF7'}}className="App">
        <Navtop />
        <Routes />
      </div>
    );
  }
}

export default App;
