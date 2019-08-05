import React, { Component, Fragment } from 'react';
import FirstCompanyResponse from '../ProductForms/FirstCompanyResponse/FirstCompanyResponse';
import ToRepair from '../ProductForms/ToRepair/ToRepair';
import RepairServiceOrder from '../ProductForms/RepairServiceOrder/RepairServiceOrder';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.singleProduct,
      user: this.props.userObj,
    }
  }
  
  render() {

    const isRepair = false;

    // console.log(this.state.product._id);
    if (this.state.product.status === 'Request' && this.state.user.role === 'Admin') {
      return (
        <div>
          <FirstCompanyResponse productId={this.state.product._id} />
        </div>
      )
    } else if (this.state.product.status === 'FirstResponse' && this.state.user.role === 'Customer') {
      
      return(
        <div>
          {/* INSERT SELL FORM DISPLAY COMPONENT */}

          {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}

          {/* TO REPAIR FORM COMPONENT */}
          <ToRepair productId={this.state.product._id} companyObj={this.state.product.idCompany}/>

        </div>
      )
    } else if (this.state.product.status === 'ToRepair' && this.state.user.role === 'Company') { 
      return (
        <div>
          {/* INSERT SELL FORM DISPLAY COMPONENT */}

          {/* TO REPAIR DISPLAY COMPONENT */}

          {/* REPAIR SERVICE ORDER FORM COMPONENT */}
          <RepairServiceOrder productId={this.state.product._id} />
        </div>
      )

    
    } else
    return (
      <div>
       <h1>NO WAY JOSE</h1>
      </div>





      // <div className="col-6">
      //   <div className="card">
      //     <div className="card-header">Product Timeline</div>
      //     <img src={this.state.product.imageUrl} className="card-img-top" alt={this.state.product.name} height="100" />
      //     <div className="card-body">
      //       <h6 className="card-title text-uppercase">Request Status</h6>
      //       <p className="card-text">
      //         <span className="font-weight-bold">Destiny:</span> {this.state.product.path}<br/>
      //         <span className="font-weight-bold">Category:</span> {this.state.product.categories}<br/>
      //         <span className="font-weight-bold">Brand:</span> {this.state.product.brand}<br/>
      //         <span className="font-weight-bold">Name:</span> {this.state.product.name}<br/>
      //         <span className="font-weight-bold">Model:</span> {this.state.product.model}<br/>
      //         <span className="font-weight-bold">Condition:</span> {this.state.product.statusProduct}<br/>
      //         <span className="font-weight-bold">Estimated Price:</span> R$ {this.state.product.starterPrice}<br/>
      //         <span className="font-weight-bold">Description:</span> {this.state.product.clientDescription}
      //       </p>
      //     </div>
      //     <ul className="list-group list-group-flush">
      //       <li className="list-group-item">
      //         <h6 className="card-title text-uppercase">Company First Response Status</h6>
      //         <p className="card-text">
      //           <span className="font-weight-bold">Price:</span> {this.state.product.companyPrice}<br/>
      //           <span className="font-weight-bold">Description:</span> {this.state.product.companyDescription}
      //         </p>
      //       </li>
      //       <li className="list-group-item">
      //         <h6 className="card-title text-uppercase">To Repair Status</h6>
      //         <div className="alert alert-warning" role="alert">
      //           <p className="card-text">The user has sent the device in for repair/maintenance.</p>
      //         </div>
      //       </li>
      //       <li className="list-group-item">
      //         <h6 className="card-title text-uppercase">Repair Service Order Status</h6>
      //         <img src={this.state.repairImageUrl} className="card-img-top mb-1" alt={this.state.name} height="100" />
      //         <p className="card-text">
      //           <span className="font-weight-bold">Price: R$ </span> {this.state.repairPrice}<br />
      //           <span className="font-weight-bold">Description:</span> {this.state.repairDescription}<br />
      //           <span className="font-weight-bold">Model:</span> {this.state.model}<br />
      //           <span className="font-weight-bold">Specifications:</span> {this.state.specs}<br />
      //           <span className="font-weight-bold">Brand:</span> {this.state.brand}
      //         </p>
      //       </li>
      //       <li className="list-group-item">
      //         <h6 className="card-title text-uppercase">Company Repair Yes or No</h6>
      //         { isRepair
      //           ? <div className="alert alert-warning" role="alert">
      //               <p className="card-text">The user has sent the device in for repair/maintenance.</p>
      //             </div>
      //           : <div className="alert alert-danger" role="alert">
      //               <p className="card-text">Do not repair the product and ship it to us in its current state.</p>
      //             </div>
      //         }
      //       </li>
      //       <li className="list-group-item">
      //         <h6 className="card-title text-uppercase">Send to Company</h6>
      //         <div className="alert alert-success" role="alert">
      //           <p className="card-text">The product has been sent to Phix.</p>
      //         </div>
      //       </li>
      //       <li className="list-group-item">
      //         <h6 className="card-title text-uppercase">Send to Store</h6>
      //         <span className="font-weight-bold">Name:</span> {this.state.finalName}<br />
      //         { this.state.onSale === true
      //           ? <Fragment><span className="font-weight-bold">Sale:</span> Yes<br /></Fragment>
      //           : <Fragment><span className="font-weight-bold">Sale:</span> No<br /></Fragment>
      //         }
      //         <span className="font-weight-bold">Price:</span> {this.state.sellingPrice}<br />
      //         <span className="font-weight-bold">Comission:</span> {this.state.comission}<br />
      //         <span className="font-weight-bold">Description:</span> {this.state.finalDescription}<br />
      //       </li>
      //     </ul>
      //     <div className="card-body">
      //       <a href="#" className="card-link">Card link</a>
      //       <a href="#" className="card-link">Another link</a>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default ProductCard;
