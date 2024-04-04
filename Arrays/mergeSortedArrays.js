
const mergeSortedArrays_Exercise = (arr_one, arr_two) => {
  const a2Length = (arr_one.length - 1) + (arr_two.length);
  let array1Ptr = 0;
  let array2Ptr = 0;
  const mergedArray = [];

  while (a2Length >= array1Ptr + array2Ptr) {
    console.log(array1Ptr, array2Ptr);
    if (arr_one[array1Ptr] < arr_two[array2Ptr]) {
      mergedArray.push(arr_one[array1Ptr]);;
      array1Ptr++;;

    } else if (arr_two[array2Ptr] < arr_one[array1Ptr]) {
      mergedArray.push(arr_two[array2Ptr]);
      array2Ptr++;

    } else if (arr_one[array1Ptr] || arr_two[array2Ptr]) {
      if (arr_one[array1Ptr]) {
        mergedArray.push(arr_one[array1Ptr]);
        array1Ptr++;

      } else if (arr_two[array2Ptr]) {
        mergedArray.push(arr_two[array2Ptr]);
        array2Ptr++;

      }
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays_Exercise([1, 4, 6, 8], [2, 3, 9]));
console.log(mergeSortedArrays_Exercise([], [1]));
console.log(mergeSortedArrays_Exercise([1], []));
console.log(mergeSortedArrays_Exercise([1, 5], [2, 3, 4]));
console.log(mergeSortedArrays_Exercise([2, 2, 3, 3, 4], [5, 5, 6, 8, 8]));

const mergeSortedArrays_Solution = (array1, array2) => {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j]
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays_Solution([1, 4, 6, 8], [0, 2, 3, 9]));
console.log(mergeSortedArrays_Solution([], [1]));
console.log(mergeSortedArrays_Solution([1], []));
console.log(mergeSortedArrays_Solution([1, 5], [2, 3, 4]));
console.log(mergeSortedArrays_Solution([2, 2, 3, 3, 4], [5, 5, 6, 8, 8]));

