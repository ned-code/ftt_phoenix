import React, { Component } from 'react';
import Helmet from 'react-helmet';

import profileImg from 'static/picjumbo.com_HNCK4153_resize.jpg';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top navbar-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-expand-toggle fa-rotate-90">
                    <i className="fa fa-bars icon"></i>
                </button>
                <ol className="breadcrumb navbar-breadcrumb">
                    <li className="active">Dashboard</li>
                </ol>
                <button type="button" className="navbar-right-expand-toggle pull-right visible-xs">
                    <i className="fa fa-th icon"></i>
                </button>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <button type="button" className="navbar-right-expand-toggle pull-right visible-xs">
                    <i className="fa fa-times icon"></i>
                </button>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-comments-o"></i></a>
                    <ul className="dropdown-menu animated fadeInDown">
                        <li className="title">
                            Notification <span className="badge pull-right">0</span>
                        </li>
                        <li className="message">
                            No new notification
                        </li>
                    </ul>
                </li>
                <li className="dropdown danger">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-star-half-o"></i> 4</a>
                    <ul className="dropdown-menu danger  animated fadeInDown">
                        <li className="title">
                            Notification <span className="badge pull-right">4</span>
                        </li>
                        <li>
                            <ul className="list-group notifications">
                                <a href="#">
                                    <li className="list-group-item">
                                        <span className="badge">1</span> <i className="fa fa-exclamation-circle icon"></i> new registration
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="list-group-item">
                                        <span className="badge success">1</span> <i className="fa fa-check icon"></i> new orders
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="list-group-item">
                                        <span className="badge danger">2</span> <i className="fa fa-comments icon"></i> customers messages
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="list-group-item message">
                                        view all
                                    </li>
                                </a>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown profile">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Fernando Oliveira <span className="caret"></span></a>
                    <ul className="dropdown-menu animated fadeInDown">
                        <li className="profile-img">
                            <img src="" className="profile-img" />
                        </li>
                        <li>
                            <div className="profile-info">
                                <h4 className="username">Fernando Oliveira</h4>
                                <p>emily_hart@email.com</p>
                                <div className="btn-group margin-bottom-2x" role="group">
                                    <button type="button" className="btn btn-default"><i className="fa fa-user"></i> Profile</button>
                                    <button type="button" className="btn btn-default"><i className="fa fa-sign-out"></i> Logout</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    );
  }
}
