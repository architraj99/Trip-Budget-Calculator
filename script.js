const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {

    const travellers = Number(document.getElementById("travellers").value);
    const transport = Number(document.getElementById("transport").value);
    const hotel = Number(document.getElementById("hotel").value);
    const food = Number(document.getElementById("food").value);
    const activities = Number(document.getElementById("activities").value);
    const other = Number(document.getElementById("other").value);
    const budget = Number(document.getElementById("budget").value);

    const totalExpense = transport + hotel + food + activities + other;

    let costPerPerson = 0;

    if(travelers > 0) {
        costPerPerson = totalExpense / travellers;
    }

    const remainingBudget = budget - totalExpense;

    document.getElementById("totalExpense").textContent = `Total Expense: ₹${totalExpense}`;
    document.getElementById("costPerPerson").textContent = `Cost Per Person: ₹${costPerPerson.toFixed(2)}`;
    document.getElementById("budgetRemaining").textContent = `Budget Remaining: ₹${remainingBudget}`;
});