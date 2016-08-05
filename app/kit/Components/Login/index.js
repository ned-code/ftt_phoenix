import React, { Component } from 'react';

export default class LoginComponent extends Component {
  render () {
    return (
      <div className='login-box'>
        <div>
          <div className='login-form row'>
            <div className='col-sm-12 text-center login-header'>
              <i className='login-logo fa fa-connectdevelop fa-5x'></i>
              <h4 className='login-title'>Flat Admin V2</h4>
            </div>
            <div className='col-sm-12'>
              <div className='login-body'>
                <div className='progress hidden' id='login-progress'>
                  <div className='progress-bar progress-bar-success progress-bar-striped active' role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style={ { width: '100%' } }>
                    Log In...
                  </div>
                </div>
                <form>
                  <div className='control'>
                    <input type='text' className='form-control' />
                  </div>
                  <div className='control'>
                    <input type='password' className='form-control' />
                  </div>
                  <div className='login-button text-center'>
                    <input type='submit' className='btn btn-primary' />
                  </div>
                </form>
              </div>
              <div className='login-footer'>
                <span className='text-right'><a href='#' className='color-white'>Forgot password?</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
