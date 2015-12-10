'use strict';

export default () => {  
  return new Promise(resolve => {
    require.ensure([], () => {

      setTimeout(function () {
        let List = require('./list.jsx');
        resolve(List);  
      }, 3000);
      

    });
  });
};