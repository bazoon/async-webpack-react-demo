import React from 'react';
import HelloLoader from "./module1/loader.js";
import ListLoader from "./module2/loader.js";

var Main = React.createClass({

  getInitialState() {
    return {};
  },

  componentWillMount() {

    HelloLoader().then((helloComponent) => {
      this.setState({ hello: helloComponent })
    });

    ListLoader().then((listComponent) => {
      this.setState({ list: listComponent })
    });

  },
 
  render() {
      return (
        <div>
          <h1>Main component</h1>
          { this.state.hello ? <this.state.hello/> : <h3>Loading text in 2 seconds...wait please</h3>}
          { this.state.list ? <this.state.list/> : <h3>Loading list in 3 seconds...wait please</h3>}
        </div>
      );
  }
});

export default Main;
