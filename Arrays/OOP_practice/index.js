// reference type

const object1 = { value: 10 };
const object2 = object1; // object2 is just a reference to object1 address in memory
const object3 = { value: 10 };

object1 === object2 // true
object1 === object3 // false
object1.value = 15
console.log(object2.value)

// context vs scope

const object4 = {
  a: function() {
    console.log(this);
  }
}

/* console.log(object3.a()); */

// instantiation

class Player {
  constructor(name, type) { 
    // This function runs when a Player object is created. It initializes the object's properties, storing the provided name and type.
    this.name = name;
    this.type = type;
  }
  
  introduce() {
    console.log(`Hi I am  ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type) 
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const Joe = new Player("Joe", "King");
console.log(Joe);
Joe.introduce();
const Jody = new Wizard("Jody", "Dark Magic");
Jody.play();
