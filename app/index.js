var React = require('react');
var ReactDOM = require('react-dom');

var HelloUniverse = React.createClass({
  render: function() {
    return(
      <div>
        Hello Universe!
      </div>
    )
  }
})

ReactDOM.render(
  <HelloUniverse />,
  document.getElementById('app')
);