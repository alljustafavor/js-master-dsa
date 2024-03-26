const boxes = [1,2,3,4,5];

function logPairs(arr) {

  for (let i = 0; i < arr.length; i++) {

    for (let k = 0; k < arr.length; k++) {
      console.log(`[${arr[i]}, ${arr[k]}]`);
    }
  }
}

logPairs(boxes);
