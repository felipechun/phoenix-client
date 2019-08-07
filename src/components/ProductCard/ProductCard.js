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
    }
  }
  render() {

    if (this.state.product.status === 'Request' && this.state.user.role === 'Admin') {
      return (
        <div className="row">
          <div className="col-12">
            <ProductFigure data={this.state.product} index={this.state.product._id} imageClasses="figure-img img-fluid rounded" imageAlt={this.state.product.categories}/>
            <div className="collapse" id={`a${this.state.product._id}`}>
              <div className="card">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                    <a className="nav-item nav-link active" id="company-response-tab" data-toggle="tab" href={`#company-response-${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Step #2</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade show active" id={`company-response-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
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
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                    <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#company-response-${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Step #2</a>
                    <a className="nav-item nav-link active" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #3</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade" id={`company-response-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <FirstCompanyResponseDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade show active" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
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
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                    <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #2</a>
                    <a className="nav-item nav-link active" id="repair-so-tab" data-toggle="tab" href={`#repair-so-${this.state.product._id}`} role="tab" aria-controls="repair-so" aria-selected="false">Step #3</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                    <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany}/>
                  </div>
                  <div className="tab-pane fade show active" id={`repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="repair-so-tab">
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
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                  <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#company-response-${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Step #2</a>
                    <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #3</a>
                    <a className="nav-item nav-link" id="repair-so-tab" data-toggle="tab" href={`#repair-so-${this.state.product._id}`} role="tab" aria-controls="repair-so" aria-selected="false">Step #4</a>
                    <a className="nav-item nav-link active" id="company-repair-so-tab" data-toggle="tab" href={`#company-repair-so-${this.state.product._id}`} role="tab" aria-controls="company-repair-so" aria-selected="false">Step #5</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade" id={`company-response-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
                    <FirstCompanyResponseDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                    <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany}/>
                  </div>
                  <div className="tab-pane fade" id={`repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="repair-so-tab">
                    <RepairServiceOrderDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade show active" id={`company-repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-repair-so-tab">
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
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #2</a>
                      <a className="nav-item nav-link" id="repair-so-tab" data-toggle="tab" href={`#repair-so-${this.state.product._id}`} role="tab" aria-controls="repair-so" aria-selected="false">Step #3</a>
                      <a className="nav-item nav-link" id="company-repair-so-tab" data-toggle="tab" href={`#company-repair-so-${this.state.product._id}`} role="tab" aria-controls="company-repair-so" aria-selected="false">Step #4</a>
                      <a className="nav-item nav-link active" id="send-to-repair-tab" data-toggle="tab" href={`#send-to-repair-${this.state.product._id}`} role="tab" aria-controls="send-to-repair" aria-selected="false">Step #5</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
          {/* INSERT SELL FORM DISPLAY COMPONENT */}
                      <RequestDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
          {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany}/>
                    </div>
                    <div className="tab-pane fade" id={`repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="repair-so-tab">
          {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`company-repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-repair-so-tab">
          {/* COMPANY REPAIR YES DISPLAY COMPONENT */}
                      <CompanyRepairYesOrNoDisplay alert="alert alert-success" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`send-to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-repair-tab">
                      {/* REPAIR SEND TO COMPANY FORM COMPONENT */}
                      <SendToCompany productId={this.state.product._id}/>
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
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #2</a>
                      <a className="nav-item nav-link" id="repair-so-tab" data-toggle="tab" href={`#repair-so-${this.state.product._id}`} role="tab" aria-controls="repair-so" aria-selected="false">Step #3</a>
                      <a className="nav-item nav-link" id="company-repair-so-tab" data-toggle="tab" href={`#company-repair-so-${this.state.product._id}`} role="tab" aria-controls="company-repair-so" aria-selected="false">Step #4</a>
                      <a className="nav-item nav-link active" id="send-to-repair-tab" data-toggle="tab" href={`#send-to-repair-${this.state.product._id}`} role="tab" aria-controls="send-to-repair" aria-selected="false">Step #5</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
          {/* INSERT SELL FORM DISPLAY COMPONENT */}
                      <RequestDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
          {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany}/>
                    </div>
                    <div className="tab-pane fade" id={`repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="repair-so-tab">
          {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`company-repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-repair-so-tab">
          {/* COMPANY REPAIR NOOOOO DISPLAY COMPONENT */}
                      <CompanyRepairYesOrNoDisplay alert="alert alert-danger" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`send-to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-repair-tab">
          {/* REPAIR SEND TO COMPANY FORM COMPONENT */}
                      <SendToCompany productId={this.state.product._id}/>
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
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #2</a>
                      <a className="nav-item nav-link" id="repair-so-tab" data-toggle="tab" href={`#repair-so-${this.state.product._id}`} role="tab" aria-controls="repair-so" aria-selected="false">Step #3</a>
                      <a className="nav-item nav-link" id="company-repair-so-tab" data-toggle="tab" href={`#company-repair-so-${this.state.product._id}`} role="tab" aria-controls="company-repair-so" aria-selected="false">Step #4</a>
                      <a className="nav-item nav-link" id="send-to-repair-tab" data-toggle="tab" href={`#send-to-repair-${this.state.product._id}`} role="tab" aria-controls="send-to-repair" aria-selected="false">Step #5</a>
                      <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#send-to-store-${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="false">Step #6</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
            {/* INSERT SELL FORM DISPLAY COMPONENT */}
                      <RequestDisplay product={this.state.product} />
                    </div>
            {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}
                    <div className="tab-pane fade" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
            {/* TO REPAIR DISPLAY COMPONENT */}
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany}/>
                    </div>
                    <div className="tab-pane fade" id={`repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="repair-so-tab">
            {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`company-repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-repair-so-tab">
            {/* COMPANY REPAIR YES DISPLAY COMPONENT */}
                      <CompanyRepairYesOrNoDisplay alert="alert alert-danger" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`send-to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-repair-tab">
            {/* REPAIR SENT TO COMPANY DISPLAY COMPONENT */}
                      <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`send-to-store-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                      {/* SEND TO STORE FORM COMPONENT */}
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
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #2</a>
                      <a className="nav-item nav-link" id="repair-so-tab" data-toggle="tab" href={`#repair-so-${this.state.product._id}`} role="tab" aria-controls="repair-so" aria-selected="false">Step #3</a>
                      <a className="nav-item nav-link" id="company-repair-so-tab" data-toggle="tab" href={`#company-repair-so-${this.state.product._id}`} role="tab" aria-controls="company-repair-so" aria-selected="false">Step #4</a>
                      <a className="nav-item nav-link" id="send-to-repair-tab" data-toggle="tab" href={`#send-to-repair-${this.state.product._id}`} role="tab" aria-controls="send-to-repair" aria-selected="false">Step #5</a>
                      <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#send-to-store-${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="false">Step #6</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
            {/* INSERT SELL FORM DISPLAY COMPONENT */}
                      <RequestDisplay product={this.state.product} />
                    </div>
            {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}
                    <div className="tab-pane fade" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
            {/* TO REPAIR DISPLAY COMPONENT */}
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany}/>
                    </div>
                    <div className="tab-pane fade" id={`repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="repair-so-tab">
            {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`company-repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-repair-so-tab">
            {/* COMPANY REPAIR YES DISPLAY COMPONENT */}
                      <CompanyRepairYesOrNoDisplay alert="alert alert-danger" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`send-to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-repair-tab">
            {/* REPAIR SENT TO COMPANY DISPLAY COMPONENT */}
                      <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`send-to-store-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
                      {/* SEND TO STORE FORM COMPONENT */}
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
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                      <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#company-response-${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Step #2</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #3</a>
                      <a className="nav-item nav-link" id="repair-so-tab" data-toggle="tab" href={`#repair-so-${this.state.product._id}`} role="tab" aria-controls="repair-so" aria-selected="false">Step #4</a>
                      <a className="nav-item nav-link" id="company-repair-so-tab" data-toggle="tab" href={`#company-repair-so-${this.state.product._id}`} role="tab" aria-controls="company-repair-so" aria-selected="false">Step #5</a>
                      <a className="nav-item nav-link" id="send-to-repair-tab" data-toggle="tab" href={`#send-to-repair-${this.state.product._id}`} role="tab" aria-controls="send-to-repair" aria-selected="false">Step #6</a>
                      <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#send-to-store-${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="false">Step #7</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
              {/* INSERT SELL FORM DISPLAY COMPONENT */}
                      <RequestDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`company-response-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
            {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}
                      <FirstCompanyResponseDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
              {/* TO REPAIR DISPLAY COMPONENT */}
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany}/>
                    </div>
                    <div className="tab-pane fade" id={`repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="repair-so-tab">
              {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`company-repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-repair-so-tab">
              {/* COMPANY REPAIR YES DISPLAY COMPONENT */}
                      <CompanyRepairYesOrNoDisplay alert="alert alert-danger" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`send-to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-repair-tab">
              {/* REPAIR SENT TO COMPANY DISPLAY COMPONENT */}
                      <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`send-to-store-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
              {/* SENt TO STORE DISPLAY COMPONENT */}
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
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                      <a className="nav-item nav-link" id="company-response-tab" data-toggle="tab" href={`#company-response-${this.state.product._id}`} role="tab" aria-controls="company-response" aria-selected="false">Step #2</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #3</a>
                      <a className="nav-item nav-link" id="repair-so-tab" data-toggle="tab" href={`#repair-so-${this.state.product._id}`} role="tab" aria-controls="repair-so" aria-selected="false">Step #4</a>
                      <a className="nav-item nav-link" id="company-repair-so-tab" data-toggle="tab" href={`#company-repair-so-${this.state.product._id}`} role="tab" aria-controls="company-repair-so" aria-selected="false">Step #5</a>
                      <a className="nav-item nav-link" id="send-to-repair-tab" data-toggle="tab" href={`#send-to-repair-${this.state.product._id}`} role="tab" aria-controls="send-to-repair" aria-selected="false">Step #6</a>
                      <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#send-to-store-${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="false">Step #7</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
              {/* INSERT SELL FORM DISPLAY COMPONENT */}
                      <RequestDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`company-response-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-response-tab">
            {/* INSERT FIRST COMPANY RESPONSE DISPLAY COMPONENT */}
                      <FirstCompanyResponseDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
              {/* TO REPAIR DISPLAY COMPONENT */}
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany}/>
                    </div>
                    <div className="tab-pane fade" id={`repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="repair-so-tab">
              {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`company-repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-repair-so-tab">
              {/* COMPANY REPAIR YES DISPLAY COMPONENT */}
                      <CompanyRepairYesOrNoDisplay alert="alert alert-danger" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`send-to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-repair-tab">
              {/* REPAIR SENT TO COMPANY DISPLAY COMPONENT */}
                      <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`send-to-store-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
              {/* SENt TO STORE DISPLAY COMPONENT */}
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
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #2</a>
                      <a className="nav-item nav-link" id="repair-so-tab" data-toggle="tab" href={`#repair-so-${this.state.product._id}`} role="tab" aria-controls="repair-so" aria-selected="false">Step #3</a>
                      <a className="nav-item nav-link" id="company-repair-so-tab" data-toggle="tab" href={`#company-repair-so-${this.state.product._id}`} role="tab" aria-controls="company-repair-so" aria-selected="false">Step #4</a>
                      <a className="nav-item nav-link" id="send-to-repair-tab" data-toggle="tab" href={`#send-to-repair-${this.state.product._id}`} role="tab" aria-controls="send-to-repair" aria-selected="false">Step #5</a>
                      <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#send-to-store-${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="false">Step #6</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
              {/* INSERT SELL FORM DISPLAY COMPONENT */}
                      <RequestDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
              {/* TO REPAIR DISPLAY COMPONENT */}
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany}/>
                    </div>
                    <div className="tab-pane fade" id={`repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="repair-so-tab">
              {/* REPAIR SERVICE ORDER DISPLAY COMPONENT */}
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`company-repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-repair-so-tab">
              {/* COMPANY REPAIR YES DISPLAY COMPONENT */}
                      <CompanyRepairYesOrNoDisplay alert="alert alert-danger" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`send-to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-repair-tab">
              {/* REPAIR SENT TO COMPANY DISPLAY COMPONENT */}
                      <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`send-to-store-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
              {/* SENt TO STORE DISPLAY COMPONENT */}
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
                      <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                      <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #2</a>
                      <a className="nav-item nav-link" id="repair-so-tab" data-toggle="tab" href={`#repair-so-${this.state.product._id}`} role="tab" aria-controls="repair-so" aria-selected="false">Step #3</a>
                      <a className="nav-item nav-link" id="company-repair-so-tab" data-toggle="tab" href={`#company-repair-so-${this.state.product._id}`} role="tab" aria-controls="company-repair-so" aria-selected="false">Step #4</a>
                      <a className="nav-item nav-link" id="send-to-repair-tab" data-toggle="tab" href={`#send-to-repair-${this.state.product._id}`} role="tab" aria-controls="send-to-repair" aria-selected="false">Step #5</a>
                      <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#send-to-store-${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="false">Step #6</a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                      <RequestDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                      <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany}/>
                    </div>
                    <div className="tab-pane fade" id={`repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="repair-so-tab">
                      <RepairServiceOrderDisplay product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`company-repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="company-repair-so-tab">
                      <CompanyRepairYesOrNoDisplay alert="alert alert-danger" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade" id={`send-to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-repair-tab">
                      <SendToCompanyDisplay alert="alert alert-warning" product={this.state.product} />
                    </div>
                    <div className="tab-pane fade show active" id={`send-to-store-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
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
                    <a className="nav-item nav-link" id="request-tab" data-toggle="tab" href={`#request-${this.state.product._id}`} role="tab" aria-controls="request" aria-selected="true">Step #1</a>
                    <a className="nav-item nav-link" id="to-repair-tab" data-toggle="tab" href={`#to-repair-${this.state.product._id}`} role="tab" aria-controls="to-repair" aria-selected="false">Step #2</a>
                    <a className="nav-item nav-link" id="repair-so-tab" data-toggle="tab" href={`#repair-so-${this.state.product._id}`} role="tab" aria-controls="repair-so" aria-selected="false">Step #3</a>
                    <a className="nav-item nav-link active" id="send-to-store-tab" data-toggle="tab" href={`#send-to-store-${this.state.product._id}`} role="tab" aria-controls="send-to-store" aria-selected="false">Step #4</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id={`request-${this.state.product._id}`} role="tabpanel" aria-labelledby="request-tab">
                    <RequestDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade" id={`to-repair-${this.state.product._id}`} role="tabpanel" aria-labelledby="to-repair-tab">
                    <ToRepairDisplay productId={this.state.product} companyObj={this.state.product.idCompany}/>
                  </div>
                  <div className="tab-pane fade" id={`repair-so-${this.state.product._id}`} role="tabpanel" aria-labelledby="repair-so-tab">
                    <RepairServiceOrderDisplay product={this.state.product} />
                  </div>
                  <div className="tab-pane fade show active" id={`send-to-store-${this.state.product._id}`} role="tabpanel" aria-labelledby="send-to-store-tab">
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
      <div><h1>NO WAY JOSE</h1></div>
    )
  }
}

export default ProductCard;