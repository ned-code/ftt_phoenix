import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Router, Route, Link } from 'react-router'

export default class Landing extends Component {
  render() {
    return (
      <section className="flat-blue landing-page">
        <Helmet title="Home" />
        <nav className="navbar navbar-inverse navbar-fixed-top  navbar-affix affix-top" role="navigation" data-spy="affix" data-offset-top="60">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>

                  <Link to ={'/'} title="" className="navbar-brand">
                      <div className="icon fa fa-paper-plane"></div>
                      <div className="title">FamilyTreeTop</div>
                  </Link>
              </div>
              <div id="navbar" className="navbar-collapse collapse " aria-expanded="true">
                  <ul className="nav navbar-nav navbar-right">
                      <li className="active"><Link to={'/'}>Home</Link></li>
                      <li><Link to={'/dashboard'}>Dashboard</Link></li>
                      <li><Link to={'/'}>About</Link></li>
                  </ul>
              </div>
          </div>
        </nav>
        <div className="jumbotron app-header">
          <div className="container">
              <h2 className="text-center"><i className="app-logo fa fa-connectdevelop fa-5x color-white"></i><div className="color-white">FamilyTreeTop v2.0</div></h2>
              <p className="text-center color-white app-description">The project help u with construct ur family relationship.</p>
              <p className="text-center"><Link className="btn btn-primary btn-lg app-btn" to={'/login'} role="button">Sign in »</Link></p>
          </div>
        </div>

        <div className="container-fluid app-content-a">
        <div className="container">        <div className="row text-center">
            <div className="col-md-4 col-sm-6">
                <span className="fa-stack fa-lg fa-5x">
                  <i className="fa fa-circle-thin fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x"></i>
                </span>
                <h2>Heading</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            </div>
            <div className="col-md-4 col-sm-6">
                <span className="fa-stack fa-lg fa-5x">
                  <i className="fa fa-circle-thin fa-stack-2x"></i>
                  <i className="fa fa-inbox fa-stack-1x"></i>
                </span>
                <h2>Heading</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            </div>
            <div className="col-md-4 col-sm-6">
                <span className="fa-stack fa-lg fa-5x">
                  <i className="fa fa-circle-thin fa-stack-2x"></i>
                  <i className="fa fa-comments-o fa-stack-1x"></i>
                </span>
                <h2>Heading</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </div>
        </div>
        </div>
    </div>

    <div className="container-fluid app-content-b feature-1">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-6">
                </div>
                <div className="col-md-5 col-sm-6 text-right color-white">
                    <h2 className="featurette-heading">First featurette heading. It'll blow your mind.</h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid app-content-a">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center app-content-header">Pricing</h2>
                    <p className="text-center app-content-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row no-margin no-gap">
                        <div className="col-md-3 col-sm-6">
                            <div className="pricing-table dark-blue">
                                <div className="pt-header">
                                    <div className="plan-pricing">
                                        <div className="pricing">$10</div>
                                        <div className="pricing-type">per month</div>
                                    </div>
                                </div>
                                <div className="pt-body">
                                    <h4>Basic Plan</h4>
                                    <ul className="plan-detail">
                                        <li>1 Website</li>
                                        <li>100 GB Storage</li>
                                        <li>Unlimited Bandwidth</li>
                                    </ul>
                                </div>
                                <div className="pt-footer">
                                    <button type="button" className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="pricing-table green">
                                <div className="pt-header">
                                    <div className="plan-pricing">
                                        <div className="pricing">$25</div>
                                        <div className="pricing-type">per month</div>
                                    </div>
                                </div>
                                <div className="pt-body">
                                    <h4>Standard Plan</h4>
                                    <ul className="plan-detail">
                                        <li>5 Website</li>
                                        <li>500 GB Storage</li>
                                        <li>Unlimited Bandwidth</li>
                                    </ul>
                                </div>
                                <div className="pt-footer">
                                    <button type="button" className="btn btn-success">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="pricing-table  dark-blue">
                                <div className="pt-header">
                                    <div className="plan-pricing">
                                        <div className="pricing">$50</div>
                                        <div className="pricing-type">per month</div>
                                    </div>
                                </div>
                                <div className="pt-body">
                                    <h4>Advanced Plan</h4>
                                    <ul className="plan-detail">
                                        <li>10 Website</li>
                                        <li>1 TB Storage</li>
                                        <li>Unlimited Bandwidth</li>
                                    </ul>
                                </div>
                                <div className="pt-footer">
                                    <button type="button" className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="pricing-table dark-blue">
                                <div className="pt-header">
                                    <div className="plan-pricing">
                                        <div className="pricing">$100</div>
                                        <div className="pricing-type">per month</div>
                                    </div>
                                </div>
                                <div className="pt-body">
                                    <h4>Unlimited Plan</h4>
                                    <ul className="plan-detail">
                                        <li>Unlimited Website</li>
                                        <li>Unlimited Storage</li>
                                        <li>Unlimited Bandwidth</li>
                                    </ul>
                                </div>
                                <div className="pt-footer">
                                    <button type="button" className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid app-content-b contact-us">
        <div className="container">
            <div className="row featurette">
                <div className="col-md-6"><h2 className="color-white contact-us-header">Contact Us</h2>
                <p className="color-white contact-us-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut </p></div>
                <div className="col-md-6">
                    <form>

                        <div className="row">
                            <div className="col-sm-6"><input id="name" name="name" type="text" className="form-control" placeholder="Full Name" /> </div>
                            <div className="col-sm-6"><input id="email" name="email" type="email" className="form-control" placeholder="Email address" /></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12"><textarea id="message" name="message" className="form-control" placeholder="Your Message" rows="5"></textarea></div>
                        </div>
                        <div>
                            <button id="contact-submit" type="submit" className="btn btn-success pull-right">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

      </section>
    );
  }
}
