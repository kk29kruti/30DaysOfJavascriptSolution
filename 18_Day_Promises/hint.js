const datas = [
  {
    name: "kk",
    profession: "Software Engineer",
  },
  {
    name: "kruti",
    profession: "Developer",
  },
];

//Problem Statment :- 2 functions create kariya and ma setTimeout function apiyu then bane na
//timings diffrent rakhiya have bane function ek bija sathe link 6 toh je main function hase
//ema timing bija function karta ocho hase toh bija function nu o/p execute nahi thay nd ane solve karva mate

//3ways :- 1)callback function
//2)promise
//3)async-await

//callback example:- 1
// function getData() {
//   setTimeout(() => {
//     let output = "";
//     datas.forEach((data, index) => {
//       output += `<h1>${data.name}</h1>`;
//     });
//     // document.body.innerHTML = output;
//     console.log(output);
//   }, 1000);
// }

// function createData(newData, callback) {
//   setTimeout(() => {
//     datas.push(newData);
//     callback();
//   }, 2000);
// }
// createData({ name: "bk", profession: "MBA" }, getData);

//callback hell in javascript
//callback hell means ek callback function ni andar biju call back nd eni andar pn 3ju and
//evi rite nested callback functions pass thata jay ene call back hell kevay

//For example 1:- 2s pachi roll no
//2s roll no nu name, age
//2s name parthi gender

// const getRollno = () => {
//   setTimeout(() => {
//     console.log("API is getting");
//     const roll_no = [1, 2, 3, 4, 5];
//     console.log(roll_no);

//     setTimeout(
//       (rollno) => {
//         const biodata = {
//           name: "Kruti",
//           age: 23,
//         };
//         console.log(
//           `my name is ${biodata.name} and age is ${biodata.age} and my roll no is ${rollno}`
//         );

//         setTimeout(() => {
//           biodata.gender = "female";
//           console.log(
//             `my name is ${biodata.name} and age is ${biodata.age} and my roll no is ${rollno} and my gender is ${biodata.gender}`
//           );
//         }, 2000);
//       },
//       2000,
//       roll_no[1]
//     );
//   }, 2000);
// };
// getRollno();

//Promise:-
//callback hell na concept ne eliminate karva mate promise use thay 6
//promise as an object or promise as an constructor
//every task ne as a promise levi pade

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

//example :- 1
// const getRollno1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let rollno = [1, 2, 3, 4, 5];
//     resolve(rollno);
//     reject("Error while comunicating");
//   }, 2000);
// });

// const getBioData = (indexData) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (indexData) => {
//         let biodata = {
//           name: "kk",
//           age: 22,
//         };
//         resolve(
//           `my roll no is ${indexData} & my name is ${biodata.name} & my age is ${biodata.age} `
//         );
//       },
//       2000,
//       indexData
//     );
//   });
// };

// //1way
// // getRollno1
// //   .then((rollno) => {
// //     console.log(rollno);
// //     getBioData(rollno[1]).then((data) => {
// //       console.log(data);
// //     });
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// //preferable way
// getRollno1
//   .then((rollno) => {
//     console.log(rollno);
//     return getBioData(rollno[1]);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//example :- 2
// function getData() {
//   setTimeout(() => {
//     let output = "";
//     datas.forEach((data, index) => {
//       output += `<li>${data.name}</li>`;
//     });
//     console.log(output);
//   }, 1000);
// }

// function createData(newData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       datas.push(newData);
//       let error = false;

//       if (!error) {
//         resolve();
//       } else {
//         reject("kuch sahi nahi hai!");
//       }
//       //   getData;
//     }, 2000);
//   });
// }
// createData({ name: "bk", profession: "MBA" })
//   .then(getData)
//   .catch((error) => console.log(error));

//async await :- without async await is not working
//await means jya sudhi createData resolve nahi thay tya sudhi bija code ne wait karvo pade
//use :- api's thi data get karva 6 tyare axios library ma, fetch function sathe
//Async and await is an elegant way to handle promises
//function na starting ma async keyword lage toh always e promise return kare
//promises je data return kare 6 ene fetch karva mate async await no use karvno bcz ek karta vadhre promises hase toh
//.then kari ne badhi promise ne resolve karvi padse nd e thodu confusion vadu thai jay eni place par
//function ni starting ma async lakhi nd je variable promise return karti hoy eni agad await kari do etale thai jay

//example:-1
// function getData() {
//   setTimeout(() => {
//     let output = "";
//     datas.forEach((data, index) => {
//       output += `<li>${data.name}</li>`;
//     });
//     console.log(output);
//   }, 1000);
// }

// function createData(newData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       datas.push(newData);
//       let err = false;
//       if (!err) {
//         resolve();
//       } else {
//         reject(err);
//       }
//     }, 2000);
//   });
// }

// async function start() {
//   await createData({ name: "bk", profession: "MAB" });
//   getData();
// }
// start();

//example:-2

// const getRoll = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let rollno = [1, 2, 3, 4, 5];
//     resolve(rollno);
//   }, 1000);
// });

// const getBiodata = (indexData) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (indexData) => {
//         let biodata = {
//           name: "kk",
//           surname: "patel",
//         };
//         resolve(
//           `my name is ${biodata.name} and my surname is ${biodata.surname} and my roll no is ${indexData}`
//         );
//       },
//       2000,
//       indexData
//     );
//   });
// };

// async function getdata() {
//   const roll_no = await getRoll;
//   console.log(roll_no);

//   const bio_data = await getBiodata(roll_no[1]);
//   console.log(bio_data);

//   return bio_data;
// }

// getdata();

// async function getdata() {
//   const roll_no = await getRoll;
//   console.log(roll_no);

//   const bio_data = await getBiodata(roll_no[1]);
//   console.log(bio_data);

//   return bio_data; //je pn datas return karse e .then ma avi ne store thai jase
// }

// getdata().then((myname) => {
//   console.log(myname);
// });

// const cc = getdata().then((myname) => {
//   console.log(myname);
// });

//synchronus :- jya sudhi ek task complete na thay tya sudhi bija par move nahi thai sakay
//asynchronous :- ek sathe multiple task perform kari sakay first complete thai jay then second par
//move thay evu badhu nahi ek sathe multiple kari sakay
