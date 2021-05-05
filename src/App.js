import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import Error from './error';
import Map from './map';
import FormA from './Form';
import Info from './Info';
import WeatherA from './WeatherA';



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      search: '',
      show: false,
      error: false,
      weatherData: ''
      // err: ''
    };
  }

  getLocation = async (event) => {
    try {
      event.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATOIN_IQ_KEY}&q=${this.state.search}&format=json`;

      const request = await axios.get(url);

      const weather = await axios.get(`${process.env.REACT_APP_CLIENT}/weather`);
      console.log(weather.data);


      // const error = await axios.get(`${process.env.REACT_APP_CLIENT}/error`);

      this.setState({
        data: request.data[0],
        weatherData: weather.data,
        show: true,


      });

    }
    catch (error) {
      this.setState({
        show: false,
        error: true,
      });
      // alert('ERROR !! Add an acceptable value !!')
      <Error />
    }

  };




  updateSearch = (event) => {

    this.setState({ search: event.target.value });
  }


  resultShow = () => {

    return (
      <>
        this.state.error && <Error />
      this.state.show &&
        <div className="row">
          <div className="col-xs-6">
            <Info
              name={this.state.data.display_name}
              lat={this.state.data.lat}
              lon={this.state.data.lon}
            />

            <br />

            <Map
              lat={this.state.data.lat}
              lon={this.state.data.lon}
            />
          </div>


          <div className="col-xs-6">
            <WeatherA allInfo={this.state.weatherData} />
          </div>


        </div>

      </>
    );


  }


  render() {
    return (
      <>
        <Header />
        <div style={{ margin: '2rem 25%', color: '#3f3697' }}>


          <FormA
            location={this.getLocation}
            update={this.updateSearch}
          />

          <br />

          <div>{this.resultShow()}</div>

        </div>
        <Footer />
      </>);
  }

}

export default App;

