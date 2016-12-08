var React = require('react');
var {Link, IndexLink} = require('react-router');


var nav = (props)=>{
  var activeStyle = {
      color: 'red',
      fontSize: '20px'
    };
  return (
    <div>
      <h2>Nav component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={activeStyle}>Weather</IndexLink>
      <br/>
      <Link to="/about" activeClassName="active" activeStyle={activeStyle}>About</Link>
      <br/>
      <Link to="/example" activeClassName="active" activeStyle={activeStyle}>examples</Link>
    </div>
  )
};

module.exports = nav;