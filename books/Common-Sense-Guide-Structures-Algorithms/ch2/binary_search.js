
const binary_search = (array, value) => {
  // First, we establish the lower and upper bound.
  let lower_bound = 0;
  let upper_bound = array.length;
  

  while (lower_bound <= upper_bound) {
    let midpoint = Math.floor((upper_bound + lower_bound) / 2);
    let mid_value = array[midpoint]
    if (value < mid_value) {
      upper_bound = midpoint - 1;
    } else if (value > mid_value) {
      lower_bound = midpoint + 1;
    } else if (value === mid_value) {
        return midpoint
    }
  }
  return -1
}

console.log(binary_search([3, 17, 75, 80, 202], 80))
console.log(binary_search([3, 17, 75, 80, 202], 1))
