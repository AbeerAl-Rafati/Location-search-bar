import React, { Component } from 'react'
import axios from 'axios';
// import Form from 'react-bootstrap/Form';



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      seach: ''
    };
  }

  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=pk.082dcc9f8fc663748f0ed6c6ddb332a1&q=${this.state.seach}&format=json`;

    const request = await axios.get(url);

    this.setState({
      data: request.data[0]

    })

  };


  updateSearch = (event) => {
    this.setState({ seach: event.target.value });
  }

  render() {
    return (

      <div style={{ margin: '2rem 5rem', color: '#3f3697' }}>
        <h1>City Explorer</h1>
        <br />
        <form onSubmit={this.getLocation} >
          <input onChange={this.updateSearch} type="text" size="lg" placeholder='city name ...' />
          <br />
          <br />
          <input type="submit" size="lg" value='Get City' className="btn btn-danger" style={{ width: '10rem' }} />
        </form>
        <br />
        <p>
          {this.state.data.display_name}
        </p>
        <br />
      </div>
    )
  }
}

export default App;
