import React from 'react';

class Error extends React.Component {
  render() {
    return (
      <>
        <p>"error": "Unable to geocode"</p>
        <br />
        <p>Add a correct city name</p>
      </>
    );
  }

}

export default Error;
