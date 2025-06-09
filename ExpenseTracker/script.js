document.addEventListener("DOMContentLoaded", function () {
  // local storage Data

  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  console.log(expenses);

  // DOM Element
  const expenseForm = document.getElementById("expenseForm");
  const totalIncomeEl = document.getElementById("totalIncome");
  const totalExpenseEl = document.getElementById("totalExpenses");
  const currentBalanceEl = document.getElementById("currentBalance");
  const saveExepenseBtn = document.getElementById("saveExpense");
  const transactionTypeSelect = document.getElementById("transactionType");
  const categorySelect = document.getElementById("category");
  const expenseCategoryGroup = document.getElementById("expenseCategories");
  const incomeCategoryGroup = document.getElementById("incomeCategories");
  const addExpenseModel = new bootstrap.Modal(
    document.getElementById("addExpenseModal")
  );

  init();

  // Event Listener
  saveExepenseBtn.addEventListener("click", saveExpense); // Hold
  transactionTypeSelect.addEventListener("change", updateCategoryOptions); // Hold

  function init() {
    document.getElementById("date").valueAsDate = new Date();

    updateSummary();
  }

  // update categories option function

  function updateCategoryOptions() {
    const transactionType = transactionTypeSelect.value;

    if (transactionType === "expense") {
      expenseCategoryGroup.style.display = "";
      incomeCategoryGroup.style.display = "none";

      categorySelect.value = expenseCategoryGroup.querySelector("option").value;
    } else {
      expenseCategoryGroup.style.display = "none";
      incomeCategoryGroup.style.display = "";

      categorySelect.value = incomeCategoryGroup.querySelector("option").value;
    }
  }

  // income/expense save function

  function saveExpense() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const type = document.getElementById("transactionType").value;

    const newExpense = {
      id: Date.now(),
      description,
      amount,
      category,
      date,
      type,
      createdAt: new Date().toISOString(),
    };

    expenses.unshift(newExpense);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    expenseForm.reset();

    document.getElementById("date").valueAsDate = new Date();

    addExpenseModel.hide();

    updateSummary();
  }

  // add summary
  function updateSummary() {
    let totalIncome = 0;
    let totalExpense = 0;

    expenses.forEach((exp) => {
      if (exp.type === "income") {
        totalIncome += exp.amount;
      } else {
        totalExpense += exp.amount;
      }
    });

    const balance = totalIncome - totalExpense;

    // console.log(totalIncome.toFixed());

    totalIncomeEl.textContent = `${totalIncome.toFixed(2)}`;
    totalExpenseEl.textContent = `${totalExpense.toFixed(2)}`;
    currentBalanceEl.textContent = `${balance.toFixed(2)}`;

    // add color to balance based on value
    if (balance < 0) {
      currentBalanceEl.classList.add("text-danger");
      currentBalanceEl.classList.remove("text-success");
    }
  }

  // add transaction button

  document
    .querySelector('[data-bs-target="#addExpenseModal"]')
    .addEventListener("click", function () {
      expenseForm.reset();

      document.getElementById("editId").value = "";

      document.getElementById("date").valueAsDate = new Date();

      document.getElementById("transactionType").value = "expense"; //

      updateCategoryOptions();

      document.getElementById("addExpenseModalLabel").textContent =
        "Add Transaction";
    });

  updateCategoryOptions();

  //history show data

  let LocalData = JSON.parse(localStorage.getItem("expenses"));
  console.log("LocalData", LocalData);

  const Uimaker = (data) => {
    document.getElementById("expenseTableBody").innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      document.getElementById("expenseTableBody").innerHTML += `
      <tr>
        <td>${data[i].date}</td>
        <td>${data[i].description}</td>
        <td>${data[i].category}</td>
        <td>${data[i].type}</td>
        <td>${data[i].amount}</td>
        <td><button onclick="DeleteData(${i})">DELETE</button></td>
      </tr>`;
    }
  };

  Uimaker(LocalData);

  window.DeleteData = function (index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    updateSummary();
  };
});
