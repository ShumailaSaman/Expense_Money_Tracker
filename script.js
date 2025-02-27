let expenses = [];

function addExpense() {
  const name = document.getElementById("expense-name").value;
  const amount = document.getElementById("expense-amount").value;
  const category = document.querySelector(
    'input[name="expense-category"]:checked'
  );

  if (!name || !amount || !category) {
    alert("Please fill all fields!");
    return;
  }

  const expense = {
    id: Date.now(),
    name,
    amount: parseFloat(amount),
    category: category.value,
  };

  expenses.push(expense);
  renderExpenses();
  document.getElementById("expense-name").value = "";
  document.getElementById("expense-amount").value = "";
}

function renderExpenses() {
  const expenseList = document.getElementById("expense-list");
  expenseList.innerHTML = "";

  let total = 0;

  expenses.forEach((expense) => {
    total += expense.amount;

    const li = document.createElement("li");
    li.classList.add("list-group-item", "expense-item");

    li.innerHTML = `
      <span>${expense.category} ${expense.name} - ${expense.amount} PKR</span>
      <div class="expense-actions">
        <button class="edit-btn" onclick="editExpense(${expense.id})">✏️ Edit</button>
        <button class="delete-btn" onclick="deleteExpense(${expense.id})">🗑️ Delete</button>
      </div>
    `;

    expenseList.appendChild(li);
  });

  document.getElementById("total-amount").textContent = total;
}

function editExpense(id) {
  const expense = expenses.find((e) => e.id === id);
  if (expense) {
    document.getElementById("expense-name").value = expense.name;
    document.getElementById("expense-amount").value = expense.amount;
    document.querySelector(
      `input[name="expense-category"][value="${expense.category}"]`
    ).checked = true;

    deleteExpense(id);
  }
}

function deleteExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
  renderExpenses();
}
