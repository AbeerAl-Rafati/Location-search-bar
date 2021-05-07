import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import Error from './error';
import Map from './map';
import FormA from './Form';
import Info from './Info';
import WeatherA from './WeatherA';
import Movies from './Movies';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      search: '',
      show: false,
      error: false,
      weatherData: [],
      moviesData: [],
      cityName: ''
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
      this.getMovies();
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


  getMovies = async () => {
    const moviesUrl = `${process.env.REACT_APP_SERVER}/movies?query=${this.state.search}`;
    const moviesReq = await axios.get(moviesUrl);
    console.log(moviesReq.data);

    this.setState({
      moviesData: moviesReq.data,

    });

  }

  updateSearch = (event) => {

    this.setState({ search: event.target.value });


  }


  resultShow = () => {

    return (


      this.state.error ? <Error /> :
        this.state.show ?

          <div >
            <div style={{ margin: '2rem 25%', color: '#3f3697' }} >
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

            <Container fluid>
              <Row className='justify-content-md-center'>


                <WeatherA weatherInfo={this.state.weatherData} />
              </Row >
              <Row className='justify-content-md-center'>
                <Movies moviesData={this.state.moviesData} />

              </Row >
            </Container>
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
        </div>
        <div style={{ margin: '2rem 10%', color: '#3f3697' }}>{this.resultShow()}</div>


        <Footer />
      </>);
  }

}

export default App;
