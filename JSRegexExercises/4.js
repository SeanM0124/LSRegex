/*
Write a method that changes every arithmetic operator
(+, -, *, /) to a '?' and returns the resulting string.
Don't modify the original string.
*/

function mysteriousMath(stringEq) {
  let result = stringEq.replace(/(-|\+|\/|\*)/g, '?');
  console.log(result);
}

mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'