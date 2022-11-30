import React from 'react';

class WeatherDay extends React.Component {
  render() {
    return (
      <div key={this.props.idx}>
        <p>Date: {this.props.dailyForecast.date}</p>
        <p>
        {this.props.dailyForecast.description}
        </p>
      </div>
    //   <>
    //   <p>{this.props.date}</p>
    //   <p>{this.props.description}</p>
    // </>
    )
  }
}

export default WeatherDay
