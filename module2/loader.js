'use strict';

export default function ListLoader () {  
  return new Promise(resolve => {
    require.ensure([], () => {

      setTimeout(function () {
        let List = require('./list.jsx');
        resolve(List);  
      }, 2000);
      

    });
  });
};