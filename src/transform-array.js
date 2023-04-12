const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let newArr = [];
    for(let i = 0; i<arr.length; i++){
    switch (arr[i]){
      case '--discard-next':
          newArr.push('x');
          newArr.push('x');
          i+=1;
          break;
       case '--discard-prev':
          newArr[i-1] = 'x';
          newArr.push('x');
          break;
       case '--double-prev':
          newArr.push(newArr[i-1])
          newArr.push('x');
          break;
       case '--double-next':
          newArr.push('x');
          newArr.push(arr[i+1])
          break;
       default:
          newArr.push(arr[i])
          break;
        }
     }
 
  return newArr.filter((item)=>item!='x'&&item!=undefined);
}

module.exports = {
  transform
};
