import React, { Component } from 'react'
import AuthService from '../../authentication/auth-service/auth-service';
import SubmitBtn from '../../buttons/SubmitBtn';

class CompanyRepairYesOrNo extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'WantRepair',
      repairYesNo: '',
      productId: this.props.productId,
      };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const status = this.state.status;
    const repairYesNo = this.state.repairYesNo;
    const productId = this.state.productId;
  
    this.service.updateRepairYesOrNo(status, repairYesNo, productId)
    .then( response => {
        this.setState({
          status: '',
          repairYesNo: '',
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


  render() {
    return (
      // INSERT SERVICE ORDER DISPLAY COMPONENT
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
            <div className="card">
              <h5 className="card-header">Repair Device?</h5>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label className="card-title font-weight-bold">Repair Device?</label>
                    <select name="repairYesNo" required onChange={ e => this.handleChange(e)} className="form-control" >
                      <option value="" >Choose one</option>
                      <option value="Yes">Yes, repair the device</option>
                      <option value="No">No, don't repair the device</option>
                    </select>
                  </div>
                  <SubmitBtn type="submit" className="btn btn-outline-success float-right">Send response to Repair Company</SubmitBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyRepairYesOrNo;
