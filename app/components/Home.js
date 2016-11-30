var React = require('react');
var styles = require('../styles');

var Home = React.createClass({
  getInitialState: function() {
    return {
      city: ''
    }
  },

  render: function() {
    return(
      <div className="col-sm-12 text-center" style={styles.background}>
        <h1 style={styles.header}>Enter a city and country</h1>
        <div className="col-sm-4 col-sm-offset-4">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Valencia, Spain"
                value={this.state.city} />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success btn-block"
                type="submit">
                  Get Weather
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Home;