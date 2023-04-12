const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  addLink(value){
    if(value === undefined){value = ``}
    this.values==undefined?this.values=[value]:this.values.push(value);
    return this;
  },
   finishChain(){
    result = this.values.reduce((acc, item, index)=>index==0?acc+`( ${item} )`: acc+`~~( ${item} )`, '')
    this.values = [];
    return result;
  },
  removeLink(value){
    if(value<=0 || value >this.values.length || typeof value != 'number'){
      this.values = [];
      throw new Error('You can\'t remove incorrect link!')
    }
    else{
      this.values = this.values.filter((item)=>item!=this.values[value-1]); 
      return this; 
    }
  },
  reverseChain(){
    this.values != undefined? this.values.reverse(): this.values = [];
    return this;
  },
  getLength(){
    return this.values.length
  }
};

module.exports = {
  chainMaker
};
