//1.Override the method you create in Animal class

class Animal {
  constructor(name, age, color, legs) {
    this.Name = name;
    this.Age = age;
    this.Color = color;
    this.Legs = legs;
  }
  getEat() {
    return "Need food";
  }
  getWalk() {
    return "run fast";
  }
}
const a1 = new Animal("gulu", 2, "brown", 4);
console.log("Animal Name", a1.Name);
console.log("Animal walk", a1.getWalk());

class Dog extends Animal {
  saySomething() {
    return "I am dog";
  }
}

const d1 = new Dog("coco");
console.log(d1.saySomething());
console.log(d1.getEat());

class Cat extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }
  getWalk() {
    //override
    return "run slow";
  }
}

const c1 = new Cat("miu", 3, "black", 4, "male");
console.log(c1.gender);
console.log(c1.getWalk());
