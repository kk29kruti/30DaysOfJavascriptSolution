// 1.Create a class called PersonAccount. It has firstname, lastname, incomes, expenses
// properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and
// accountBalance methods. Incomes is a set of incomes and its description and expenses
// is also a set of expenses and its description.

class PersonAccount {
  constructor(firstname, lastname, incomes, expenses) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  totalIncome() {
    let incomeSum = 0;
    incomeSum += this.incomes;
    return { totalIncome: incomeSum, description: "Total income" };
  }
  totalExpense() {
    let expenceSum = 0;
    expenceSum += this.expenses;
    return { totalExpense: expenceSum, description: "Total expence" };
  }
  accountInfo() {
    return `${this.firstname} ${this.lastname}`;
  }
  addExpense() {
    let expense = [];
    expense.push({ expense: this.expenses, description: "add expense" });
    return expense[expense.length - 1];
  }
  accountBalance() {
    let accountBalance =
      this.totalIncome().totalIncome - this.totalExpense().totalExpense;
    return { accountBalance: accountBalance, description: "Account balance" };
  }

  addIncome() {
    let income = [];
    income.push({ income: this.incomes, description: "add income" });
    return income[income.length - 1];
  }
}

const p1 = new PersonAccount("kk", "patel", 1000, 200);
console.log(p1.accountInfo());
console.log(p1.addIncome());
console.log(p1.addExpense());
console.log(p1.totalIncome());
console.log(p1.totalExpense());
console.log(p1.accountBalance());
