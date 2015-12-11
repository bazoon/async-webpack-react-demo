import React from 'react';

const names = ['Victor Vessels',
        'Rosenda Sonier',
        'Janey Ball',
        'Mark Stasulis',
        'Madalene Strassell',
        'Gerda Wetherby',
        'Lilia Panila',
        'Estela Santa',
        'Nella Batz',
        'Daniel Courtenay',
        'Neville Aronoff',
        'Marie Beaty',
        'Jarvis Hickerson'];


class List extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    
    let color = this.props.color || 'white';
    let style = {background: color};
    return (
      <ul style={style}>
      {
        names.map(function (name) {
          return (<li key={name}>{name}</li>);
        })
      }
      </ul>

    )
  }
}

module.exports = List;
