import React, { Component } from 'react'

export default class Home extends Component {
  render () {
    return (
      <div>
        <span className='badge m-2 badge-success'>Hi, {this.props.myName} !</span>
      </div>
    )
  }
}
