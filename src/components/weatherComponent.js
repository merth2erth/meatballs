import React, { Component } from 'react';

class Weather extends Component {
    state={
        forecast: []
    }

    getWeather = () => {
        //url currently hardcoded for F-V; update for being able to select zip
        let url = `api.openweathermap.org/data/2.5/forecast?zip=27526,us&appid=${process.env.WEATHER_APP_API}`;
        fetch(url, {
            method: "GET",
        })
        .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            this.setState({
                forecast: data.weather[5]
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };


      render() {
          return (
              <div>
                  {this.getWeather()}
                  {this.state.forecast}
              </div>
          )
      }
}


export default Weather;