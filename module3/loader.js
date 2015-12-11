'use strict';

export default function TextLoader () {  
  return new Promise(resolve => {
    require.ensure([], () => {

      setTimeout(function () {
        let Text = require('./text.jsx');
        resolve(Text);  
      }, 2000);
      

    });
  });
};