import React, { Component } from 'react'

export class Info extends Component {
  render() {
    return (
      <div>
        <p>
          Wellcom to {this.props.name}
        </p>
        <br />
        <p>
          Location :  {this.props.display_name}  is located at ( {this.props.lat} ) by ( {this.props.lon} )
          </p>
      </div>
    )
  }
}

export default Info;
