// import React from 'react';



// class WeatherA extends React.Component {
//   render() {

//     return (
//       this.props.weatherInfo.map((item, index) => {
//         return (
//           <div key={index}>
//             <p>In day  : {item.date}</p>
//             <p>The weather in the city : {item.status}</p>
//             <p>========================</p>
//           </div>
//         );


//       })
//     );
//   }

// }

// export default WeatherA;

import React from 'react';



class WeatherA extends React.Component {
  render() {

    return (

      <div>
        <p>In day  : {this.props.weatherInfo}</p>
        <p>The weather in the city :  {this.props.weatherInfo}</p>
        <p>========================</p>
        console.log({this.props.weatherInfo});
      </div>
    );



  }

}

export default WeatherA;
