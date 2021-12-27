const pizzaSelect = document.querySelector("#pizza-select")
const pizzaDisplay = document.querySelector("#pie-count-display")
let pizzaIcon = "🍕"
let flourAmount = 0
let waterAmount = 0
let saltAmount = 0
let yeastAmount = 0.5
let numberOfPizzas = pizzaSelect.value

// Pizza size selectors btns
const flour = document.querySelector("#flour-weight")
const water = document.querySelector("#water-weight")
const salt = document.querySelector("#salt-weight")
const yeast = document.querySelector("#yeast-weight")

document.querySelectorAll(".btn-size").forEach(btn => {
    btn.addEventListener("click", (event) => {
        let sizePie = event.target.textContent.trim()
        console.log(sizePie)
        flourAmount = 0
        yeastAmount = 0.5
        saltAmount = pizzaSelect.value * 4

        switch (sizePie) {
            case "S":
              flourAmount = 152
              break
            case "M":
                flourAmount = 175
              break
            case "L":
                flourAmount = 200
                yeastAmount = 0.6
              break
        }
        renderRecipe()
        console.log(flourAmount * numberOfPizzas, waterAmount, saltAmount)
    })
})

document.querySelectorAll(".water-drop").forEach(btn => {
    btn.addEventListener("click", (event) => {
        let hydration = event.target.id.slice(6, 8)
        
        switch (hydration) {
            case "60":
              waterAmount = Math.round(flourAmount / 100 * 60)
              break
            case "65":
                waterAmount = Math.round(flourAmount / 100 * 65)
              break
            case "70":
                waterAmount = Math.floor(flourAmount / 100 * 70)
              break
        }
        renderRecipe()
        // console.log(flourAmount , waterAmount, saltAmount)
    })
})


pizzaSelect.addEventListener("change", () => {
    pizzaDisplay.textContent = " "
    for (let i = 0; i < pizzaSelect.value; i++) {
        pizzaDisplay.textContent += pizzaIcon
        numberOfPizzas = pizzaSelect.value
        renderRecipe()
        console.log(pizzaIcon)
    }
    
})

function renderRecipe() {
    water.textContent = waterAmount * numberOfPizzas
    flour.textContent = flourAmount * numberOfPizzas
    salt.textContent = saltAmount 
    yeast.textContent = yeastAmount * numberOfPizzas
}



