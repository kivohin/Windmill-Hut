var React = require('react');

var styles = {
  mainContainer: {
    width: '100%',
    height: '100vh'
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },

  header: {
    margin: 0
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  formButton: {
    margin: '10px'
  }
}

var Main = React.createClass({
  getInitialState: function() {
    return {
      city: ''
    }
  },

  render: function() {
    return(
      <div style={styles.mainContainer}>
        
        <div className="test" style={styles.container}>
          <h2 style={styles.header}>Windmill Hut</h2>
          
          <div style={styles.formContainer}>
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="Valencia, Spain"
                value={this.state.city} />
            </div>

            <div>
              <button
                className="btn btn-success"
                type="submit"
                style={styles.formButton}>                
                  Get Weather
              </button>
            </div>
          </div>
        </div>

        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;