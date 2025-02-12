let totalAmount = 0;

function addExpense() {
  let name = document.getElementById("expense-name").value;
  let amount = parseFloat(document.getElementById("expense-amount").value);
  let category = document.getElementById("expense-category").value;

  if (name && amount) {
    let list = document.getElementById("expense-list");
    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `${name} - ${category} <strong>${amount} PKR</strong>`;
    list.appendChild(li);

    totalAmount += amount;
    document.getElementById("total-amount").innerText = totalAmount;

    // Clear input fields
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
  } else {
    alert("Please enter valid details");
  }
}
