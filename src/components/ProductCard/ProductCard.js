import React, { Component, Fragment } from 'react';
import FirstCompanyResponse from '../ProductForms/FirstCompanyResponse/FirstCompanyResponse';
import ToRepair from '../ProductForms/ToRepair/ToRepair';
import RepairServiceOrder from '../ProductForms/RepairServiceOrder/RepairServiceOrder';
import CompanyRepairYesOrNo from '../ProductForms/CompanyRepairYesOrNo/CompanyRepairYesOrNo';
import SendToCompany from '../ProductForms/SendToCompany/SendToCompany';
import SendToStore from '../ProductForms/SendToStore/SendToStore';
import ProductFigure from './ProductFigure';

import RequestDisplay from '../ProductDisplays/RequestDisplay/RequestDisplay';
import FirstCompanyResponseDisplay from '../ProductDisplays/FirstCompanyResponseDisplay/FirstCompanyResponseDisplay';
import ToRepairDisplay from '../ProductDisplays/ToRepairDisplay/ToRepaiDisplay';
import RepairServiceOrderDisplay from '../ProductDisplays/RepairServiceOrderDisplay/RepairServiceOrderDisplay';
import CompanyRepairYesOrNoDisplay from '../ProductDisplays/CompanyRepairYesOrNoDisplay/CompanyRepairYesOrNoDisplay';
import SendToCompanyDisplay from '../ProductDisplays/SendToCompanyDisplay/SendToCompanyDisplay';
import SendToStoreDisplay from '../ProductDisplays/SendToStoreDisplay/SendToStoreDisplay';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.singleProduct,
      user: this.props.userObj,
      // index: this.props.idNum
    }
    // this.status = false;
  }


  render() {
    if (this.state.product.status === 'Request' && this.state.user.role === 'Admin') {
      // console.log(this.props.idNum, 'THE KEYYYYY');
      
      return (
        <div className="row">
          <div className="col-12">
            <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
            <div className="collapse" id={`a${this.state.product._id}`}>
              <div className="card">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Request</a>
                    <a className="nav-item nav-link active" id="companyResponse-tab" data-toggle="tab" href={`#companyResponse${this.state.product._id}`} role="tab" aria-controls="companyResponse" aria-selected="false">Phix's Reply</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>
                  </div>
                  <div className="tab-pane fade show active" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="companyResponse-tab">
                    <FirstCompanyResponse productId={this.state.product._id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.state.product.status === 'FirstResponse' && this.state.user.role === 'Customer') {
      console.log(this.state.product.idCompany, "ID COMPANY");
      
      return(
        <div className="row">
          <div className="col-12">
            <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
            <div className="collapse" id={`a${this.state.product._id}`}>
              <div className="card">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Request</a>
                    <a className="nav-item nav-link" id="companyResponse-tab" data-toggle="tab" href={`#companyResponse${this.state.product._id}`} role="tab" aria-controls="companyResponse" aria-selected="false">Phix's Reply</a>
                    <a className="nav-item nav-link active" id="to-repair-tab" data-toggle="tab" href={`#toRepair${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Send to Repair</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                    
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="companyResponse-tab">
                    <FirstCompanyResponseDisplay product={this.state.product} user={this.state.user} />
                  </div>
                  <div className="tab-pane fade show active" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                    <ToRepair productId={this.state.product._id} companyObj={this.state.product.idCompany}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.state.product.status === 'ToRepair' && this.state.user.role === 'Company') {
      return (
        <div className="row">
          <div className="col-12">
            <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
            <div className="collapse" id={`a${this.state.product._id}`}>
              <div className="card">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Request</a>
                    <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#companyResponse${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Phix's Reply</a>
                    <a className="nav-item nav-link active" id="service-order-tab" data-toggle="tab" href={`#serviceOrder${this.state.product._id}`} role="tab" aria-controls="service-order" aria-selected="false">Send to Repair</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                    
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany} />
                  </div>
                  <div className="tab-pane fade show active" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                    <RepairServiceOrder productId={this.state.product._id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.state.product.status === 'OrderRepair' && this.state.user.role === 'Admin') {
      return (
        <div className="row">
        <div className="col-12">
          <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
          <div className="collapse" id={`a${this.state.product._id}`}>
            <div className="card">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="false">Request</a>
                  <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#companyResponse${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Phix's Reply</a>
                  <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#toRepair${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Sent to Repair</a>
                  <a className="nav-item nav-link" id="service-order-tab" data-toggle="tab" href={`#serviceOrder${this.state.product._id}`} role="tab" aria-controls="service-order" aria-selected="false">Service Order</a>
                  <a className="nav-item nav-link active" id="yes-or-no-tab" data-toggle="tab" href={`#yesOrNo${this.state.product._id}`} role="tab" aria-controls="yes-or-no" aria-selected="true">Repair Decision</a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                  
                </div>
                <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                  <FirstCompanyResponseDisplay product={this.state.product} user={this.state.user} />
                </div>
                <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                  <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany} />                </div>
                <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                  <RepairServiceOrderDisplay product={this.state.product} />
                </div>
                <div className="tab-pane fade show active" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                  <CompanyRepairYesOrNo productId={this.state.product._id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    } else if (this.state.product.status === 'WantRepair' && this.state.user.role === 'Company') {
      if (this.state.product.repairYesNo === 'Yes') {
        return (
          <div className="row">
            <div className="col-12">
              <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
              <div className="collapse" id={`a${this.state.product._id}`}>
                <div className="card">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="false">Request</a>
                      <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#companyResponse${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Phix's Reply</a>
                      <a className="nav-item nav-link" id="service-order-tab" data-toggle="tab" href={`#serviceOrder${this.state.product._id}`} role="tab" aria-controls="service-order" aria-selected="false">Service Order</a>
                      <a className="nav-item nav-link" id="yes-or-no-tab" data-toggle="tab" href={`#yesOrNo${this.state.product._id}`} role="tab" aria-controls="yes-or-no" aria-selected="false">Repair Decision</a>
                      <a className="nav-item nav-link active" id="sendToCompany-tab" data-toggle="tab" href={`#sendToCompany${this.state.product._id}`} role="tab" aria-controls="sendToCompany" aria-selected="true">Please Repair</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                      
                    </div>
                    <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                      <FirstCompanyResponseDisplay product={this.state.product} user={this.state.user} />
                    </div>
                    <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                      <CompanyRepairYesOrNoDisplay alert="alert alert-success" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                      <SendToCompany productId={this.state.product._id} productObj={this.state.product}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      } else if (this.state.product.repairYesNo === 'No') {
        return (
          <div className="row">
          <div className="col-12">
            <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
            <div className="collapse" id={`a${this.state.product._id}`}>
              <div className="card">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="false">Request</a>
                    <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#companyResponse${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Phix's Reply</a>
                    <a className="nav-item nav-link" id="service-order-tab" data-toggle="tab" href={`#serviceOrder${this.state.product._id}`} role="tab" aria-controls="service-order" aria-selected="false">Service Order</a>
                    <a className="nav-item nav-link" id="yes-or-no-tab" data-toggle="tab" href={`#yesOrNo${this.state.product._id}`} role="tab" aria-controls="yes-or-no" aria-selected="false">Repair Decision</a>
                    <a className="nav-item nav-link active" id="sendToCompany-tab" data-toggle="tab" href={`#sendToCompany${this.state.product._id}`} role="tab" aria-controls="sendToCompany" aria-selected="true">Don't Repair</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                    
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <FirstCompanyResponseDisplay product={this.state.product} user={this.state.user} />
                  </div>
                  <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                    <RepairServiceOrderDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                    <CompanyRepairYesOrNoDisplay alert="alert alert-danger" product={this.state.product} />
                  </div>
                  <div className="tab-pane fade show active" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                    <SendToCompany productId={this.state.product._id} productObj={this.state.product}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      } else
      return (
        <h5>Company did not send a message. Something went wrong</h5>
      )
    } else if (this.state.product.status === 'SendCompany' && this.state.user.role === 'Admin') {
      if (this.state.product.repairYesNo === 'Yes') {
        return (
          <div className="row">
          <div className="col-12">
            <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
            <div className="collapse" id={`a${this.state.product._id}`}>
              <div className="card">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="false">Request</a>
                    <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#companyResponse${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Phix's Reply</a>
                    <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#toRepair${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Sent to Repair</a>
                    <a className="nav-item nav-link" id="service-order-tab" data-toggle="tab" href={`#serviceOrder${this.state.product._id}`} role="tab" aria-controls="service-order" aria-selected="false">Service Order</a>
                    <a className="nav-item nav-link" id="yes-or-no-tab" data-toggle="tab" href={`#yesOrNo${this.state.product._id}`} role="tab" aria-controls="yes-or-no" aria-selected="false">Repair Decision</a>
                    <a className="nav-item nav-link" id="sendToCompany-tab" data-toggle="tab" href={`#sendToCompany${this.state.product._id}`} role="tab" aria-controls="sendToCompany" aria-selected="false">Please Repair</a>
                    <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#sendToStore${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="true">Send to Store</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                    
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <FirstCompanyResponseDisplay product={this.state.product} user={this.state.user} />
                  </div>
                  <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                    <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany} />                  </div>
                  <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                    <RepairServiceOrderDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                    <CompanyRepairYesOrNoDisplay alert="alert alert-success" product={this.state.product} />
                  </div>
                  <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                    <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                  </div>
                  <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                    <SendToStore productId={this.state.product._id}/>             
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      } else if (this.state.product.repairYesNo === 'No') {
        return (
          <div className="row">
          <div className="col-12">
            <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
            <div className="collapse" id={`a${this.state.product._id}`}>
              <div className="card">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="false">Request</a>
                    <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#companyResponse${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Phix's Reply</a>
                    <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#toRepair${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Sent to Repair</a>
                    <a className="nav-item nav-link" id="service-order-tab" data-toggle="tab" href={`#serviceOrder${this.state.product._id}`} role="tab" aria-controls="service-order" aria-selected="false">Service Order</a>
                    <a className="nav-item nav-link" id="yes-or-no-tab" data-toggle="tab" href={`#yesOrNo${this.state.product._id}`} role="tab" aria-controls="yes-or-no" aria-selected="false">Repair Decision</a>
                    <a className="nav-item nav-link" id="sendToCompany-tab" data-toggle="tab" href={`#sendToCompany${this.state.product._id}`} role="tab" aria-controls="sendToCompany" aria-selected="false">Please Repair</a>
                    <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#sendToStore${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="true">Send to Store</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                    
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <FirstCompanyResponseDisplay product={this.state.product} user={this.state.user} />
                  </div>
                  <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                    <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany} />
                  </div>
                  <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                    <RepairServiceOrderDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                    <CompanyRepairYesOrNoDisplay alert="alert alert-danger" product={this.state.product} />
                  </div>
                  <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                    <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                  </div>
                  <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                    <SendToStore productId={this.state.product._id}/>             
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      } 

    } else if (this.state.product.status === 'toStore' && this.state.user.role === 'Admin') {
      if (this.state.product.repairYesNo === 'Yes') {
        return (
          <div className="row">
            <div className="col-12">
              <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
              <div className="collapse" id={`a${this.state.product._id}`}>
                <div className="card">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="false">Request</a>
                      <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#companyResponse${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Phix's Reply</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#toRepair${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Sent to Repair</a>
                      <a className="nav-item nav-link" id="service-order-tab" data-toggle="tab" href={`#serviceOrder${this.state.product._id}`} role="tab" aria-controls="service-order" aria-selected="false">Service Order</a>
                      <a className="nav-item nav-link" id="yes-or-no-tab" data-toggle="tab" href={`#yesOrNo${this.state.product._id}`} role="tab" aria-controls="yes-or-no" aria-selected="false">Repair Decision</a>
                      <a className="nav-item nav-link" id="sendToCompany-tab" data-toggle="tab" href={`#sendToCompany${this.state.product._id}`} role="tab" aria-controls="sendToCompany" aria-selected="false">Please Repair</a>
                      <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#sendToStore${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="true">Sent to Store</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                      
                    </div>
                    <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                      <FirstCompanyResponseDisplay product={this.state.product} user={this.state.user} />
                    </div>
                    <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany} />                    </div>
                    <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                      <CompanyRepairYesOrNoDisplay alert="alert alert-success" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                      <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                      <SendToStoreDisplay product={this.state.product}/>             
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      } else if (this.state.product.repairYesNo === 'No') {
        return (
          <div className="row">
            <div className="col-12">
              <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
              <div className="collapse" id={`a${this.state.product._id}`}>
                <div className="card">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="false">Request</a>
                      <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#companyResponse${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Phix's Reply</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#toRepair${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Sent to Repair</a>
                      <a className="nav-item nav-link" id="service-order-tab" data-toggle="tab" href={`#serviceOrder${this.state.product._id}`} role="tab" aria-controls="service-order" aria-selected="false">Service Order</a>
                      <a className="nav-item nav-link" id="yes-or-no-tab" data-toggle="tab" href={`#yesOrNo${this.state.product._id}`} role="tab" aria-controls="yes-or-no" aria-selected="false">Repair Decision</a>
                      <a className="nav-item nav-link" id="sendToCompany-tab" data-toggle="tab" href={`#sendToCompany${this.state.product._id}`} role="tab" aria-controls="sendToCompany" aria-selected="false">Please Repair</a>
                      <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#sendToStore${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="true">Sent to Store</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                      
                    </div>
                    <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                      <FirstCompanyResponseDisplay product={this.state.product} user={this.state.user} />
                    </div>
                    <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany} />                    </div>
                    <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                      <CompanyRepairYesOrNoDisplay alert="alert alert-danger" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                      <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                      <SendToStoreDisplay product={this.state.product}/>             
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

    } else if (this.state.product.status === 'toStore' && this.state.user.role === 'Company') {
      if (this.state.product.repairYesNo === 'Yes') {
        return (
          <div className="row">
            <div className="col-12">
              <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
              <div className="collapse" id={`a${this.state.product._id}`}>
                <div className="card">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="false">Request</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#toRepair${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Sent to Repair</a>
                      <a className="nav-item nav-link" id="service-order-tab" data-toggle="tab" href={`#serviceOrder${this.state.product._id}`} role="tab" aria-controls="service-order" aria-selected="false">Service Order</a>
                      <a className="nav-item nav-link" id="yes-or-no-tab" data-toggle="tab" href={`#yesOrNo${this.state.product._id}`} role="tab" aria-controls="yes-or-no" aria-selected="false">Repair Decision</a>
                      <a className="nav-item nav-link" id="sendToCompany-tab" data-toggle="tab" href={`#sendToCompany${this.state.product._id}`} role="tab" aria-controls="sendToCompany" aria-selected="false">Please Repair</a>
                      <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#sendToStore${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="true">Sent to Store</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                      
                    </div>
                    <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany} />
                    </div>
                    <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                      <CompanyRepairYesOrNoDisplay alert="alert alert-success" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                      <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                      <SendToStoreDisplay product={this.state.product}/>             
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      } else if (this.state.product.repairYesNo === 'No') {
        return (
          <div className="row">
            <div className="col-12">
              <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
              <div className="collapse" id={`a${this.state.product._id}`}>
                <div className="card">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="false">Request</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#toRepair${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Sent to Repair</a>
                      <a className="nav-item nav-link" id="service-order-tab" data-toggle="tab" href={`#serviceOrder${this.state.product._id}`} role="tab" aria-controls="service-order" aria-selected="false">Service Order</a>
                      <a className="nav-item nav-link" id="yes-or-no-tab" data-toggle="tab" href={`#yesOrNo${this.state.product._id}`} role="tab" aria-controls="yes-or-no" aria-selected="false">Repair Decision</a>
                      <a className="nav-item nav-link" id="sendToCompany-tab" data-toggle="tab" href={`#sendToCompany${this.state.product._id}`} role="tab" aria-controls="sendToCompany" aria-selected="false">Please Repair</a>
                      <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#sendToStore${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="true">Sent to Store</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                      
                    </div>
                    <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany} />
                    </div>
                    <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                      <CompanyRepairYesOrNoDisplay alert="alert alert-danger" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                      <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                      <SendToStoreDisplay product={this.state.product}/>             
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      } 

    } else if (this.state.product.status === 'toStore' && this.state.user.role === 'Customer') {
      return (
        <div className="row">
          <div className="col-12">
            <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
            <div className="collapse" id={`a${this.state.product._id}`}>
              <div className="card">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="false">Request</a>
                    <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#companyResponse${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Phix's Reply</a>
                    <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#toRepair${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Sent to Repair</a>
                    <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#sendToStore${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="true">Sent to Store</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} user={this.state.user}/>                    
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <FirstCompanyResponseDisplay product={this.state.product} user={this.state.user} />
                  </div>
                  <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                    <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany} />
                  </div>
                  <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                    <SendToStoreDisplay product={this.state.product}/>             
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else
    return (
      <div className="row">
        <div className="col-12">
          {/* <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
          <p>Please await further instructions</p> */}
          <div className="" >
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={this.state.product.imageUrl} className="figure-img img-fluid rounded" alt={this.state.product.categories} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{this.state.product.name}</h5>
                    <p className="card-text">Client Description: {this.state.product.clientDescription}</p>
                    <p className="card-text">Status: {this.state.product.status}</p>
                    <p className="card-text">Product ID: {this.state.product._id}</p>
                    <p className="card-text text-danger">Please await further instructions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
  }
}

export default ProductCard;