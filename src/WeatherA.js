import React from 'react';
import OneWether from './OneWether';


class WeatherA extends React.Component {
  render() {

    return (
      this.props.weatherInfo.map((item) => {
        return (

          <OneWether
            date={item.date}
            status={item.status}
          />




        );


      })
    );
  }

}

export default WeatherA;
