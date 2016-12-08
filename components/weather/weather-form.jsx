var React = require('react');

var weatherFrom = React.createClass({
  onSubmitForm : function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0){
      this.props.onSearch(location);
      this.refs.location.value = '';
    }

  },
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" ref="location"/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = weatherFrom;