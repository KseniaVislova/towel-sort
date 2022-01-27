
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if (arguments.length > 0) {
    matrix.map((element, index) => {
      if (index % 2 !== 0) {
        element.reverse();
        element.forEach(item => {
          res.push(item);
        })
      } else {
        element.forEach(item => {
          res.push(item);
        })
      }
    });
  }
  return res;
}
