const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  return (arr == null) ||(arr == undefined) || (!Array.isArray(arr)) || (arr.length == 0)  ? false 
  : ( arr.map(function(item){
       if(typeof item == 'string'){
          for(let i = 0; i < [...item].length; i++){
            if([...item][i] != ' '){
              return [...item][i].toUpperCase();
            }
          }
       }
      }).sort().join('')
    )
}

module.exports = {
  createDreamTeam
};
