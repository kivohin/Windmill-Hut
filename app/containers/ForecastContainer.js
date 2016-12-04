var React = require('react');
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      forecast: {}
    }
  },

  componentDidMount: function() {
    api.getCityForecast(this.props.routeParams.city)
      .then(function(forecast) {
        this.setState({
          isLoading: false,
          forecast: forecast
        });
        console.log(forecast.list);
      }.bind(this))
  },

  render: function() {
    return(
      <Forecast
        isLoading={this.state.isLoading}
        forecast={this.state.forecast}
        cityName={this.props.routeParams.city} />
    )
  }
});

module.exports = ForecastContainer;