import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

export class Map extends Component {
  render() {
    return (
      <div>
        <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATOIN_IQ_KEY}&q&center=${this.props.lat},${this.props.lon}&zoom=10`} alt='' fluid />
      </div>
    );
  }
}

export default Map;
