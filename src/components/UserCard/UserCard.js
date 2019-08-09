import React, { Component } from 'react';

class UserCard extends Component {
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
          <h5 className="card-title">USER</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    )
  }
}

export default UserCard;
