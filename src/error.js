import React from 'react';

class Error extends React.Component {


  render() {
    return (
      <div style={{ margin: '2rem 25%', color: 'red' }}>
        <h1>
          ERROR
        </h1>
        <br />
        <p>Add a correct city name</p>

        <button className="btn btn-warning" onClick={() => window.location.reload(false)}>TRY AGAIN</button>


      </div>

    );


  }

}

export default Error;
