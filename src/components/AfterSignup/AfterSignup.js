import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class AfterSignup extends Component {
constructor(props){
    super(props);   
}

    componentDidMount(){
        this.props.getTheUser(null)
    }

    render() {
        return (
            <Redirect to="/"/>
        )
    }
}

export default AfterSignup;
