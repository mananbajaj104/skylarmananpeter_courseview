import './App.css'

import React, {Component} from 'react'
import Banner from './components/Banner'
import Feedback from './components/Feedback';
import Graphs from './components/Graphs';

class App extends Component {
  render() {
    return <div className="App" style={{ display: "inline" }}>
      <Banner />
      <Graphs />
      <Feedback />
    </div>
  }
}

export default App;
