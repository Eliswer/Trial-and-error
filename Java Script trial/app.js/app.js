function logNumbers(num1, num2) {
  console.log(num1 + num2);
  //what if I have return here, or how do I have return here, since I dont have any variables ?
  //What would I return ?
}
logNumbers(1, 1);

function multiplyNumbers(num3, num4) {
  let result;
  result = num3 * num4;
  console.log(result);
  //return num3 * num4; =shorter version of this whole code ?
  return result;
}
let execution = multiplyNumbers(5, 5);
console.log(execution);

//why DOES THIS NOT WORK ? T.T
//how do I execute console log outside the function
