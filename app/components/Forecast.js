var React = require('react');
var PropTypes = require('react').PropTypes;
var Loading = require('./Loading');

function Forecast(props) {
  if(props.isLoading === true) {
    return(
      <Loading />
    )
  }

  return(
    <div>
      <h1>Forecast</h1>
    </div>
  )
};

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

module.exports = Forecast;