import React, { Component } from 'react';

class Weather extends Component {
    state={
        forecast: []
    }

    getWeather = () => {
        let url = `api.openweathermap.org/data/2.5/forecast?zip=27526,us&appid=${process.env.WEATHER_APP_API}`;
        fetch(url, {
            method: "GET",
        })
        .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            this.setState({
            //   recipe: data.recipes[0]
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
                  {this.state.forecast}
              </div>
          )
      }
}


export default Weather;