import React, { Component } from 'react'
import AuthService from '../../authentication/auth-service/auth-service';
import SubmitBtn from '../../buttons/SubmitBtn';

class SendToStore extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'ToStore',
      finalName: '',
      onSale: '',
      sellingPrice: '',
      totalPrice: '',
      comission: '',
      finalDescription: '',
      // finalImageUrl: '', 
      };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const status = this.state.status
    const finalName = this.state.finalName;
    const onSale = this.state.onSale;
    const sellingPrice = this.state.sellingPrice;
    const totalPrice = this.state.totalPrice;
    const comission = this.state.comission;
    const finalDescription = this.state.finalDescription;
    // const finalImageUrl = this.state.finalImageUrl;
  
    this.service.updateProductStatus(status, finalName, onSale, sellingPrice, totalPrice, comission, finalDescription, ) // finalImageUrl
    .then( response => {
        this.setState({
          status: '',
          finalName: '',
          onSale: '',
          sellingPrice: '',
          totalPrice: '',
          comission: '',
          finalDescription: '',
          // finalImageUrl: '', 
        });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleCheckbox = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
            <div className="card">
              <h5 className="card-header">Final Review</h5>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Name to be displayed in store</label>
                    <input type="text" name="finalName" className="form-control" value={this.state.finalName} required onChange={ e => this.handleChange(e)} placeholder="Brand of the product"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Description to be displayed in store</label>
                    <textarea className="form-control" name="finalDescription" value={this.state.finalDescription} required onChange={ e => this.handleChange(e)} placeholder="Include all necessary information such as product specs, condition, and repairs done on product" rows="3"></textarea>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Selling Price</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input type="text" name="sellingPrice" className="form-control" value={this.state.sellingPrice} required onChange={ e => this.handleChange(e)} placeholder="How much the product is worth"  />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Commission</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input type="text" name="comission" className="form-control" value={this.state.comission} required onChange={ e => this.handleChange(e)} placeholder="Phix's commission"  />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Total Price</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input type="text" name="totalPrice" className="form-control" value={this.state.totalPrice} required onChange={ e => this.handleChange(e)} placeholder="Selling price + Commission"  />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-control card-title font-weight-bold">
                      On Sale:&nbsp;&nbsp;
                      <input
                        name="onSale"
                        type="checkbox"
                        checked={this.state.onSale}
                        onChange={this.handleCheckbox} />
                    </label>
                  </div>
                  <SubmitBtn type="submit" className="btn btn-outline-success float-right">Send the product to the store</SubmitBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SendToStore;
