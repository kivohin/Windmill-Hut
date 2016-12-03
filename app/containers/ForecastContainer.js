var React = require('react');
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true
    }
  },

  componentDidMount: function() {
    api.getCityForecast(this.props.routeParams.city)
      .then(function(forecast) {
        this.setState({
          isLoading: false
        });
        console.log(forecast);
      }.bind(this))
  },

  render: function() {
    return(
      <Forecast
        isLoading={this.state.isLoading} />
    )
  }
});

module.exports = ForecastContainer;