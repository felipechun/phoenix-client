import React, { Component } from 'react'
import AuthService from '../../authentication/auth-service/auth-service';
import SubmitBtn from '../../buttons/SubmitBtn';

class RepairServiceOrder extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'OrderRepair',
      repairPrice: '',
      repairDescription: '',
      model: '',
      specs: '',
      brand: '',
      repairImageUrl: '',
      productId: this.props.productId,
      };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const status = this.state.status;
    const repairPrice = this.state.repairPrice;
    const repairDescription = this.state.repairDescription;
    const model = this.state.model;
    const specs = this.state.specs;
    const brand = this.state.brand;
    const repairImageUrl = this.state.repairImageUrl;
    const productId = this.state.productId;
  
    this.service.updateToOrderRepair(status, repairPrice, repairDescription, model, specs, brand, repairImageUrl, productId)
    .then( response => {
        this.setState({
          status: '',
          repairPrice: '',
          repairDescription: '',
          model: '',
          specs: '',
          brand: '',
          repairImageUrl: '',
          productId: '',
        });
        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // repairImageUrl => this name has to be the same as in the model since we pass
    uploadData.append("repairImageUrl", e.target.files[0]);
    
    this.service.handleUpload(uploadData)
    .then(response => {
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
        this.setState({ repairImageUrl: response.secure_url }, () => console.log('IMAGE', this.state.repairImageUrl));
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
            <div className="card">
              <h5 className="card-header">Service Order</h5>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Product Brand</label>
                    <input type="text" name="brand" className="form-control" value={this.state.brand} required onChange={ e => this.handleChange(e)} placeholder="Brand of the product"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Model</label>
                    <input type="text" name="model" className="form-control" value={this.state.model} required onChange={ e => this.handleChange(e)} placeholder="Product model"  />
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Product Specifications</label>
                  <textarea className="form-control" name="specs" value={this.state.specs} required onChange={ e => this.handleChange(e)} placeholder="Please list all the product specifications" rows="3"></textarea>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Description of necessary repairs</label>
                  <textarea className="form-control" name="repairDescription" value={this.state.repairDescription} required onChange={ e => this.handleChange(e)} placeholder="Please describe all the repairs that are needed" rows="3"></textarea>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Repair Price</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input type="text" name="repairPrice" className="form-control" value={this.state.repairPrice} required onChange={ e => this.handleChange(e)}  />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Please upload a picture the product</label>
                    <input type="file" className="form-control-file" required onChange={ e => this.handleFileUpload(e)}/>
                  </div>
                  <SubmitBtn type="submit" className="btn btn-outline-success float-right">Submit</SubmitBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RepairServiceOrder;
