//1.Create an Animal class. The class will have name, age, color, legs properties
//and create different methods

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
}
const a1 = new Animal("gulu", 2, "brown", 4);
console.log("Animal Name", a1.Name);

//2.Create a Dog and Cat child class from the Animal Class.

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
}

const c1 = new Cat("miu", 3, "black", 4, "male");
console.log(c1.gender);
