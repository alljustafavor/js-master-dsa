const nemo = ['nemo'];
const everyone = ['dory', 'burce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100_000).fill('nemo');

const findNemo = array => {
  for (let i = 0; i < array.length; ++i){
    if (array[i] == 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo(large); // O(n) -> Linear Time

const logFirstTwoBoxes = boxes => {
  console.log(boxes[0]);
  console.log(boxes[1]);
}

logFirstTwoBoxes(everyone); // Constant Time 
