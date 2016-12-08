var React = require('react');
var WeatherForm = require('./weather/weather-form');
var WeatherMessage = require('./weather/weather-message');
var openWeather = require('openWeather');
var weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch(location){
    console.log(location);
    var that = this;
    this.setState({isLoading: true});
    openWeather.getTemp(location).then(
      function (temp) {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        })
      },
      function (err) {
        this.setState({isLoading: false});
        alert(err);
      });
  },
  render(){
    var {temp, location, isLoading} = this.state;

    function renderMessage(){
      if(isLoading){
        return (<h3>Fetching Weather</h3>);
      }
      else if(temp && location){
        return (<WeatherMessage temp={temp} location={location}/>);
      }
    }

    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = weather;