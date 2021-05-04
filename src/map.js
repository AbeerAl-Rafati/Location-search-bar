import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

export class Map extends Component {
  render() {
    return (
      <div>
        <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.data.lat},${this.props.data.lot}&zoom=10`} alt='' fluid />
      </div>
    )
  }
}

export default Map;
