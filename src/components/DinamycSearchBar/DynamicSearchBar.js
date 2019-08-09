import React from 'react';
import Input from '../input/Input';
import SubmitBtn from '../buttons/SubmitBtn';

const DynamicSearchBar = (props) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <SubmitBtn className="btn btn-secondary" disabled="disabled">Filter</SubmitBtn>
      </div>
      <Input className="form-control" type="text" value={props.state} onChange={props.filterHandler} placeholder="Type here to filter our products" />
    </div>
  )
}
export default DynamicSearchBar;