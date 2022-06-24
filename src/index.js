module.exports = function reverse (n) {
  const absStrNum = String(Math.abs(n));
  

  let result = ''; 

  for (let i = absStrNum.length - 1; i >= 0; i--) {
    i === absStrNum.length - 1 && absStrNum[i] === '0' ? result += '' : result += absStrNum[i];
    }
  
  return parseInt(result);
}
