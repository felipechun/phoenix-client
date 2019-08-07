import React, { Component, Fragment } from 'react';
import FirstCompanyResponse from '../ProductForms/FirstCompanyResponse/FirstCompanyResponse';
import ToRepair from '../ProductForms/ToRepair/ToRepair';
import RepairServiceOrder from '../ProductForms/RepairServiceOrder/RepairServiceOrder';
import CompanyRepairYesOrNo from '../ProductForms/CompanyRepairYesOrNo/CompanyRepairYesOrNo';
import SendToCompany from '../ProductForms/SendToCompany/SendToCompany';
import SendToStore from '../ProductForms/SendToStore/SendToStore';
import ProductFigure from './ProductFigure';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.singleProduct,
      user: this.props.userObj,
      status: false,
    }
    // this.status = false;
  }

  render() {
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
       console.log('ENTROU')
      return (
        <div>
          {/* INSERT SELL FORM DISPLAY COMPONENT */}

          {/* TO REPAIR DISPLAY COMPONENT */}

          {/* REPAIR SERVICE ORDER FORM COMPONENT */}
          <RepairServiceOrder productId={this.state.product._id} />
        </div>
      )

    
    } else if (this.state.product.status === 'OrderRepair' && this.state.user.role === 'Admin') {
      return (
        <div>
          {/* INSERT SELL FORM DISPLAY COMPONENT */}

          {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}

          {/* TO REPAIR DISPLAY COMPONENT */}

          {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}

          {/* COMPANY REPAIR YES OR NO FORM COMPONENT */}
          <CompanyRepairYesOrNo productId={this.state.product._id} />
        </div>
      )
    } else if (this.state.product.status === 'WantRepair' && this.state.user.role === 'Company') {
      if (this.state.product.repairYesNo === 'Yes') {
        return (
          <div>
            {/* INSERT SELL FORM DISPLAY COMPONENT */}
  
            {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}

            {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}

            {/* COMPANY REPAIR YES DISPLAY COMPONENT */}

            {/* REPAIR SEND TO COMPANY FORM COMPONENT */}
            <SendToCompany productId={this.state.product._id}/>
          </div>
        )
      } else if (this.state.product.repairYesNo === 'No') {
        return (
          <div>
          {/* INSERT SELL FORM DISPLAY COMPONENT */}

          {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}

          {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}

          {/* COMPANY REPAIR NOOOOO DISPLAY COMPONENT */}

          {/* REPAIR SEND TO COMPANY FORM COMPONENT */}
          <SendToCompany productId={this.state.product._id}/>
        </div>
        )
      } else
      return (
        <h5>Company did not send a message. Something went wrong</h5>
      )
    } else if (this.state.product.status === 'SendCompany' && this.state.user.role === 'Admin') {
      if (this.state.product.repairYesNo === 'Yes') {
        return (
          <div>
            {/* INSERT SELL FORM DISPLAY COMPONENT */}
  
            {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}
  
            {/* TO REPAIR DISPLAY COMPONENT */}
  
            {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
  
            {/* COMPANY REPAIR YES DISPLAY COMPONENT */}
  
            {/* REPAIR SENT TO COMPANY DISPLAY COMPONENT */}
  
            {/* SEND TO STORE FORM COMPONENT */}
            <SendToStore productId={this.state.product._id}/>
          </div>
        )
      } else if (this.state.product.repairYesNo === 'No') {
        return (
          <div>
            {/* INSERT SELL FORM DISPLAY COMPONENT */}
  
            {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}
  
            {/* TO REPAIR DISPLAY COMPONENT */}
  
            {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
  
            {/* COMPANY REPAIR NO DISPLAY COMPONENT */}
  
            {/* REPAIR SENT TO COMPANY DISPLAY COMPONENT */}
  
            {/* SEND TO STORE FORM COMPONENT */}
            <SendToStore productId={this.state.product._id}/>
          </div>
        )
      } 

    } else if (this.state.product.status === 'toStore' && this.state.user.role === 'Admin') {
      if (this.state.product.repairYesNo === 'Yes') {
        return (
          <div>
            {/* INSERT SELL FORM DISPLAY COMPONENT */}
  
            {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}
  
            {/* TO REPAIR DISPLAY COMPONENT */}
  
            {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
  
            {/* COMPANY REPAIR YES DISPLAY COMPONENT */}
  
            {/* REPAIR SENT TO COMPANY DISPLAY COMPONENT */}
  
            {/* SENt TO STORE DISPLAY COMPONENT */}
            
          </div>
        )
      } else if (this.state.product.repairYesNo === 'No') {
        return (
          <div>
            {/* INSERT SELL FORM DISPLAY COMPONENT */}
  
            {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}
  
            {/* TO REPAIR DISPLAY COMPONENT */}
  
            {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
  
            {/* COMPANY REPAIR NO DISPLAY COMPONENT */}
  
            {/* REPAIR SENT TO COMPANY DISPLAY COMPONENT */}
  
            {/* SENT TO STORE DISPLAY COMPONENT */}

          </div>
        )
      }

    } else if (this.state.product.status === 'toStore' && this.state.user.role === 'Company') {
      if (this.state.product.repairYesNo === 'Yes') {
        return (
          <div>
            {/* INSERT SELL FORM DISPLAY COMPONENT */}
    
            {/* TO REPAIR DISPLAY COMPONENT */}
  
            {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
  
            {/* COMPANY REPAIR YES DISPLAY COMPONENT */}
  
            {/* REPAIR SENT TO COMPANY DISPLAY COMPONENT */}
  
            {/* SENt TO STORE DISPLAY COMPONENT */}
            
          </div>
        )
      } else if (this.state.product.repairYesNo === 'No') {
        return (
          <div>
            {/* INSERT SELL FORM DISPLAY COMPONENT */}
    
            {/* TO REPAIR DISPLAY COMPONENT */}
  
            {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
  
            {/* COMPANY REPAIR NO DISPLAY COMPONENT */}
  
            {/* REPAIR SENT TO COMPANY DISPLAY COMPONENT */}
  
            {/* SENT TO STORE DISPLAY COMPONENT */}
            
          </div>
        )
      } 

    } else if (this.state.product.status === 'toStore' && this.state.user.role === 'Customer') {
      return (
        <div>
          {/* INSERT SELL FORM DISPLAY COMPONENT */}

          {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}

          {/* TO REPAIR DISPLAY COMPONENT */}
      
          {/* SENt TO STORE DISPLAY COMPONENT */}
          
        </div>
      )
    } else {
      return (
        <div> <h1>NO WAY JOSE</h1></div>
      );
    }
  }
}

export default ProductCard;