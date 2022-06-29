function logNumbers(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}
let tmp = logNumbers(1, 1);
console.log(tmp);

function multiplyNumbers(num3, num4) {
  let result;
  result = num3 * num4;
  console.log(result);
  return result;
}
let execution = multiplyNumbers(5, 5);
console.log(execution);

function getPerson() {
  let person = {
    name: 'Georgi',
    place: 'Amstetten',
    age: 26,
    taken: true,
  };

  let person2 = {
    name: 'Eli',
    place: 'Jarosov',
    age: 19,
    taken: true,
  };

  let array = [
    person,
    person2,
    'Jirka',
    [
      'apples',
      'banana',
      'pear',
      {
        name: 'lemon',
        color: 'yellow',
      },
    ],
  ];
  return array;
}

console.log(getPerson()[3][3].color);

let georgiData = getPerson()[0];
console.log(georgiData.name);

let eliData = getPerson()[2];
console.log(eliData);
