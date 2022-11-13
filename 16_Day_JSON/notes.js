//JSON format is text or string only (json is a string form of an object. (json e object nu string form 6))
//JSON is mostly used when data is sent from a server to a client

//the above json example is not much diffrent from a normal object
//the diffrence is :- the key of a JSON object should be with double quotes or it should be a string.
//javascript object and JSON are very similar that we can change JSON to Object and Object to JSON.

//hint.json => we have diffrent keys and each keys has a object as a value and each obejct has a keys
//and each keys has to have double quotes.
//hint1.json =>  "users" is the key which has a value array. Inside the array we have diffrent objects
//and each object has a keys and each keys has to have double quotes.
//hint2.json =>
//hint3.json => array as json  //for example [0].powers[0]  //o/p:- 'Radiation resistance'

//In JavaScript the keyword JSON has parse() and stringify() methods.
//When we want to change the JSON (string) to an object we parse the JSON using JSON.parse().
//When we want to change the object to JSON (string) we use JSON.stringify().

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`;

const usersObj = JSON.parse(usersText);
console.log(usersObj);

//using a reviver function with the JSON.parse() :-
//JSON.parse(json[, reviver])
//apde json data ne format karva hoy tyare aa callback function no use thay

const userObj1 = JSON.parse(usersText, (key, value) => {
  let newUser =
    typeof value === "string" && key != "email" ? value.toUpperCase() : value;
  return newUser;
});

console.log(userObj1);

//Converting Object to JSON (string)
//syntax:- JSON.stringify(obj, replacer, space) //Object is required and replacer is optional and is work like filter and space is optional and space means o/p ma object pachi key:value hoy tya starting ma space ave

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const txt = JSON.stringify(users);
console.log(txt); // text means JSON- because json is a string form of an object. (json e object nu string form 6)

//using a filter array with JSON.stringify()
const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

const txt1 = JSON.stringify(
  user,
  ["firstName", "lastName", "country", "city", "age"],
  4
);
console.log(txt1);
