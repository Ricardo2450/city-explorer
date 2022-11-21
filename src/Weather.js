import React from 'react'
import WeatherDay from './WeatherDay'

class DisplayWeather extends React.Component {
  render() {
    return (
      <>
        {this.props.forecast.length < 1 ? <p></p> :
          <div>
            <p>3 Day Forecast</p>
            {this.props.forecast.map((day, idx) => (
              <WeatherDay dailyForecast={day} idx={idx} key={idx} />
            ))}
          </div>
        }
      </>

      // <>
      // {this.props.data.map((weatherDay, idx) => {
      //   <WeatherDay key={idx}
      //   date={weatherDay.date}
      //   description={weatherDay.description}
      //   />
      // })}
      // </>
    )
  }
}


export default DisplayWeather
