//classes :-We create class to create an object.
//A Class is like an object constructor, or a "blueprint" for creating objects.
//class allows to create many objects.

//Defining a class:- (class name in the camelCase)

class Person {}

//class Initiate:- (creating an object from a class)

class Person1 {}
const pp = new Person1();
console.log(pp);

//class constructor :- constructor e built-in function 6 je apda object mate blue-print create karva de 6
//constructor function start j constructor word and paranthesis thi thay 6   constructor()
//paranthesis ma apde object ni properties ne as a parameter pass kariye 6
//constructor na parameters ne class sathe attach karva mate apde this keyword no use kariye 6

// class Person2 {
//   constructor(fname, lname) {
//     console.log(this);
//     this.finame = fname;
//     this.liname = lname;
//   }
// }
// const person = new Person2();
// console.log(person);

// //pass the value of the properties
// class Person3 {
//   constructor(fname, lname) {
//     this.fi = fname;
//     this.li = lname;
//   }
// }
// const pp1 = new Person3("KK", "Patel");
// console.log(pp1);

//default value with constructor
// class Person4 {
//   constructor(fname = "bhumik", lname = "patel", age = 22) {
//     this.fi = fname;
//     this.li = lname;
//     this.age = age;
//   }
// }
// const pp2 = new Person4("KK", "Patel", 22);
// const pp22 = new Person4();
// console.log(pp2);
// console.log(pp22);

// //class methods
// class Person5 {
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//   }
//   getFullName() {
//     const fullName = this.fname + " " + this.lname + " " + this.age;
//     return fullName;
//   }
// }
// const p1 = new Person5("KK", "Patel", 21);
// const p2 = new Person5("kruti", "Patel", 22);

// console.log(p1.getFullName());
// console.log(p2.getFullName());

//Properties with initial value (jyare inital value apeli hoy tyare default ya object ma pass kareli value
//consider na thay)

// class Person6 {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.score = 0;
//     this.skills = [];
//   }
// }

// const person111 = new Person6("Asabeneh", "Yetayeh", 250);
// const person222 = new Person6("Lidiya", "Tekle", 28);

// console.log(person111.score);
// console.log(person222.score);

// console.log(person111.skills);
// console.log(person222.skills);

//4 methods left
//getter methods :- The get method allow us to access value from the object. nd getter method ma get karva mate paranthesis nahi lakhvnu

// class Person7 {
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     return this.fname + " " + this.lname;
//   }
//   get getscore() {
//     return this.score;
//   }
//   get getskill() {
//     return this.skills;
//   }
// }

// const person1 = new Person7("kuku", "shah", 24);
// console.log(person1.getscore);
// console.log(person1.getskill);
// console.log(person1.getFullName());

//setter method :- The setter method allow us to modify the value of certain properties.

// class Person8 {
//   constructor(name, password, age) {
//     this.name = name;
//     this.password = password;
//     this.age = age;
//     this.score = 0;
//     this.skills = [];
//   }
//   get getscore() {
//     return this.score;
//   }
//   set setScore(score) {
//     this.score = this.score + score;
//   }
//   set setSkills(skill) {
//     this.skills.push(skill);
//   }
// }

// const per = new Person8("kruti", "kuku123");
// per.setScore = 12;
// per.setSkills = "HTML";
// per.setSkills = "CSS";
// console.log(per.score);
// console.log(per.skills);

class Person1111 {
  constructor(fname, lname, age) {
    this.finame = fname;
    this.liname = lname;
    this.age1 = age;
    this.skills = [];
  }
  getPersonInfo() {
    let fullName = this.finame + " " + this.liname;
    let Skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        `and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = Skills ? `He knows ${Skills} ` : " ";
    let info = `${fullName} is ${this.age}. ${formattedSkills}`;
    return info;
  }
  set setSkills(skill) {
    this.skills.push(skill);
  }
}

const p11 = new Person1111("bhumik", "patel", 21);

p11.setSkills = "HTML";
p11.setSkills = "CSS ";
p11.setSkills = "JAVASCRIPT";
console.log(p11.skills);
console.log(p11.getPersonInfo());

//static method :-
//static keyword defines a static method for a class.
//static method are not called on the object (instance of class) e only class par j call thay 6
//means const demo = new Person();
//hoy toh demo.favoriteSkill() em access nahi kari sakay
//direct className.staticemethodName() ==> Person.favoriteSkill()

class Person {
  constructor(fname, lname, age) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  getPersonInfo() {
    return "My name is kk";
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName + " " + this.age;
    return fullName;
  }
}

console.log(Person.favoriteSkill());

//Inheritance :- Parent class ni peroprty and method ne access karva

// class Student extends Person {
//   saySomething() {
//     return "I am student";
//   }
// }

// const ss = new Student("bhumik", "patel", 11);
// console.log(ss.saySomething());
// console.log(ss.getPersonInfo());
// console.log(ss.getFullName());

//Overriding methods:-

//overriding method :- parent class ma koi property exist nahi karti nd child class ma add karvi 6
//toh child class ma again constructor define karvu pade nd ema e new property define karvni
//then super method e constructor ni andar j define karvni toh super method ni help thi parent
//class ni property nd methods ne access kari sakiye
//nd main override means parents class ma alreday e method ya property exist 6 still child
//class ma again lakhiye 6 pharithi toh e parent class ni value par override thai jay

//We can customize the parent methods, we can add additional properties to a child class.
//If we want to customize, the methods and if we want to add extra properties,
//we need to use the constructor function the child class too.
//Inside the constructor function we call the super() function to access all
//the properties from the parent class.
// The Person class didn't have gender but now let us give gender property for the child class, Student.
//If the same method name used in the child class, the parent method will be overridden.

class Student extends Person {
  constructor(firstName, lastName, age, gender) {
    super(firstName, lastName, age);
    this.gender = gender;
  }
  getPersonInfo() {
    //override
    return "My name is kk to bb";
  }
  saySomething() {
    return "I am a child of the person class";
  }
}

const s1 = new Student("Asabeneh", "Yetayeh", 250, "Male");
const s2 = new Student("Lidiya", "Tekle", 28, "Female");

console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

console.log(s2.saySomething());
console.log(s2.getFullName());
console.log(s2.getPersonInfo());
