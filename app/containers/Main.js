var React = require('react');

var Main = React.createClass({
  render: function() {
    return(
      <div>
        Hello Universe!
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;