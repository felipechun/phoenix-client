import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';


class App extends Component {

  // state = {

  // }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
