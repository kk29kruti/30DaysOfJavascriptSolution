// //1.Create a separate countries.js file and store the countries array in to this
// //file, create a separate file web_techs.js and store
// //the webTechs array in to this file. Access both file in main.js file


// const main = webTechs.concat(countries);
// console.log("main",main);

//2.First remove all the punctuations and change the 
//string to array and count the number of words in the array

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// // console.log(text);
// const text1 = text.replace('.','').split(' ');
// console.log(text1);
// console.log('Count the number of words in the array',text1.length);

// //3.In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// //3.1.add 'Meat' in the beginning of your shopping cart if it has not been already added
// if(shoppingCart[0]!=="Meat"){
//     shoppingCart[0] = "Meat";
// }
// console.log("Add Meat in the begnning in the shoppingCart",shoppingCart);

// //3.2.add Sugar at the end of you shopping cart if it has not been already added
// const shoppingCartleng = shoppingCart.length;
// console.log(shoppingCartleng);
// if(shoppingCart[4] !=="Sugar"){
//     shoppingCart.push("Sugar")
// }
// console.log("Add sugar in the end in the shoppingCart",shoppingCart)

// //3.3.remove 'Honey' if you are allergic to honey
// if(shoppingCart[3] === 'Honey')
// {
//     shoppingCart.splice(3,1);
// }
// console.log("remove Honey",shoppingCart)

// //3.4.modify Tea to 'Green Tea'

// if(shoppingCart[2] === "Tea"){
//     shoppingCart[2] ='Green Tea';
// }
// console.log('Modify tea to green tea',shoppingCart);


//4.In countries array check if 'Ethiopia' exists in the array if it 
//exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// const countries1 = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//     //  'ETHIOPIA'
//   ];

  // if(countries1.includes('ETHIOPIA')){
  //   console.log('ETHIOPIA is alreday exist')
  // }else{
  //   countries1.push('ETHIOPIA');
  //  console.log('Countries Array',countries1);
  // }
  
//5.In the webTechs array check if Sass exists in the array and 
//if it exists print 'Sass is a CSS preprocess'. 
//If it does not exist add Sass to the array and print the array.

const webTechs1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    // 'Sass'
  ];
  
    // if(webTechs1.includes('Sass')){
    //     console.log("Sass is a Css preprocess");
    // }else{
    //     webTechs1.push('Sass');
    //     console.log('Sass added',webTechs1);
    // }

//6.Concatenate the following two variables 
//and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log('FullStack',fullStack)
