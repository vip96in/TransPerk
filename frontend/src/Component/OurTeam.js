import './styles/team.css'
import React, { Component } from 'react'
import userlogo from './img/user.jpg'

export class OurTeam extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Akshay Gade</h2>
                            <p>Student of ACTS pune in course e-DAC started in March 2021</p>

                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;akshaygade@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;7989651482</i></h5>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Vipin Yadav</h2>
                            <p>Student of ACTS pune in course e-DAC started in March 2021</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;vipinyadav@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;8987451236</i></h5>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Roshan Bhoge</h2>
                            <p>Student of ACTS pune in course e-DAC started in March 2021</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;broshan@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;7978982134</i></h5>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item offset-md-2">
                    <div className="row">
                      <div className="col-md-4 ">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Sanket Darur</h2>
                            <p>Student of ACTS pune in course e-DAC started in March 2021</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;sanketdarur@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;9591477598</i></h5>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={userlogo} alt="user" /></div>
                          <div className="img-text">
                            <h2>Rushikesh Sonawane</h2>
                            <p>Student of ACTS pune in course e-DAC started in March 2021</p>
                            <h5> <i className="fa fa-envelope" aria-hidden="true">&nbsp;rushikesh@gmail.com</i></h5>
                            <h5><i className="fa fa-mobile-phone " aria-hidden="true">&nbsp;7878945623</i></h5>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="fa-style"><i className="fa fa-chevron-left" aria-hidden="true" /></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="fa-style"><i className="fa fa-chevron-right" aria-hidden="true" /></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div></div></div>

      </>
    )
  }
}

export default OurTeam
