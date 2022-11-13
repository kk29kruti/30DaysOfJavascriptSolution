//1.Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and
//it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
  firstname: "John",
  lastname: "patel",
  incomes: 1000,
  expenses: 200,
  totalIncome() {
    let incomeSum = 0;
    incomeSum += this.incomes;
    return { totalIncome: incomeSum, description: "Total income" };
  },
  totalExpense() {
    let expenceSum = 0;
    expenceSum += this.expenses;
    return { totalExpense: expenceSum, description: "Total expence" };
  },
  accountInfo() {
    return `${this.firstname} ${this.lastname}`;
  },
  addExpense() {
    let expense = [];
    expense.push({ expense: this.expenses, description: "add expense" });
    return expense[expense.length - 1];
  },
  addIncome() {
    let income = [];
    income.push({ income: this.incomes, description: "add income" });
    return income[income.length - 1];
  },
  accountBalance() {
    let accountBalance =
      this.totalIncome().totalIncome - this.totalExpense().totalExpense;
    return { accountBalance: accountBalance, description: "Account balance" };
  },
};
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.addIncome());
console.log(personAccount.accountInfo());
console.log(personAccount.addExpense());
console.log(personAccount.accountBalance());
