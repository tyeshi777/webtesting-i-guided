module.exports = {
  add
};

function add(args) {
  const numbers = Array.isArray(args) ? args : [...arguments];
  return numbers.reduce((a, b) => a + b, 0);
}
