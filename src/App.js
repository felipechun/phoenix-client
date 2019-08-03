import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';

import AuthService from './components/authentication/auth-service/auth-service';
import Signup from './components/authentication/Signup/Signup';
import Login from './components/authentication/Login/Login';

import SellForm from './components/SellForm/SellForm';
import CompanyRegister from './components/CompanyRegister/CompanyRegister';


class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.status = false;
  }
  
  fetchUser = () =>{
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser: response
        })
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    this.fetchUser()
    if(!this.status){
      this.status= true;
      return(
        <div className="App">
        </div>
      );
    } else if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Navbar isLoggedIn={this.state.loggedInUser} logout={this.getTheUser}/>
          <h1>LOGGED IN!</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/sell-form" component={SellForm}/>
            <Route exact path="/company-signup" component={CompanyRegister} />
          </Switch>
          <Footer/>
        </div>
      );
    } else {
      return (
        <div className="App">
        <Navbar isLoggedIn={this.state.loggedInUser} logout={this.getTheUser}/>
        <h1>HELLO NOT LOGGED IN</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}/>
          <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
          <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
          <Route exact path="/sell-form" component={SellForm}/>
        </Switch>
        <Footer/>
      </div>
      )
    }
  }
}

export default App;
