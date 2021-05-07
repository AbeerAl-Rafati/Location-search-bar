import React from 'react';
import Card from 'react-bootstrap/Card';
// import CardColumns from 'react-bootstrap/CardColumns';


class WeatherA extends React.Component {
  render() {

    return (
      // console.log(this.props.weatherInfo),
      this.props.weatherInfo.map((item, index) => {
        return (

          <Card key={index} >
            <Card.Body>
              <Card.Text >In day :</Card.Text>
              <Card.Title> {item.date}</Card.Title>
              <Card.Text>The weather in the city :</Card.Text>
              <Card.Title>{item.status}</Card.Title>

            </Card.Body>
          </Card>


        );


      })
    );
  }

}

export default WeatherA;
