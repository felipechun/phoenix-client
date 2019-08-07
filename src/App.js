import React, { Component } from "react";
//import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Profile from "./components/Profile/Profile";
import About from './components/About/About';
import Showcase from './components/Showcase/Showcase';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
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
import AdminProfile from "./components/AdminProfile/AdminProfile";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";

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
    // console.log(this.state.loggedInUser)
    this.fetchUser();
    if (!this.status) {
      this.status = true;
      return <div className="App" />;
    } else if (this.state.loggedInUser && this.state.loggedInUser.status === 'Pending') {
      console.log(this.state.loggedInUser, 'LOGGED IN USER');
      return (
        <div className="App">
          <Navbar isLoggedIn={this.state.loggedInUser} logout={this.getTheUser}/>
          {/* <h1>LOGGED IN!</h1> */}
          <main role="main">
            <Switch>
              <Route exact path="/" render={(props) => <Home userObj={this.state.loggedInUser} />} />
              <Route exact path="/about" component={About}/>
              <ProtectedRoute exact user={this.state.loggedInUser} path="/profile" component={Profile} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/admin" component={AdminProfile} />
              <Route exact path="/products/" component={Showcase} />
              <Route exact path="/products/product" component={ProductDetails} />
              <Route exact path="/cart" component={Cart} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/company-signup" component={CompanyRegister} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/sell-form" component={SellForm}/>
              <ProtectedRoute exact user={this.state.loggedInUser} path="/first-response" component={FirstCompanyResponse} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/to-repair" component={ToRepair} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/service-order" component={RepairServiceOrder} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/repair-decision" component={CompanyRepairYesOrNo} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/send-to-company" component={SendToCompany} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/send-to-store" component={SendToStore} />
            </Switch>
          </main>
          <Footer/>
        </div>
      );
    } else if(this.state.loggedInUser && this.state.loggedInUser.status === 'Active'){
      console.log(this.state.loggedInUser);
      return(     
        <div className="App">
          <Navbar isLoggedIn={this.state.loggedInUser} logout={this.getTheUser}/>
          <h1>ACEITA EMAIL PORRA</h1>
          <main role="main">
            <Switch>
              <Route exact path="/" render={(props) => <Home userObj={this.state.loggedInUser} />} />
              <Route exact path="/about" component={About}/>
              <Route exact path="/products/" component={Showcase} />
              <Route exact path="/products/product" component={ProductDetails} />
              <Route exact path="/cart" component={Cart} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/profile" component={Profile} />
            </Switch>
          </main>
          <Footer/>
        </div>
        )
    } else {
      return (
        <div className="App">
          <Navbar isLoggedIn={this.state.loggedInUser} logout={this.getTheUser} />
          <main role="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/signup" render={() => <Signup getUser={this.getTheUser} />} />
              <Route exact path="/login" render={() => <Login getUser={this.getTheUser} />} />
              <Route exact path="/products/" component={Showcase} />
              <Route exact path="/products/product" component={ProductDetails} />
              <Route exact path="/cart" component={Cart} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/profile" component={Profile} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/admin" component={AdminProfile} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/company-signup" component={CompanyRegister} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/sell-form" component={SellForm}/>
              <ProtectedRoute exact user={this.state.loggedInUser} path="/first-response" component={FirstCompanyResponse} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/to-repair" component={ToRepair} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/service-order" component={RepairServiceOrder} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/repair-decision" component={CompanyRepairYesOrNo} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/send-to-company" component={SendToCompany} />
              <ProtectedRoute exact user={this.state.loggedInUser} path="/send-to-store" component={SendToStore} />
            </Switch>
          </main>
          <Footer />
        </div>
      );
    }
  }
}
export default App;