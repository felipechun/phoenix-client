import React, { Component } from 'react';

class CompanyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: this.props.singleCompany,
    }
    
  }
  
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{this.state.company.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.state.company.address} - {this.state.company.cep}<br />
          Phone: {this.state.company.phone}<br />
          Email: {this.state.company.email}<br />
          CNPJ: {this.state.company.cnpj}
          </h6>
        </div>
      </div>
    )
  }
}

export default CompanyCard;
