//1)Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
//It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions.
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


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
  