const reverseFunctionally = str => str.toLowerCase().split('').reverse().join('');

const reverseFunctionallySpead = str => [...str.toLowerCase()].reverse().join('');

function reverseLoops(str) {
 if (!str || str.length < 2 ) {
    return "str error";
  } 
  const backwards = [];
  const items_length = str.length - 1;

  for (let i = items_length; i >= 0; i--) {
    backwards.push(str[i].toLowerCase())
  }

  return backwards.join('');
}

console.log(reverseFunctionally('Noblett'));
console.log(reverseFunctionallySpead('Noblett'))
console.log(reverseLoops('Noblett'));
