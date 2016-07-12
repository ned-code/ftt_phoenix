import React, { Component } from 'react';

export default class Cards extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <a href="#">
                  <div className="card red summary-inline">
                      <div className="card-body">
                          <i className="icon fa fa-inbox fa-4x"></i>
                          <div className="content">
                              <div className="title">10</div>
                              <div className="sub-title">Generations</div>
                          </div>
                          <div className="clear-both"></div>
                      </div>
                  </div>
              </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <a href="#">
                  <div className="card yellow summary-inline">
                      <div className="card-body">
                          <i className="icon fa fa-comments fa-4x"></i>
                          <div className="content">
                              <div className="title">23</div>
                              <div className="sub-title">Messages</div>
                          </div>
                          <div className="clear-both"></div>
                      </div>
                  </div>
              </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <a href="#">
                  <div className="card green summary-inline">
                      <div className="card-body">
                          <i className="icon fa fa-tags fa-4x"></i>
                          <div className="content">
                              <div className="title">280</div>
                              <div className="sub-title">Characters</div>
                          </div>
                          <div className="clear-both"></div>
                      </div>
                  </div>
              </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <a href="#">
                  <div className="card blue summary-inline">
                      <div className="card-body">
                          <i className="icon fa fa-share-alt fa-4x"></i>
                          <div className="content">
                              <div className="title">16</div>
                              <div className="sub-title">Users</div>
                          </div>
                          <div className="clear-both"></div>
                      </div>
                  </div>
              </a>
          </div>
      </div> 
    );
  }
}
