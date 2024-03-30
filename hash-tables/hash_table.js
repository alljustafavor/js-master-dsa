class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // O(n)

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } // Collision: O(n) | !Collision: O(1)

   keys() {
    if (!this.data.length) return undefined
    let result = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0])
          }
        } else {
          result.push(this.data[i][0])
        } 
      }
    }
    return result; 
  }

  values() {
    if (!this.data.length) return undefined;
    let valuesArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data.length) {
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            valuesArray.push(this.data[i][j][1]);
          }
        } else {
            valuesArray.push(this.data[i][1]) 
        }
      }
    }
    return valuesArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 45);
myHashTable.set("pairs", 10);
myHashTable.get("grapes");
console.log(myHashTable);
console.log(myHashTable.keys());
console.log(myHashTable.values());
