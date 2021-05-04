import React, { Component } from 'react'
import axios from 'axios';
import Header from './header';
import Footer from './footer';
// import Error from './error';
// import Map from './map';

import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      search: '',
      show: false,
      error: false,
      // weather: ''
    };
  }

  getLocation = async (event) => {
    try {
      event.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATOIN_IQ_KEY}&q=${this.state.search}&format=json`;

      const request = await axios.get(url);

      // const myApi = await axios.get(`${process.env.REACT_APP_CLIENT}/weather`);
      // console.log(myApi.data);


      this.setState({
        data: request.data[0],
        show: true,



      })

      // this.setState({

      //   weather: myApi.data[0]

      // })

    }
    catch (error) {
      this.setState({
        show: false,
        error: true,
      });
      alert('ERROR !! Add an acceptable value !!')
    }

  };




  updateSearch = (event) => {

    this.setState({ search: event.target.value })
  }


  resultShow = () => {

    return (

      this.state.show ?
        <>
          <p>
            Wellcom to {this.state.data.display_name}
          </p>
          <br />
          <p>
            Location :  {this.state.data.display_name}  is located at ( {this.state.data.lat} ) by ( {this.state.data.lon} )
          </p>
          <br />
          {/* <Map
            data={this.state.data[0]}
          /> */}

          <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt='' fluid />
          <br />
          {/* <p>The weather in the city : {this.state.weather.data}</p> */}
        </>
        : ''

    )


  }


  render() {
    return (
      <>
        <Header />
        <div style={{ margin: '2rem 25%', color: '#3f3697' }}>

          <br />
          <Form onSubmit={this.getLocation} >
            <Form.Group>
              <Form.Control onChange={this.updateSearch} type="text" size="lg" placeholder='city name ...' style={{ width: '20rem', height: '3rem' }} />
              <br />
              <br />
              <input type="submit" size="lg" value='Get City' className="btn btn-danger" style={{ width: '10rem', height: '3rem' }} />
            </Form.Group>
          </Form >
          <br />
          <div>{this.resultShow()}</div>

        </div>
        <Footer />
      </>)
  }

}

export default App;

