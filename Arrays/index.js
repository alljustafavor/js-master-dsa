const strings = ['a', 'b', 'c', 'd'];

console.log(strings[2])

// PUSH (ADD TO END);
strings.push('e'); // BIG-O: O(1) Constant
console.log(strings);

// POP (REMOVE LAST ELEMENT) // BIG-O: O(1) Constant
strings.pop(); // removes 'e'
console.log(strings);

// UNSHIFT (ADD ELEMENT TO BEGINNING) 
strings.unshift('x'); // BIG-O: O(n) Linear
console.log(strings)

// SPLICE 
strings.splice(2, 0, 'splice');
console.log(strings);
