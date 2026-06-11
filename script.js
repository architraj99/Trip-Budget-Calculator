const calculateBtn = document.getElementById("calculateBtn");

let savedTrips = JSON.parse(localStorage.getItem("savedTrips")) || [];

displayTrips();

calculateBtn.addEventListener("click", function() {

    const destination = document.getElementById("destination").value;
    const travelers = Number(document.getElementById("travelers").value);
    const transport = Number(document.getElementById("transport").value);
    const hotel = Number(document.getElementById("hotel").value);
    const food = Number(document.getElementById("food").value);
    const activities = Number(document.getElementById("activities").value);
    const other = Number(document.getElementById("other").value);
    const budget = Number(document.getElementById("budget").value);

    if (destination === "" || travelers <= 0 || budget <= 0) {
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
        status.className = "Good";
    } 

    else {
        status.textContent = "Trip exceeds budget";
        status.className = "Bad";
    }

    savedTrips.push({destination, totalExpense, costPerPerson});
    localStorage.setItem("savedTrips", JSON.stringify(savedTrips));

    displayTrips();
});

function displayTrips() {

    const container = document.getElementById("savedTrips");
    container.innerHTML = "";

    savedTrips.forEach(function(trip, index){

        const item = document.createElement("div");
        item.className = "trip-item";

        item.innerHTML =
        `
            <h3>${trip.destination}</h3>
            <p>Total Expense: ₹${trip.totalExpense}</p>
            <p>Per Person: ₹${trip.costPerPerson.toFixed(2)}</p>
            <button class="delete-btn" onclick="deleteTrip(${index})">Delete</button>
        `;

        container.appendChild(item);
    });
}

function deleteTrip(index){

    savedTrips.splice(index,1);
    localStorage.setItem("savedTrips", JSON.stringify(savedTrips));
    displayTrips();
}