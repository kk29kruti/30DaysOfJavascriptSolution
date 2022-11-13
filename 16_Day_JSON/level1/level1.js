const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

//1.Change skills array to JSON using JSON.stringify()
const ConvertArrToObject = Object.assign({}, skills);
console.log("convert skills array into object:", ConvertArrToObject);
const cc = JSON.stringify(ConvertArrToObject);
console.log("skills array to JSON:", cc);

//2.Stringify the age variable
const str = Object.assign({ age }, age);
console.log("convert age variable to object", str);
const cc1 = JSON.stringify(str);
console.log("Stringify the age variable", cc1);

//3.Stringify the isMarried variable
const bool = Object.assign({ isMarried }, isMarried);
console.log("convert isMarried variable to object", bool);
const cc2 = JSON.stringify(bool);
console.log("Stringify the age variable", cc2);

//4.Stringify the student object
const cc3 = JSON.stringify(student, undefined, 44);
console.log("Stringify the student object", cc3);
