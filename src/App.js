import React, { Component } from "react";
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
import AdminProfile from "./components/AdminProfile/AdminProfile";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";
import UserDetails from "./components/UserDetails/UserDetails";
import AfterSignup from "./components/AfterSignup/AfterSignup";
import Checkout from "./components/Cart/Checkout/Checkout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      displayStore: [],
      shoppingCart: [],
      total: '',
      cartLength: 0,
      filteredProducts:[],
      filter: false,
      searchQuery:'',
    };
    this.service = new AuthService();
    this.status = false;
  }

  componentDidMount = () => {
    this.service.getToStore()
      .then(answer => {
        this.setState({
          displayStore: answer,
        })
      })
      .catch(err => console.log(err))
  }

  // method to dynamic filter
  filterHandler = (event) => {
    if (event.target.value !== '') {
      this.setState({
        filter: true,
        searchQuery: event.target.value,
      })
    } else {
      this.setState({
        filter: false,
        searchQuery: event.target.value,
      })
    }
    let allProducts = [...this.state.displayStore];
    let search = this.state.searchQuery.toUpperCase()
    const filteredProducts = allProducts.filter((item) => {
      return item.finalName.toUpperCase().includes(search)
    });
    this.setState({
      filteredProducts,
    })
  }

  getProductsFromApi = (request) => {
    if (request === 'All') {
      this.service.getToStore()
        .then(answer => {
          this.setState({
            displayStore: answer,
            filter: false,
            searchQuery:'',
          })
        })
        .catch(err => console.log(err))
    } else {
      this.service.getSpecific(request)
        .then(answer => {
          this.setState({
            displayStore: answer,
            filter: false,
            searchQuery:'',
          })
        })
        .catch(err => console.log(err))
    }
  }

  clearQuery = () => {
    this.setState({
      filter: false,
      searchQuery:'',
    })
  }

  // Add products to shopping cart
  getProducts = (props) => {
    const cart = [...this.state.shoppingCart]
    let total = { ...this.state.total }
    if (!cart.includes(props)) {
      cart.push(props)
    }
    let check = cart.map(item => parseInt(item.totalPrice, 10)).reduce((acc, cv) => acc + cv, 0)
    total = check.toString()
    let cartLength = cart.length;

    this.setState({
      shoppingCart: cart,
      total,
      cartLength
    })
  }

  // remove item from shopping cart
  removeFromCart = (e) => {
    const cart = [...this.state.shoppingCart]
    let total = { ...this.state.total }
    cart.splice(e, 1)
    let check = cart.map(item => parseInt(item.totalPrice, 10)).reduce((acc, cv) => acc + cv, 0)
    let cartLength = cart.length;
    total = check.toString()
    this.setState({
      shoppingCart: cart,
      total,
      cartLength
    })
  }

  // will save the shopping cart in the api
  checkout = () => {
    const cart = [...this.state.shoppingCart]
    const products = cart.map(item => item._id)
    let total = this.state.total;
    this.service.cartCheckout(products, total)
      .then(() => {
        this.setState({
          shoppingCart: [],
          total: '',
          cartLength: 0,
        })
      })
      .catch(err => console.log(err))

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
    } else if (this.state.loggedInUser && this.state.loggedInUser.status === 'Active') {

      return (
        <div className="App">
          <Navbar isLoggedIn={this.state.loggedInUser} logout={this.getTheUser} cartLength={this.state.cartLength} clearQuery={this.clearQuery} />
          <main role="main">
            <Switch>
              <Route exact path="/" render={(props) => <Home userObj={this.state.loggedInUser} getProductsFromApi={this.getProductsFromApi} featuredProducts={this.state.displayStore} />} />
              <Route exact path="/about" component={About}/>
              <Route exact path="/products/" render={(props) => <Showcase state={this.state.searchQuery} products={this.state.filter ? this.state.filteredProducts : this.state.displayStore} filterHandler={this.filterHandler} getProducts={this.getProducts} getProductsFromApi={this.getProductsFromApi} />} />
              <Route exact path="/products/:id" render={(props) => <ProductDetails products={this.state.displayStore} getProducts={this.getProducts} {...props} />} />
              <Route exatc path="/after-signup"  render={(props) => <AfterSignup getTheUser={this.getTheUser} {...props} />} />
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Both" path="/profile" component={Profile} />
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Admin" path="/admin" component={AdminProfile} />
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Company" path="/company-signup" component={CompanyRegister} />
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Customer" path="/sell-form" component={SellForm}/>
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Customer" path="/edit-profile" component={UserDetails} />
              <ProtectedRoute exact typeRole="Customer" user={this.state.loggedInUser} path="/cart" shoppingCart={this.state.shoppingCart} checkout={this.checkout} remove={this.removeFromCart} total={this.state.total} component={Cart} />
              <ProtectedRoute exact typeRole="Customer" user={this.state.loggedInUser} path="/cart/checkout" component={Checkout} />
            </Switch>
          </main>
          <Footer/>
        </div>
      );
    } else if(this.state.loggedInUser && this.state.loggedInUser.status === 'Pending'){
      return(
        <div className="App">
          <Navbar isLoggedIn={this.state.loggedInUser} logout={this.getTheUser} clearQuery={this.clearQuery} />
          <h1>Precisa autenticar conta no Email.</h1>
          <main role="main">
            <Switch>
              <Route exact path="/" render={(props) => <Home userObj={this.state.loggedInUser} getProductsFromApi={this.getProductsFromApi} featuredProducts={this.state.displayStore} />} />
              <Route exact path="/about" component={About}/>
              <Route exact path="/products/" render={(props) => <Showcase state={this.state.searchQuery} products={this.state.filter ? this.state.filteredProducts : this.state.displayStore} filterHandler={this.filterHandler} getProducts={this.getProducts} getProductsFromApi={this.getProductsFromApi} />} />
              <Route exatc path="/after-signup"  render={(props) => <AfterSignup getTheUser={this.getTheUser} {...props} />} />
              <Route exact path="/products/:id" render={(props) => <ProductDetails products={this.state.displayStore} getProducts={this.getProducts} {...props} />} />
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Both" path="/profile" component={Profile} />
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Customer" path="/edit-profile" component={UserDetails} />
              <ProtectedRoute exact typeRole="Customer" user={this.state.loggedInUser} path="/cart" shoppingCart={this.state.shoppingCart} checkout={this.checkout} remove={this.removeFromCart} total={this.state.total} component={Cart} />
              <ProtectedRoute exact typeRole="Customer" user={this.state.loggedInUser} path="/cart/checkout" component={Checkout} />
            </Switch>
          </main>
          <Footer/>
        </div>
        )
    } else {
      return (
        <div className="App">
          <Navbar isLoggedIn={this.state.loggedInUser} logout={this.getTheUser} clearQuery={this.clearQuery} />
          <main role="main">
            <Switch>
              <Route exact path="/" render={(props) => <Home getProductsFromApi={this.getProductsFromApi} featuredProducts={this.state.displayStore} />} />
              <Route exact path="/about" component={About} />
              <Route exact path="/signup" render={() => <Signup getUser={this.getTheUser} />} />
              <Route exact path="/login" render={() => <Login getUser={this.getTheUser} />} />
              <Route exact path="/products/" render={(props) => <Showcase state={this.state.searchQuery} products={this.state.filter ? this.state.filteredProducts : this.state.displayStore} filterHandler={this.filterHandler} getProducts={this.getProducts} getProductsFromApi={this.getProductsFromApi} />} />
              <Route exact path="/products/:id" render={(props) => <ProductDetails products={this.state.displayStore} getProducts={this.getProducts} {...props} />} />
              <Route exatc path="/after-signup"  render={(props) => <AfterSignup getTheUser={this.getTheUser} {...props} />} />
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Both" path="/profile" component={Profile} />
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Admin" path="/admin" component={AdminProfile} />
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Company" path="/company-signup" component={CompanyRegister} />
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Customer" path="/sell-form" component={SellForm}/>
              <ProtectedRoute exact user={this.state.loggedInUser} typeRole="Customer" path="/edit-profile" component={UserDetails} />
              <ProtectedRoute exact typeRole="Customer" user={this.state.loggedInUser} path="/cart" shoppingCart={this.state.shoppingCart} checkout={this.checkout} remove={this.removeFromCart} total={this.state.total} component={Cart} />
              <ProtectedRoute exact typeRole="Customer" user={this.state.loggedInUser} path="/cart/checkout" component={Checkout} />
            </Switch>
          </main>
          <Footer />
        </div>
      );
    }
  }
}
export default App;