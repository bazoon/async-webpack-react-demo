'use strict';

export default () => {  
  return new Promise(resolve => {
    require.ensure([], () => {

      setTimeout(function () {
        let Hello = require('./hello.jsx');
        resolve(Hello);  
      },2000);
      

    });
  });
};