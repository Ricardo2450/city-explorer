import React from 'react'
import WeatherDay from './WeatherDay'

class DisplayWeather extends React.Component {
  render() {
    return (
      <>
      {this.props.data.map((weatherDay, idx) => {
        <WeatherDay key={idx}
        date={weatherDay.date}
        description={weatherDay.description}
        />
      })}
      </>
    )
  }
}


export default DisplayWeather
