var React = require('react');
var PropTypes = require('react').PropTypes;
var utils = require('../helpers/utils');
var getDate = utils.getDate;

// var styles = {
//   header: {
//     fontWeight: '100',
//     display: 'flex',
//     justifyContent: 'center'
//   }
// }

function DayItem(props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  var description = props.day.weather[0].description;

  return(
    <div>
      <img src={'./app/images/weather-icons/' + icon + '.png'} alt="Weather"/>
      <h3>{date}</h3>
      <h4>{description}</h4>
    </div>
  )
};

DayItem.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired
  }).isRequired
}

module.exports = DayItem;