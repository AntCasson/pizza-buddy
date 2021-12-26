const pizzaSelect = document.querySelector("#pizza-select")
const pizzaDisplay = document.querySelector("#pie-count-display")
const sPie = document.querySelector("#pizza-s").textContent
const mPie = document.querySelector("#pizza-m").textContent
const lPie = document.querySelector("#pizza-l").textContent
let pizzaIcon = "🍕"

let pizzaSum

pizzaSelect.addEventListener("change", () => {
    pizzaDisplay.textContent = " "
    for (let i = 0; i < pizzaSelect.value; i++) {
        pizzaDisplay.textContent += pizzaIcon
        console.log(pizzaIcon)
    }
    
})
