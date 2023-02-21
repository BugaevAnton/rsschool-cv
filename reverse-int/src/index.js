module.exports = function reverse (n) {
  let num = Math.abs(n)
  return num.toString().split('').reverse().join('');
 }
