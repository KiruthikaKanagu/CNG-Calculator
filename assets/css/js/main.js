const distance = document.getElementById("trip-dist")
const fuelEfficency = document.getElementById("fuel_efficiency")
const fuelCost = document.getElementById("fuel_cost")
const button = document.querySelector("button")
const result = document.querySelector(".result span")
const show = document.querySelector(".show span")
button.addEventListener("click", (event) => {
    event.preventDefault();
    if (distance.value === "") {
        alert("Enter Trip Distance value");
    } else {
        const distanceKM = distance.value;
        const fuelEfficiencyEl = fuelEfficency.value;
        const fuelCostEl = fuelCost.value;
        const calculate = (distanceKM / fuelEfficiencyEl) * fuelCostEl;
        document.querySelector(".show").classList.remove("hidden");
        show.innerText ="$"+  calculate;
    }
});


