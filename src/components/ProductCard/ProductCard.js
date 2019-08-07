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
      // index: this.props.idNum
    }
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
                    <p>DISPLAY DO REQUEST</p>
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
                    <p>DISPLAY DO REQUEST</p>
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="companyResponse-tab">
                    <p>DISPLAY DO Phix's Reply</p>
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
                    <p>DISPLAY DO REQUEST</p>
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <p>DISPLAY DO SENT TO REPAIR (TO REPAIR)</p>
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
                  <p>DISPLAY DO REQUEST</p>
                </div>
                <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                  <p>DISPLAY DO Phix's Reply</p>
                </div>
                <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                  <p>TO REPAIR DISPLAY</p>
                </div>
                <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                  <p>SERVICE ORDER DISPLAY</p>
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
                      <p>DISPLAY DO REQUEST</p>
                    </div>
                    <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                      <p>DISPLAY DO Phix's Reply</p>
                    </div>
                    <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                      <p>SERVICE ORDER DISPLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                      <p>ADMIN REPAIR YES DIPSLAY</p>
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
                    <p>DISPLAY DO REQUEST</p>
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <p>DISPLAY DO Phix's Reply</p>
                  </div>
                  <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                    <p>SERVICE ORDER DISPLAY</p>
                  </div>
                  <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                    <p>ADMIN REPAIR NO DIPSLAY</p>
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
                    <p>DISPLAY DO REQUEST</p>
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <p>DISPLAY DO Phix's Reply</p>
                  </div>
                  <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                    <p>TO REPAIR DISPLAY</p>
                  </div>
                  <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                    <p>SERVICE ORDER DISPLAY</p>
                  </div>
                  <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                    <p>ADMIN REPAIR YES DIPSLAY</p>
                  </div>
                  <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                    <p>REPAIR SENT TO ADMIN DISPLAY</p>
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
                    <p>DISPLAY DO REQUEST</p>
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <p>DISPLAY DO Phix's Reply</p>
                  </div>
                  <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                    <p>TO REPAIR DISPLAY</p>
                  </div>
                  <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                    <p>SERVICE ORDER DISPLAY</p>
                  </div>
                  <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                    <p>ADMIN REPAIR NO DIPSLAY</p>
                  </div>
                  <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                    <p>REPAIR SENT TO ADMIN DISPLAY</p>
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
                      <p>DISPLAY DO REQUEST</p>
                    </div>
                    <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                      <p>DISPLAY DO Phix's Reply</p>
                    </div>
                    <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                      <p>TO REPAIR DISPLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                      <p>SERVICE ORDER DISPLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                      <p>ADMIN REPAIR YES DIPSLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                      <p>REPAIR SENT TO ADMIN DISPLAY</p>
                    </div>
                    <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                      <p>TO STORE DISPLAY</p>             
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
                      <p>DISPLAY DO REQUEST</p>
                    </div>
                    <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                      <p>DISPLAY DO Phix's Reply</p>
                    </div>
                    <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                      <p>TO REPAIR DISPLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                      <p>SERVICE ORDER DISPLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                      <p>ADMIN REPAIR NO DIPSLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                      <p>REPAIR SENT TO ADMIN DISPLAY</p>
                    </div>
                    <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                      <p>TO STORE DISPLAY</p>             
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
                      <p>DISPLAY DO REQUEST</p>
                    </div>
                    <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                      <p>TO REPAIR DISPLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                      <p>SERVICE ORDER DISPLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                      <p>ADMIN REPAIR YES DIPSLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                      <p>REPAIR SENT TO ADMIN DISPLAY</p>
                    </div>
                    <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                      <p>TO STORE DISPLAY</p>             
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
                      <p>DISPLAY DO REQUEST</p>
                    </div>
                    <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                      <p>TO REPAIR DISPLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`serviceOrder${this.state.product._id}`} role="tabpanel" aria-labelledby="service-order-tab">
                      <p>SERVICE ORDER DISPLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`yesOrNo${this.state.product._id}`} role="tabpanel" aria-labelledby="yes-or-no-tab">
                      <p>ADMIN REPAIR NO DIPSLAY</p>
                    </div>
                    <div className="tab-pane fade" id={`sendToCompany${this.state.product._id}`} role="tabpanel" aria-labelledby="sendToCompany-tab">
                      <p>REPAIR SENT TO ADMIN DISPLAY</p>
                    </div>
                    <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                      <p>TO STORE DISPLAY</p>             
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
                    <p>DISPLAY DO REQUEST</p>
                  </div>
                  <div className="tab-pane fade" id={`companyResponse${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <p>DISPLAY DO Phix's Reply</p>
                  </div>
                  <div className="tab-pane fade" id={`toRepair${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                    <p>TO REPAIR DISPLAY</p>
                  </div>
                  <div className="tab-pane fade show active" id={`sendToStore${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                    <p>TO STORE DISPLAY</p>             
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

// DAVE CHANGES
// return (
//   <div className="row">
//     <div className="col-12">

//       <ProductFigure data={this.state.product} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories} />

//       <div className="collapse" id="collapseExample">
//         <nav>
//           <div className="nav nav-tabs" id="nav-tab" role="tablist">
//             <a className="nav-item nav-link active" id="nav-request-tab" data-toggle="tab" href="#nav-request" role="tab" aria-controls="nav-request" aria-selected="true">Request</a>
//             <a className="nav-item nav-link" id="nav-company-tab" data-toggle="tab" href="#nav-company" role="tab" aria-controls="nav-company" aria-selected="false">Company</a>
//             <a className="nav-item nav-link" id="nav-repair-tab" data-toggle="tab" href="#nav-repair" role="tab" aria-controls="nav-repair" aria-selected="false">To Repair</a>
//             <a className="nav-item nav-link" id="nav-repair-service-tab" data-toggle="tab" href="#nav-repair-service" role="tab" aria-controls="nav-repair-service" aria-selected="false">Repair S. O.</a>
//             <a className="nav-item nav-link" id="nav-repair-company-tab" data-toggle="tab" href="#nav-repair-company" role="tab" aria-controls="nav-repair-company" aria-selected="false">Repair Company</a>
//             <a className="nav-item nav-link" id="nav-send-company-tab" data-toggle="tab" href="#nav-send-company" role="tab" aria-controls="nav-send-company" aria-selected="false">To Company</a>
//             <a className="nav-item nav-link" id="nav-send-store-tab" data-toggle="tab" href="#nav-send-store" role="tab" aria-controls="nav-send-store" aria-selected="false">To Store</a>
//           </div>
//         </nav>
//         <div className="tab-content" id="nav-tabContent">
//           <div className="tab-pane fade show active" id="nav-request" role="tabpanel" aria-labelledby="nav-request-tab">
//             <p className="m-2">
//               <span className="font-weight-bold">Destiny:</span> {this.state.product.path}<br/>
//               <span className="font-weight-bold">Category:</span> {this.state.product.categories}<br/>
//               <span className="font-weight-bold">Brand:</span> {this.state.product.brand}<br/>
//               <span className="font-weight-bold">Name:</span> {this.state.product.name}<br/>
//               <span className="font-weight-bold">Model:</span> {this.state.product.model}<br/>
//               <span className="font-weight-bold">Condition:</span> {this.state.product.statusProduct}<br/>
//               <span className="font-weight-bold">Estimated Price:</span> R$ {this.state.product.starterPrice}<br/>
//               <span className="font-weight-bold">Description:</span> {this.state.product.clientDescription}
//             </p>
//           </div>
//           <div className="tab-pane fade" id="nav-company" role="tabpanel" aria-labelledby="nav-company-tab">
//             <p className="m-2">
//               <span className="font-weight-bold">Price:</span> {this.state.product.companyPrice}<br/>
//               <span className="font-weight-bold">Description:</span> {this.state.product.companyDescription}
//             </p>
//           </div>
//           <div className="tab-pane fade" id="nav-repair" role="tabpanel" aria-labelledby="nav-repair-tab">
//             <div className="alert alert-warning m-2" role="alert">
//               <p className="mb-0">The user has sent the device in for repair/maintenance.</p>
//             </div>
//           </div>
//           <div className="tab-pane fade" id="nav-repair-service" role="tabpanel" aria-labelledby="nav-repair-service-tab">
//             <div className="d-flex flex-row m-2">
//               <img src={this.state.product.repairImageUrl} className="img-thumbnail" alt={this.state.product.name} height="100" />
//               <p className="ml-2">
//                 <span className="font-weight-bold">Price: R$ </span> {this.state.product.repairPrice}<br />
//                 <span className="font-weight-bold">Description:</span> {this.state.product.repairDescription}<br />
//                 <span className="font-weight-bold">Model:</span> {this.state.product.model}<br />
//                 <span className="font-weight-bold">Specifications:</span> {this.state.product.specs}<br />
//                 <span className="font-weight-bold">Brand:</span> {this.state.product.brand}
//               </p>
//             </div>
//           </div>
//           <div className="tab-pane fade" id="nav-repair-company" role="tabpanel" aria-labelledby="nav-repair-company-tab">
//             { isRepair
//               ? <div className="alert alert-warning m-2" role="alert">
//                   <p className="mb-0">The user has sent the device in for repair/maintenance.</p>
//                 </div>
//               : <div className="alert alert-danger m-2" role="alert">
//                   <p className="mb-0">Do not repair the product and ship it to us in its current state.</p>
//                 </div>
//             }
//           </div>
//           <div className="tab-pane fade" id="nav-send-company" role="tabpanel" aria-labelledby="nav-send-company-tab">
//             <div className="alert alert-success m-2" role="alert">
//               <p className="mb-0">The product has been sent to Phix.</p>
//             </div>
//           </div>
//           <div className="tab-pane fade" id="nav-send-store" role="tabpanel" aria-labelledby="nav-send-store-tab">
//             <p className="m-2">
//               <span className="font-weight-bold">Name:</span> {this.state.product.finalName}<br />
//               { this.state.onSale === true
//                 ? <Fragment><span className="font-weight-bold">Sale:</span> Yes<br /></Fragment>
//                 : <Fragment><span className="font-weight-bold">Sale:</span> No<br /></Fragment>
//               }
//               <span className="font-weight-bold">Price:</span> {this.state.product.sellingPrice}<br />
//               <span className="font-weight-bold">Comission:</span> {this.state.product.comission}<br />
//               <span className="font-weight-bold">Description:</span> {this.state.product.finalDescription}
//             </p>
//           </div>
//         </div>