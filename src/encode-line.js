const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return [...str].map(function(item, index, arr){
    if(item!=arr[index-1]){
      let c = 1;
      let subArr = [c, item];
      while(arr[index+c] == subArr[1]){
        c++;
        subArr[0] = c;
      }
      return subArr.filter((a)=>a!=1?a:'').join(''); 
  }
    else{
      return '';
    }
  }).join('')
}

module.exports = {
  encodeLine
};
