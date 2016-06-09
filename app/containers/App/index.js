import React, { Component, PropTypes } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    //this.incrementAsync = this.incrementAsync.bind(this)
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { } = this.props
    return (
      <p>
        Hello App
      </p>
    )
  }
}

App.propTypes = {
}

export default App 
