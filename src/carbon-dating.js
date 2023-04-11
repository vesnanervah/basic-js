const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sA) {
  return ( (typeof sA == 'string') && (!isNaN(sA)) && sA>0 && (+sA>0) && (+sA<=15) ) ? 
Math.ceil(Math.abs(Math.log(sA/15))/(0.693/5730)):false;
}

module.exports = {
  dateSample
};
