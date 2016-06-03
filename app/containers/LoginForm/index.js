import React from 'react';
import { browserHistory } from 'react-router'

import { LoginForm } from './../../components'

export default React.createClass({
    onClick(e) {
      e.preventDefault();
      browserHistory.push('/')
    },
    onChange(...rest){
      console.log(rest);
    },
    onSubmit(...rest){
      console.log(rest);
    },
     render() {
       return <div>
         <div onClick={this.onClick} className="btn btn-default">
          Back 
         </div>
         <div className="row">
          <div className="col-md-12">
            <LoginForm onChange={this.onChange} onSubmit={this.onSubmit}/>
          </div>
         </div>
       </div>;
     }
});
