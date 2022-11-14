import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      isError: false,
      errorMessage: ''
    }
  }

// handleSubmit = async (e) => {
//   try{
//   e.preventDefault();
// get the data from the API


// 1.async
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
  cityData: locationInfo.data[0]
});
}

handleCityInput = (e) => {
  this.setState({
    city: e.target.value
  });
};



render() {
  // location for maps code
// let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6038321,-122.330062&zoom=14`


  return (
    <>
      <h1>City Explorer</h1>
      <form onSubmit={this.handleCitySubmit}>
        <label>Search for a City
          <input type='text' name='city' onChange={this.handleCityInput}/>
        </label>
        <button type='submit'>Search for a City</button>
      </form>
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
