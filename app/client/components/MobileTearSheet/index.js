import React, { Component, PropTypes } from 'react';

/* material-ui */
export default class MobileTearSheet extends Component {
  static propTypes = {
    height: PropTypes.number
  };

  constructor (props) {
    super(props);
    this.state = {
      styles: {
        root: {
          float: 'left',
          marginBottom: 24,
          marginRight: 24,
          width: 360
        },
        container: {
          border: 'solid 1px #d9d9d9',
          borderBottom: 'none',
          height: 500,
          overflow: 'hidden'
        },
        bottomTear: {
          display: 'block',
          position: 'relative',
          marginTop: 0,
          width: 360
        }
      }
    };

    if (!!props.height) {
      this.state.styles.container.height = props.height;
    };

  }

  render () {
    const { styles } = this.state;
    return (
      <div style={styles.root}>
        <div style={styles.container}>
          {this.props.children}
        </div>
        <img style={styles.bottomTear} src={require('Static/images/bottom-tear.svg')} />
      </div>
    );
  }
}



