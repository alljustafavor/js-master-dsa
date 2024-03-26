// Given 2 arrays, create a func that let's a user know (t/f) whether the arrays contain any common items.

// ex one:
//  const arr1 = ['a', 'b', 'c', 'x'];
//  const arr2 = ['z', 'y', 'i'];
//  returns False
//
// ex two:
//  const arr1 = ['a', 'b', 'c', 'x'];
//  const arr2 = [z, y, x];
//  returns true

// INPUT: 2 arrays of n chars;
// OUTPUT: true or false;

// Brute Force/Naive Approach: 
// Big-O: O(a * b);

function containsCommonItem(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr2.length; j++) {

      if (arr1[i] === arr2[j]) {
        return true
      }
    }
  }
  return false
}

const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'x'];

console.log(containsCommonItem(arr1,arr2)) 

// Tell them why this approach is not the best. ie: time complexity


// Hash Table/Object Approach:

function containsCommonItemHT(arr1, arr2) {
  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map) 

  for (let j = 0; j < arr2.length; j++) {
    
    if (map[arr2[j]]) {
      return true
    }
  }
  return false
}

console.log(containsCommonItemHT(arr1, arr2));
