import axios from 'axios';
import React from 'react';
import Table from 'react-bootstrap/Table';
// import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';


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
      errorMessage: '',
      weatherData: [],
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
    try {
      e.preventDefault();
      // console.log(this.state.city);
      // e.target.city.value;

      //  Make a request to the API using the URL
      let locationInfo = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      // proof of life
      // console.log(locationInfo.data[0]);
      // put the data from the API into state
      this.setState({
        lon: locationInfo.data[0].lon,
        lat: locationInfo.data[0].lat,
        name: locationInfo.data[0].display_name,
        showCityData: true,
        isError: false,
        isAlertShown: false,
      });

      this.handleWeatherRequest();

    } catch (error) {
      // console.log('error: ', error);
      //     console.log('error.message: ', error.message);
      this.setState({
        errorMessage: error.message,
        isError: true
      })
    }
  }

  
  
  handleWeatherRequest = async () => {
    // e.preventDefault();
    try {
      let weatherUrl = await axios.get(`${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.city}`);
      // `${process.env.REACT_APP_SERVER}/`
      console.log(weatherUrl);

      this.setState({
        weatherData: weatherUrl.data,
        isError: false,
        isWeather: true
      });
    } catch (error) {
      console.log('error: ', error)
      console.log('error.message: ', error.message);
      this.setState({
        errorMessage: error.message,
        isError: true,
        isWeather: false
      });
      // let locationData = await axios.get(Url);
      // console.log(locationData);
    }
  }






  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    });
  };

  // handleAlert = () => {
  // const [show, setShow] = useState(true);

  //   if (show) {
  //     return (
  //       <Alert variant="danger" onClose={() => setShow(false)} dismissible>
  //         <Alert.Heading>You got an error!</Alert.Heading>
  //         <p>
  //         {this.state.errorMessage}
  //         </p>
  //       </Alert>
  //     );
  //   }
  //   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  // }


  render() {
    // location for maps code


    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=14`


    // console.log(mapURL);


    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.handleCitySubmit}>
          <label>Search for a City
            <input type='text' name='city' onChange={this.handleCityInput} />
          </label>
          <button variant='primary' type='submit'>Explore!</button>
        </form>
        {this.state.isError ? <Alert className="alert" variant="danger"><Alert.Heading>Error!</Alert.Heading><p>{this.state.errorMessage}</p></Alert> : <p className='alert'></p>}
        {this.state.showCityData &&
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


        {/* <div id='mapURL'>
        <img src={mapURL} alt='City Map' title='map on error or blank' />
        </div> : */}
        <div id='mapURL'>
          <img src={mapURL} alt={this.props.name} title={this.props.name} />
        </div>
        
        {
          
          this.state.weatherData.length &&
          this.state.weatherData.map(forcast => (
            <>
            {/* <p>Three day forcast</p> */}
            <p>{forcast.date} will be {forcast.description}</p>
            </>
          ))
        }



        {/* 
        {this.state.mapURL ? <img src={mapURL} alt='City Map' fluid /> : <p className='alert'></p>}
        <img src={mapURL} alt='City Map' fluid /> */}

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
