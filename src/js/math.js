// CommonJS Way
// module.exports = {
//   add: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   }
// };

// ES6 Way:
var math = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  }
};

export default math;
