import _ from "lodash";

{
  // Tanpa lodash
  const myArray = [1, 2, 3, 4];
  let sum = 0;

  for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  }

  console.log(sum);
}

// Dengan lodash
const myArray = [1, 2, 3, 4]; // 1+2+3+4
const sum = _.sum(myArray);

console.log(sum);
