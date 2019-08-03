import React, { Component } from 'react';
//import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Showcase from './components/Showcase/Showcase';
import ProductDetails from './components/ProductDetails/ProductDetails';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <main role="main">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/products/" component={Showcase} />
            <Route exact path="/products/product" component={ProductDetails} />
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
