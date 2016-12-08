var React = require('react');

var weatherMessage = React.createClass({
  render(){
    var {temp,location} = this.props;
    return(
      <div>
        <h2>Its {temp} in {location}</h2>
      </div>
    )
  }
});

module.exports = weatherMessage;