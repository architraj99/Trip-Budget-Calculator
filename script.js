const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {

    const travelers = Number(document.getElementById("travelers").value);
    const transport = Number(document.getElementById("transport").value);
    const hotel = Number(document.getElementById("hotel").value);
    const food = Number(document.getElementById("food").value);
    const activities = Number(document.getElementById("activities").value);
    const other = Number(document.getElementById("other").value);
    const budget = Number(document.getElementById("budget").value);

    if (travelers <= 0 || budget <= 0) {
        alert("Please enter valid values");
        return;
    }

    const totalExpense = transport + hotel + food + activities + other;
    const costPerPerson = totalExpense / travelers;
    const remainingBudget = budget - totalExpense;

    document.getElementById("totalExpense").textContent = `Total Expense: ₹${totalExpense}`;
    document.getElementById("costPerPerson").textContent = `Cost Per Person: ₹${costPerPerson.toFixed(2)}`;
    document.getElementById("budgetRemaining").textContent = `Budget Remaining: ₹${remainingBudget}`;
   
    const status = document.getElementById("budgetStatus");

    if (remainingBudget >= 0) {

        status.textContent = "Trip is within budget";
        status.className = "good";

    } else {
        status.textContent = "Trip exceeds budget";
        status.className = "Bad";
    }
});