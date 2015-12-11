import React from 'react';


class Text extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    console.log('render text', this.props);
    let color = this.props.color || 'white';
    let style = {background: color};
    return <h2 style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur neque provident sapiente ad delectus dolorem quis enim magni dolore soluta suscipit laboriosam dicta, vel maiores dolorum culpa cupiditate nobis quam.</h2>;
    
    
  }
}

module.exports = Text;
