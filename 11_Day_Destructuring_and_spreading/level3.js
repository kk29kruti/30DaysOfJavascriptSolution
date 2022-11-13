//1.Destructure the countries object print 
//name, capital, population and languages of all countries

// const countries = [
//     {
//         name : 'africa',
//         capital : 'AF',
//         population : 12344,
//         languages : 'English'
//     },
//     {
//         name : 'America',
//         capital : 'AM',
//         population : 32344,
//         languages : 'English'
//     },
//     {
//         name : 'India',
//         capital : 'IN',
//         population : 132344,
//         languages : 'Hindi'
//     }
// ] 

// for(let {name,capital,population,languages} of countries){
//     console.log("name:",name,"capital:",capital,"population",population,"languages",languages);
// }


// 2.A junior developer structure student name, skills and score in array of 
// arrays which may not easy to read. Destructure the following array name 
// to name, skills array to skills, scores array to scores, JavaScript score 
// to jsScore and React score to reactScore variable in one line.

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// let [name,skills,jsScore] = student;
// let cc1 = jsScore.toString();
// console.log(cc1);
// let cc2 = cc1.slice(9);
// console.log(cc2);
// let cc3 = cc1.slice(6,8);
// console.log(cc3);
// console.log(name, skills,cc3,cc2);

// 3.Write a function called 
// convertArrayToObject which can convert the array to a structure object.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

let flatArray = [].concat(...students);
console.log(flatArray)
function convertArrayToObject(student){
    
    
}

convertArrayToObject(students)
// console.log(convertArrayToObject(students))


//4,.Copy the student object to newStudent without mutating 
//the original object. In the new object add the following ?

const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const {...newStudent} = student;
// console.log("newStudent",newStudent);

//Add Bootstrap with level 8 to the front end skill sets

let bb = Object.keys(newStudent.skills);
console.log(bb);
bb[0] = {skill: 'bootstrap', level: 8 }
// console.log(bb)
let vv = bb.slice(0,1);
const arrayToObject = Object.assign({}, ...vv);
newStudent.skills.frontEnd[4] = arrayToObject;


//Add Express with level 9 to the back end skill sets
bb[1] = {skill: 'Express', level: 9 }
// console.log(bb)
let vv1 = bb.slice(1,2);

//convert array into object without any key
const arrayToObject1 = Object.assign({},...vv1);
newStudent.skills.backEnd[2] = arrayToObject1;

//Add SQL with level 8 to the data base skill sets
bb[2] = {skill: 'SQL', level: 8 }
let vv2 = bb.slice(2,3);
const arrayToObject2 = Object.assign({},...vv2);
newStudent.skills.dataBase[1] = arrayToObject2;


//Add SQL without level to the data science skill sets
newStudent.skills.dataScience.push('SQL');

console.log(newStudent);


