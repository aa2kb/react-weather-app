var Nav = require('Nav');

var main = (props) => {
  return(
    <div>
      <Nav/>
      <h2>Main component</h2>
      {props.children}
    </div>
  )
};

module.exports = main;