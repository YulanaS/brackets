module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) {
    return false;
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if ( (result[result.length - 1] ===  bracketsConfig[j][0]) && (str[i] === bracketsConfig[j][1]) ) {
        result.pop(result.length - 1);
      } else if(str[i] === bracketsConfig[j][0]) {
        result.push(str[i]);
      }
    }    
  }
  return result.length === 0;
}
