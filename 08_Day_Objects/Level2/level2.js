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
      "HTML1",
      "CSS1",
      "JavaScript1",
      "React1",
      "Node1",
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
  Asab2: {
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
      "HTML1",
      "CSS1",
      "JavaScript1",
      "React1",
      "Node1",
      "HTML",
      "CSS",
      "CSS1",
      "JavaScript1",
      "React1",
      "Node1",
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "HTML1",
      "CSS1",
      "JavaScript1",
      "React1",
      "Node1",
    ],
    age: 25,
    isLoggedIn: false,
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
  Asab1: {
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
      "HTML1",
      "CSS1",
      "JavaScript1",
      "React1",
      "Node1",
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "HTML1",
      "CSS1",
      "JavaScript1",
      "React1",
      "Node1",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
};

//1.Find the person who has many skills in the users object.
//a = total value  (accumulator) first value lese
//b = current value second value lese
//The reduce() method returns a single value: the function's accumulated result.
// let result = Object.keys(users).reduce((a, b) =>
//   users[a].skills.length > users[b].skills.length ? a : b
// );

// console.log(result); // For getting Username who has many skills
// console.log(users[result]); // For getting User object who has many skills

//2.Count logged in users, count users having greater than equal to 50 points from the following object.
// let result1 = Object.values(users).filter((user) => user.points >= 50).length;
// console.log("result1", result1);

//3.Find people who are MERN stack developer from the users object
// let result2 = Object.entries(users)
////note :- currentValue is required but mare use ma nahi levi so underscore(_)
////second argument user e index 6
//   .filter(([_, user]) =>
//     user.skills.includes("MongoDB", "Express", "React", "Node")
//   )
//   .map(([name]) => name)
//   .join(", ");
// console.log("result2", result2);

//4.Set your name in the users object without modifying the original users object
// const CopyUser = Object.assign({}, users);
// CopyUser.kruti = {
//   email: "k@gmail.com",
//   skills: ["HTML", "CSS", "JavaScript", "React"],
//   age: 22,
//   isLoggedIn: true,
//   points: 60,
// };
// console.log("orignal users object", users);
// console.log("CopyUser object", CopyUser);

//5.Get all keys or properties of users object
// const getUsers = Object.entries(users);
// console.log("getUsers", getUsers);

//6.Get all the values of users object
// const get_user_object = Object.values(users);
// console.log("get_user_object", get_user_object);

//7.Use the countries object to print a country name, capital, populations and languages.
const countries = {
  Albania: {
    capital: "Alb",
    populations: 1,
    languages: "English",
  },
  Bolivia: {
    capital: "Boli",
    populations: 2,
    languages: "Hindi",
  },
  Canada: {
    capital: "Can",
    populations: 3,
    languages: "UKEnglish",
  },
  Denmark: {
    capital: "Den",
    populations: 4,
    languages: "Hindi",
  },
  Ethiopia: {
    capital: "Eth",
    populations: 5,
    languages: "UKEnglish",
  },
  Finland: {
    capital: "Fin",
    populations: 6,
    languages: "Hindi",
  },
  Germany: {
    capital: "Ger",
    populations: 7,
    languages: "UKEnglish",
  },
  Hungary: {
    capital: "Hun",
    populations: 8,
    languages: "Hindi",
  },
  Ireland: {
    capital: "Ire",
    populations: 9,
    languages: "Gujarati",
  },
  Japan: {
    capital: "Jap",
    populations: 10,
    languages: "English",
  },
  Kenya: {
    capital: "Ken",
    populations: 11,
    languages: "Gujarati",
  },
};

console.log("countries array", countries);
