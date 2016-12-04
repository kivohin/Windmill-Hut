var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function() {
    return(
      <div>
        <Detail />
      </div>
    )
  }
});

module.exports = DetailContainer;