
const linear_search_sorted = (array, value) => {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    } else if (array[i] > value) {
      break;
    }
  }
  return -1;
}
console.log(linear_search_sorted([3, 17, 75, 80, 202], 80))
console.log(linear_search_sorted([3, 17, 75, 80, 202], 17))
