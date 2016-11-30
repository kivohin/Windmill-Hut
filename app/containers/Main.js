var React = require('react');
var styles = require('../styles');

var Main = React.createClass({
  getInitialState: function() {
    return {
      city: ''
    }
  },

  render: function() {
    return(
      <div style={styles.container}>
        <h2>Windmill Hut</h2>
        <div style={styles.navbar}>
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

        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;