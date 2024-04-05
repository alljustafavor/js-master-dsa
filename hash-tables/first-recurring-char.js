/*  Google Question
 *  Given an array = [2,5,1,2,3,5,1,2,4]
 *  It should return 2
 *
 *  Given an array = [2,1,1,2,3,5,1,2,4]
 *  it should return 1
 *
 *  Given an array = [2,3,4,5]
 *  It should return undefined
 */

/*  var hashmap = {}
 *  for loop over array length
 *  if arr of i not in map += to hashmap
 *  else if i in map
 *    reuturn i
 *  return undefined
 */

const firstRecurrChar = (array) => {
  let hashmap = {};

  for (let i = 0; i < array.length; i++) {
    if (!hashmap[array[i]]) {
      hashmap[array[i]] = array[i];
    } else if (hashmap[array[i]]) {
      return array[i];
    }
  }
  return undefined;
}

console.log(firstRecurrChar([2, 5, 1, 2, 3, 5, 1, 2, 4])); // output: 2
console.log(firstRecurrChar([2, 1, 1, 2, 3, 5, 1, 2, 4])); // output: 1
console.log(firstRecurrChar([2, 3, 4, 5]));                // output: undefined


const firstRecurringCharacter = (array) => {
  for (let i = 0; i < array.length; i++) {

    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i]
      }
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); // output: 2
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); // output: 1
console.log(firstRecurringCharacter([2, 3, 4, 5]));


