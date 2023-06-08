// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

const numberDictionary = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function zero() {
  return numberDictionary[zero.name];
}
function one() {
  return numberDictionary[one.name];
}
function two() {
  return numberDictionary[two.name];
}
function three() {
  return numberDictionary[three.name];
}
function four() {
  return numberDictionary[four.name];
}
function five() {
  return numberDictionary[five.name];
}
function six() {
  return numberDictionary[six.name];
}
function seven() {
  return numberDictionary[seven.name];
}
function eight() {
  return numberDictionary[eight.name];
}
function nine() {
  return numberDictionary[nine.name];
}

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function times(a, b) {
  return a * b;
}
function dividedBy(a, b) {
  return a / b;
}
