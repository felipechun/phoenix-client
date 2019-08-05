import React, { Component } from "react";
import AuthService from "../authentication/auth-service/auth-service";
import Label from "../label/Label";
import Input from "../input/Input";
import SubmitBtn from "../buttons/SubmitBtn";

export class SellForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "",
      categories: "",
      brand: "",
      name: "",
      model: "",
      statusProduct: "",
      starterPrice: "",
      clientDescription: "",
      imageUrl: ""
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .signup(username, password)
      .then(response => {
        this.setState({
          path: "",
          categories: "",
          brand: "",
          name: "",
          model: "",
          statusProduct: "",
          starterPrice: "",
          clientDescription: "",
          imageUrl: ""
        });
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    uploadData.append("imageUrl", e.target.files[0]);

    this.service
      .handleUpload(uploadData)
      .then(response => {
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url }, () =>
          console.log("IMAGE", this.state.imageUrl)
        );
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    console.log(this.state.path);
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h4 className="border-bottom text-uppercase">
              Product Register Form
            </h4>
          </div>
        </div>
        <form
          className="w-100"
          onSubmit={this.handleFormSubmit}
          encType="multipart/form-data"
        >
          <div className="row">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3">
              <div className="form-group">
                <Label labelFor="service">What do you want to do?</Label>
                <select
                  id="service"
                  name="path"
                  required
                  onChange={e => this.handleChange(e)}
                  className="form-control"
                >
                  <option value="">Choose one</option>
                  <option value="Repair">Repair</option>
                  <option value="Sell">Sell</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3">
              <div className="form-group">
                <Label labelFor="category">Category</Label>
                <select
                  id="category"
                  name="categories"
                  required
                  onChange={e => this.handleChange(e)}
                  className="form-control"
                >
                  <option value="">Choose one</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Consoles">Videogame Console</option>
                  <option value="TV's">Television</option>
                  <option value="Audio">Audio</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3">
              <div className="form-group">
                <Label labelFor="brand">Product Brand</Label>
                <Input
                  id="brand"
                  type="text"
                  name="brand"
                  className="form-control"
                  value={this.state.brand}
                  onChange={e => this.handleChange(e)}
                  placeholder="Brand of the product"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3">
              <div className="form-group">
                <Label labelFor="product">Product</Label>
                <Input
                  id="product"
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.name}
                  onChange={e => this.handleChange(e)}
                  placeholder="Name of the product"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3">
              <div className="form-group">
                <Label labelFor="model">Model</Label>
                <Input
                  id="model"
                  type="text"
                  name="model"
                  className="form-control"
                  value={this.state.model}
                  onChange={e => this.handleChange(e)}
                  placeholder="Model of the product"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3">
              <div className="form-group">
                <Label labelFor="condition">Condition</Label>
                <select
                  id="condition"
                  name="statusProduct"
                  onChange={e => this.handleChange(e)}
                  className="form-control"
                  required
                >
                  <option value="">Choose one</option>
                  <option value="Broken">Broken</option>
                  <option value="Semi-used">Semi-used</option>
                </select>
              </div>
            </div>
            {this.state.path === "Sell" ? (
              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-6">
                <div className="form-group">
                  <Label labelFor="suggested">Suggested Price</Label>
                  <Input
                    id="suggested"
                    type="text"
                    name="starterPrice"
                    className="form-control"
                    value={this.state.starterPrice}
                    onChange={e => this.handleChange(e)}
                    placeholder="How much do you think your product is worth?"
                    required
                  />
                </div>
              </div>
            ) : null}
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-12">
              <div className="form-group">
                <Label labelFor="description">Description</Label>
                <textarea
                  id="description"
                  className="form-control"
                  name="clientDescription"
                  value={this.state.clientDescription}
                  onChange={e => this.handleChange(e)}
                  placeholder="Does your device have any problems or physical damages such as a broken screen or scuffs? Please be as specific as possible."
                  rows="2"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-12">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="upload">
                    Upload
                  </span>
                </div>
                <div className="custom-file">
                  <Input
                    id="file"
                    type="file"
                    className="custom-file-input"
                    value={this.state.imageUrl}
                    onChange={e => this.handleFileUpload(e)}
                    aria-describedby="upload"
                    required
                  />
                  <label className="custom-file-label" htmlFor="file">
                    Please upload a picture of your product
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
              <div className="d-flex flex-column align-items-center">
                <SubmitBtn type="submit" className="btn btn-outline-success">
                  Submit
                </SubmitBtn>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SellForm;
