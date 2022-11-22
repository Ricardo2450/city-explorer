import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
// import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import DisplayMovies from './DisplayMovies';
import Weather from './Weather';



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
      movieData: [],
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

      this.handleWeatherRequest(
        locationInfo.data[0].lat,
        locationInfo.data[0].lon
      );

      this.handleMovieRequest();

    } catch (error) {
      // console.log('error: ', error);
      //     console.log('error.message: ', error.message);
      this.setState({
        errorMessage: error.message,
        isError: true
      })
    }
  }



  handleWeatherRequest = async (lat, lon) => {
    // e.preventDefault();
    // console.log(lat);
    // console.log(lon);
    try {
      // console.log(`${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`);
      let weatherUrl = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`);
      // `${process.env.REACT_APP_SERVER}/`
      // console.log(weatherUrl);

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
    }
  }


  handleMovieRequest = async () => {
    // e.preventDefault();
    // console.log(searchedCity);
    try {
      // console.log(`${process.env.REACT_APP_SERVER}/movie?name=${this.state.city}`);
      let movieUrl = await axios.get(`${process.env.REACT_APP_SERVER}/movies?name=${this.state.city}`);
      // `${process.env.REACT_APP_SERVER}/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchedCity}`
      console.log(movieUrl);      

      this.setState({
        movieData: movieUrl.data,
        isError: false,
        isMovie: true,
      });
    } catch (error) {
      console.log('error: ', error)
      console.log('error.message: ', error.message);
      this.setState({
        errorMessage: error.message,
        isError: true,
        isMovie: false
      });
    }
  }




  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    });
  };




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
        <>
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
            <div id='mapURL'>
              <img src={mapURL} alt={this.props.name} title={this.props.name} />
            </div>
            </>
        }

        {/* <Weather/> */}
        <div className='weatherDiv'>
          {this.state.weatherData && <Weather forecast={this.state.weatherData} />}
        </div>

        {/* <DisplayMovies/> */}

        <div className='movieDiv'>
          {this.state.movieData && <DisplayMovies movies={this.state.movieData}/>} 
        </div>
        
        
        
        {/* {
          // <p>Three day forcast</p>

          this.state.weatherData.length ?
          this.state.weatherData.map(forcast => (
            <>
            <p>{forcast.date} will be {forcast.description}</p>
            </>
            ))
            : <></>
          } */}
        
        
        
        {/* {
          this.state.movieData.length ?
          this.state.movieData.map(movieInfo => (
            <>
            <p>{movieInfo.title} {movieInfo.releaseDate}</p>
            <p>{movieInfo.overview}</p>
            <img src={movieInfo.url} alt={movieInfo.title} title={movieInfo.title}/>
            </>
          ))
          : <></>
        } */}

      </>
    )
  }


}


export default App;

