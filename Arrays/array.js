class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItemsDel(index);
  }

  shiftItemsDel(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    
    this.data[0] = item;
    this.length++
    return this.length;
  }

  insert(index, item) {
    this.length++;
    for (let i = this.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    return this.length
  };

}

const Arr = new MyArray();

Arr.push("world!");
Arr.unshift("Hello, ");
Arr.insert(1, 'wutup ')


console.log(Arr);
