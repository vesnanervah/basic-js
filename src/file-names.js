const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  return names.reduce(function(res, item, index){
    let repeat = 0
    names.forEach(function(compareItem, compareIndex){
      if(item == compareItem && index>compareIndex){
        repeat++;
      }
    })
    repeat>0?res.push(item+`(${repeat})`):res.push(item);
    return res.map(function(resItem, resIndex){
      let deepRepeat = 0;
      res.forEach(function(compareItem, compareIndex){
        if(resItem == compareItem && resIndex>compareIndex){
          deepRepeat++;
        }
      })
      return deepRepeat>0?resItem+`(${deepRepeat})`:resItem;
    });
  }, [])
}

module.exports = {
  renameFiles
};
