import React, { Component } from "react";
//import './App.css';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Showcase from './components/Showcase/Showcase';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Chart from './components/Chart/Chart';
import AuthService from './components/authentication/auth-service/auth-service';
import Signup from './components/authentication/Signup/Signup';
import Login from './components/authentication/Login/Login';
import SellForm from './components/ProductForms/SellForm/SellForm';
import CompanyRegister from './components/CompanyRegister/CompanyRegister';
import FirstCompanyResponse from './components/ProductForms/FirstCompanyResponse/FirstCompanyResponse';
import ToRepair from './components/ProductForms/ToRepair/ToRepair';
import RepairServiceOrder from './components/ProductForms/RepairServiceOrder/RepairServiceOrder';
import CompanyRepairYesOrNo from './components/ProductForms/CompanyRepairYesOrNo/CompanyRepairYesOrNo';
import SendToCompany from './components/ProductForms/SendToCompany/SendToCompany';
import SendToStore from './components/ProductForms/SendToStore/SendToStore';
=======
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Showcase from "./components/Showcase/Showcase";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import AuthService from "./components/authentication/auth-service/auth-service";
import Signup from "./components/authentication/Signup/Signup";
import Login from "./components/authentication/Login/Login";
import SellForm from "./components/SellForm/SellForm";
import CompanyRegister from "./components/CompanyRegister/CompanyRegister";
>>>>>>> cfce82e05d3b8674484593bc6712be6061c4a962

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.status = false;
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  };

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    if (!this.status) {
      this.status = true;
      return <div className="App" />;
    } else if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Navbar isLoggedIn={this.state.loggedInUser} logout={this.getTheUser}/>
          <h1>LOGGED IN!</h1>
          <main role="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About}/>
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/products/" component={Showcase} />
              <Route exact path="/products/product" component={ProductDetails} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/company-signup" component={CompanyRegister} />
              <Route exact path="/sell-form" component={SellForm}/>
              <Route exact path="/first-response" component={FirstCompanyResponse} />
              <Route exact path="/to-repair" component={ToRepair} />
              <Route exact path="/service-order" component={RepairServiceOrder} />
              <Route exact path="/repair-decision" component={CompanyRepairYesOrNo} />
              <Route exact path="/send-to-company" component={SendToCompany} />
              <Route exact path="/send-to-store" component={SendToStore} />
            </Switch>
          </main>
          <Footer/>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar
            isLoggedIn={this.state.loggedInUser}
            logout={this.getTheUser}
          />
          {/* <h1>HELLO NOT LOGGED IN</h1> */}
          <main role="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/signup"
                render={() => <Signup getUser={this.getTheUser} />}
              />
              <Route
                exact
                path="/login"
                render={() => <Login getUser={this.getTheUser} />}
              />
              <Route exact path="/sell-form" component={SellForm} />
              <Route exact path="/products/" component={Showcase} />
              <Route exact path="/products/product" component={ProductDetails} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </main>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
