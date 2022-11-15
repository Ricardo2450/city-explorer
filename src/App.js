import axios from 'axios';
import React from 'react';
import Table from 'react-bootstrap/Table';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      lat: '',
      lon: '',
      name: '',
      showCityData: false,
      isError: false,
      errorMessage: ''
    }
  }

// handleSubmit = async (e) => {
//   try{
//   e.preventDefault();
// get the data from the API


// 1. async
// 2. await
// 3. .data


//  let swData = await axios.get('https.........');

// //  save that data somewhere??? - save it in State
// console.log(swData.data.results);
// this.setState({
// starWarsData: swData.data.results,
// isError: false
// });
//   } catch (error) {
//     console.log('error: ', error);
//     console.log('error.message: ', error.message);
//     this.setState({
//       errorMessage : error.message,
//       isError: true
//     })
//   }
// }



handleCitySubmit = async (e) => {
  e.preventDefault();
  console.log(this.state.city);
// e.target.city.value;

//  Make a request to the API using the URL
let locationInfo = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
// proof of life
console.log(locationInfo.data[0]);
// put the data from the API into state
this.setState({
  lon: locationInfo.data[0].lon,
  lat: locationInfo.data[0].lat,
  name: locationInfo.data[0].display_name,
  showCityData: true,
});
}



handleCityInput = (e) => {
  this.setState({
    city: e.target.value
  });
};



render() {
  // location for maps code

  // let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.lat},${cityData.lon}&zoom=12`

// let locationTag = this.state.cityData.map((place, lat, lon,idx) => {
//   return <li key={idx}>{place.name}, {lat.lat}, {lon.lon}</li>
// });

// console.log(mapURL);


  return (
    <>
      <h1>City Explorer</h1>
      <form onSubmit={this.handleCitySubmit}>
        <label>Search for a City
          <input type='text' name='city' onChange={this.handleCityInput}/>
        </label>
        <button type='submit'>Explore!</button>
      </form>
      { this.state.showCityData &&
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>location</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.state.name}</td>
          <td>{this.state.lat}</td>
          <td>{this.state.lon}</td>
        </tr>
        </tbody>
      </Table>
      }
      {/* { this.state.showCityData &&
      <ul>
        <li>{this.state.name}</li>
        <li>{this.state.lon}</li>
        <li>{this.state.lat}</li>
      </ul>
      } */}
    </>
  )
}


}


export default App;




// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       city: '',
//       starWarsData: []
//     }
//   }

// handleSubmit = async (e) => {
//   e.preventDefault();
// // get the data from the API


// // 1.async
// // 2. await
// // 3. .data


//  let swData = await axios.get('https.........');

// //  save that data somewhere??? - save it in State
// console.log(swData.data.results);
// this.setState({
// starWarsData: swData.data.results
// })
// }


// render () {

//   let swCharacters = this.state.starWarsData.map((character, idx) => {
//     return <li key={idx}>{character.name}</li>
//   });




//   return (
//     <>
//       <h1>City Explorer</h1>
//       <form onSubmit={this.handleSubmit}>
//         <label>Search for a City
//           <input type='text' name='city' />
//         </label>
//         <button type='submit'>Search for a City</button>
//       </form>
//       <ul>
//         {swCharacters}
//       </ul>
//     </>
//   )
// }
