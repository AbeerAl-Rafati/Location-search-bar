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
      weatherData: [],
      // err: ''
    };
  }

  getLocation = async (event) => {
    try {
      event.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATOIN_IQ_KEY}&q=${this.state.search}&format=json`;



      const request = await axios.get(url);

      // const error = await axios.get(`${process.env.REACT_APP_SERVER}/error`);

      this.setState({
        data: request.data[0],
        show: true,

      });
      this.getWheather();
    }
    catch (error) {
      this.setState({
        show: false,
        error: true,
      });
      // alert('ERROR !! Add an acceptable value !!')
      // <Error />

    }

  };




  getWheather = async () => {
    const weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`;
    const weatherReq = await axios.get(weatherUrl);
    console.log(weatherReq.data);

    this.setState({
      weatherData: weatherReq.data,

    });

  }


  updateSearch = (event) => {

    this.setState({ search: event.target.value });
  }


  resultShow = () => {

    return (


      this.state.error ? <Error /> :
        this.state.show ?

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
            <br />

            <div className="col-xs-8" style={{ width: '120rem', margin: '2rem 0rem 1rem 3.25rem', fontSize: '1rem' }}>
              <WeatherA weatherInfo={this.state.weatherData} />
            </div>


          </div>
          : ''

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
