import React from 'react';
import ListLoader from "./module2/loader.js";
import TextLoader from './module3/loader.js';
import HelloLoader from './module1/loader.js';

import ComponentProxi from './proxy.js';

var Empty = React.createClass({
  render () {
    return <div></div>;
  }
});

var Main = React.createClass({

  getInitialState() {
    return { component: <Empty/> };
  },

  
  loadText() {
    this.setState({ component: <ComponentProxi loader={TextLoader} color='yellow'/> });
  },

  loadList() {
    this.setState({ component: <ComponentProxi loader={ListLoader} color='pink'/> });
  },

  loadHello() {
    this.setState({ component: <ComponentProxi loader={HelloLoader} color='pink'/> });
  },
 
  render() {
    // console.log(this.state.component);
      return (
        <div>
          <h1>Main component</h1>
          <button onClick={this.loadText}>Load Text</button>
          <button onClick={this.loadList}>Load List</button>
          <button onClick={this.loadHello}>Load Hello</button>
          {this.state.component}

        </div>
      );
  }
});

export default Main;
