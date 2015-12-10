import React from 'react';

class Hello extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    let style = {background: 'yellow'};
    return <h2 style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur neque provident sapiente ad delectus dolorem quis enim magni dolore soluta suscipit laboriosam dicta, vel maiores dolorum culpa cupiditate nobis quam.</h2>;
  }
}

module.exports = Hello;
