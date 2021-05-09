import React from 'react';

class Error extends React.Component {
  // timedRefresh = (timeoutPeriod) => {
  //   setTimeout('location.reload(true);', timeoutPeriod);
  // }

  // Refresh = () => { window.onload = timedRefresh(5000) };

  render() {
    return (
      <>
        <h1>
          ERROR
        </h1>
        <br />
        <p>Add a correct city name</p>

      </>
      // ,Refresh()
    );


  }

}

export default Error;
