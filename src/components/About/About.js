import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <hr className="mt-4 mb-4"></hr>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <h1 className="font-weight-bold">Founders</h1>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 m-0 p-0">
            <div className="row m-0 p-0">
              <div className="col m-0 p-0">
                <div class="card founder-card">
                  <img src="./images/Founder-David.jpg" class="card-img-top" alt="David Dornelles" />
                  <div class="card-body">
                    <h5 class="card-text font-weight-bold text-center">David Dornelles</h5>
                  </div>
                </div>
              </div>
              <div className="col m-0 p-0">
                <div class="card founder-card">
                  <img src="./images/Founder-Felipe.jpg" class="card-img-top" alt="Felipe Chun" />
                  <div class="card-body">
                    <h5 class="card-text font-weight-bold text-center">Felipe Chun</h5>
                  </div>
                </div>
              </div>
              <div className="col m-0 p-0">
                <div class="card founder-card">
                  <img src="./images/Founder-Giovanni.jpg" class="card-img-top" alt="Giovanni Paulo da Cunha" />
                  <div class="card-body">
                    <h5 class="card-text font-weight-bold text-center">Giovanni Paulo da Cunha</h5>
                  </div>
                </div>
              </div>
              <div className="col m-0 p-0">
                <div class="card founder-card">
                  <img src="./images/Founder-Uira.jpg" class="card-img-top" alt="Uirá Sampaio" />
                  <div class="card-body">
                    <h5 class="card-text font-weight-bold text-center">Uirá Sampaio</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr className="mt-4 mb-4"></hr>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <h1 className="font-weight-bold mt-3 mb-5">About Us</h1>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <p className="text-justify">It all started with a simple problem: how can I sell an electronic product that I don't want anymore when I don't have the reputation or credibility of others that have been doing it for years?
               Not only that, if I wanted buy a used product, how can I trust someone I don't know that they are selling me the right product, working in the right conditions? <br/><br/>
               With that in mind, that's why we decided to create Phixit – a unified platform that connects buyers, sellers, and repair companies of electronic goods. Phixit acts as a medium between all three parties
               with the goal to simplify the whole selling, repairing, and buying process. Sellers don't have to be afraid about their reputation as a seller because they will sell their products under our name
               after going through one of our trusted repair and maintenance companies. Thus, those who buy from our platform will know that they are buying from a trusted source and know that we have gone through
               the whole testing process for them.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
