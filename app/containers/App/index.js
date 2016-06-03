import React from 'react';
import { browserHistory } from 'react-router'

export default React.createClass({
    onClick(e) {
      e.preventDefault();
      browserHistory.push('/login')
    },
     render() {
       return <div>
         <div onClick={this.onClick} className="btn btn-default">
          LoginForm
         </div>
       </div>
     }
});
