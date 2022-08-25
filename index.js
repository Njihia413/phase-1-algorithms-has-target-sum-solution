function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] === complement) {
        return true;
      }
    }
  }
  return false;
}

// function hasTargetSum(array, target) {
//   const seenNumbers = {};
//   for (const number of array) {
//     const complement = target - number;
//     if (seenNumbers[complement]) return true;
//     seenNumbers[number] = true;
//   }
//   return false;
// }

// function hasTargetSum(array, target) {
//   const seenNumbers = new Set(); // initialize an empty Set
//   for (const number of array) {
//     const complement = target - number;

//     // .has returns true if the Set includes the complement
//     if (seenNumbers.has(complement)) return true;

//     // .add adds the number to the Set
//     seenNumbers.add(number);
//   }
//   return false;
// }
/* 
  Write the Big O time complexity of your function here
  Runtime : O(n^2)
  Space: O(n)
*/

/* 
  Add your pseudocode here
  1. Iterate through each number in the array
  2. For the current number in the array, identify a complement that adds to the target
  3. Iterate through the rest of the array
  4. Check if any number is our complement
  5. If yes:
      return true
  6. Else:
      return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
