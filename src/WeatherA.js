import React from 'react';



class WeatherA extends React.Component {
  render() {

    return (
      // console.log(this.props.weatherInfo),
      this.props.weatherInfo.map((item, index) => {
        return (
          <div key={index}>
            <p>In day  : {item.date}</p>
            <p>The weather in the city : {item.status}</p>
            <p>========================</p>
          </div>
        );


      })
    );
  }

}

export default WeatherA;

