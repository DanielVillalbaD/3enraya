import React, { Component } from 'react';
import View from './view';

class App extends Component {
  state = {
    isReady: true,
  };
  
  render() {
    return this.state.isReady ? <View /> : <div>Cargando...</div>;
  }
}

export default App;