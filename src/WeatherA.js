import React, { Component } from 'react'

export class WeatherA extends Component {
  render() {
    return (
      this.props.allInfo.map(item => {
        return (
          <div>

            <p>In day  : {item.date}</p>
            <p>The weather in the city : {item.status}</p>
            <p>========================</p>

          </div>
        )


      })

    )
  }
}

export default WeatherA
