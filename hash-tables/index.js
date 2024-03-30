let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhhhhh');
  }
}

//Access
console.log("Access: ",user.age) // O(1)

//Insert
user.spell = 'abrakadabra'; // O(1)
console.log("Insert: ",user.spell)

// Hash Collisions
// O(n/k(k = hashtable.length)) get rid of constants
// O(n)

// MAP() & SET()
// With a Object the data is not orderd
// Wtih a Map the data is orderd
const a = new Map();

// Only stores Keys with no values;
const b = new Set();

