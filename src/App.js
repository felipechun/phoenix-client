import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


class App extends Component {

  // state = {

  // }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route component={Home} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
