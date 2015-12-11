import React from 'react';

var Loading = React.createClass({
  render() {
    return <span>Loading...</span>;
  }
});


var ComponentProxy = React.createClass({

  getInitialState() {
    return { component: Loading }
  },

  componentWillReceiveProps(props) {
    this.setState({ component: Loading });
    props.loader().then((component) => {
      this.setState({ component: component })
    });
  },

  componentWillMount() {
    this.props.loader().then((component) => {
      this.setState({ component: component })
    });
  },

  render() {
    return (
      <div>
      { <this.state.component {...this.props}/> }
      </div>
    )
  }
});

export default ComponentProxy;
