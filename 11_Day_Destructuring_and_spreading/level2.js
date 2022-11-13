//1.Iterate through the users array and get all the keys of the object using 
//destructuring

const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

for(let {name,scores,skills,age} of users){
    console.log(name,scores,skills,age);
}

//2.Find the persons who have less than two skills

for(let i=0;i<users.length;i++){
    if(users[i].skills.length < 2 ){
        console.log(users[i].name)
    }
}


//another solution of second example:-
// for ({
//   name,
//   scores,
//   skills,
//   age
// } of users) {
// if (skills.length < 2) {
//   console.log(name)
// }
// }