import React, { Component } from 'react'
import Pixel from './Pixel'

export default class Paint extends Component {
  constructor (props) {
    super(props)
    let arr = [' ']
    for (let i = 0;i < 420;i++) {
      arr[i] = ' '
    }
    this.state = {
      Pixels: arr
    }
  }

  render () {
    let renderPixels = this.state.Pixels.map(() => {
      return (<div>
                <Pixel></Pixel>
              </div>
      )
    })

    return (<div className='container d-inline-block float-left'>
              {renderPixels}
            </div>)
  }
}
