module.exports = function getZerosCount(number) {
  var result = 0;
  for (let i = 5 ; i < number; i = i * 5) {
    result = result + Math.floor(number / i);
  }
  return result;
}
