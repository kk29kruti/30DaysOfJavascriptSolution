//1.Create a student object. The student object will have first name, last name, age, skills,
//country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
  firstName: "Kruti",
  lastName: "Patel",
  age: 36,
  skills: ["HTML", "CSS", "JAVASCRIPT"],
  country: "India",
  enrolled: "Computer Engineering",
};

const cc = JSON.stringify(student);
localStorage.setItem("students", cc);
console.log(localStorage);
