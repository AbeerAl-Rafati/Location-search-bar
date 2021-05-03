import React, { Component } from 'react'
import axios from 'axios';
import Header from './header';
import Form from 'react-bootstrap/Form';




export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      seach: '',
      show: false,
    };
  }

  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=pk.082dcc9f8fc663748f0ed6c6ddb332a1&q=${this.state.seach}&format=json`;

    const request = await axios.get(url);

    this.setState({
      data: request.data[0],
      show: true

    })

  };


  updateSearch = (event) => {
    this.setState({ seach: event.target.value });
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
          <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt='' />
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
          {this.resultShow()}
        </div>
      </>)
  }

}

export default App;

