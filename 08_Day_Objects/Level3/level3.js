// 1.Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties and it has totalIncome,
// totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// const personAccount = {
//   firstName: "Kruti",
//   lastName: "Patel",
//   incomes: 1000,
//   expenses: 500,
//   totalIncome: function () {
//     return `${incomes}`;
//   },
//   totalExpense: function () {
//     return `${expenses}`;
//   },
//   accountInfo: function () {
//     return `Saving account`;
//   },
//   addIncome: function () {
//     return `${incomes}`;
//   },
//   addExpense: function () {
//     return `${expenses}`;
//   },
//   accountBalance: function () {
//     return 50000;
//   },
// };

function personAccount() {
  let firstname = "Kruti";
  let lastname = "Patel";
  let incomes = [];
  let expenses = [];

  function accountInfo() {
    return `${firstname} ${lastname}`;
  }

  function accountBalance() {
    let accountBalance =
      totalIncome().totalIncome - totalExpense().totalExpense;
    return { accountBalance: accountBalance, description: "Account balance" };
  }

  function totalIncome() {
    var incomeSum = 0;
    incomes.forEach((el) => (incomeSum += el.income));
    return { totalIncome: incomeSum, description: "Total income" };
  }

  function totalExpense() {
    var expenceSum = 0;
    expenses.forEach((el) => (expenceSum += el.expense));
    return { totalExpense: expenceSum, description: "Total expence" };
  }

  function addIncome(newInc, incomeDescription) {
    incomes.push({ income: newInc, description: incomeDescription });
    return incomes[incomes.length - 1];
  }

  function addExpense(newExp, expenseDescription) {
    expenses.push({ expense: newExp, description: expenseDescription });
    return expenses[expenses.length - 1];
  }

  return {
    accountInfo: accountInfo,
    accountBalance: accountBalance,

    totalIncome: totalIncome,
    totalExpense: totalExpense,

    addIncome: addIncome,
    addExpense: addExpense,
  };
}

const personAccount1 = personAccount();

console.log(personAccount1.accountInfo());
console.log(personAccount1.addIncome(1000, "Good job"));
console.log(personAccount1.addExpense(200, "Monthly software rental"));
console.log(personAccount1.totalIncome());
console.log(personAccount1.totalExpense());
console.log(personAccount1.accountBalance());

//2.**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection.
// If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// 3)The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
// let rates = [];
// function rateProduct() {
//   return products.ratings;
// }
// console.log(rateProduct());
// b. Create a function called averageRating which calculate the average rating of a product

// 4.Create a function called likeProduct. This function will helps to
// like to the product if it is not liked and remove like if it was liked.
let color1 = "red";
let color2 = "green";

function likeProduct() {
  color1 == "red" ? console.log("liked") : console.log("unliked");
}
