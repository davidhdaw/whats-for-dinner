// declare arrays
var sides = ["Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"]

var mains = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza"
]

var desserts = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs"
]
//selectors
var cookBtn = document.querySelector(".lets-cook")
var radioBtns = document.getElementsByName('meal')
var whatToMakeSection = document.querySelector('.what-to-make')
var whatToMakeOutput = document.querySelector(".random-items")
var cookpot = document.querySelector(".cookpot-image")

//Event listen'n
cookBtn.addEventListener('click', letsCook)





//lets write some functions
function letsCook() {
  event.preventDefault()
  var meal = getRadioValue()
  switch (meal) {
    case 'Sides':
    whatToMakeOutput.innerHTML = ""
    printMeal(sides)
    showOutput()
    break
    case 'Mains':
    whatToMakeOutput.innerHTML = ""
    printMeal(mains)
    showOutput()
    break
    case 'Desserts':
    whatToMakeOutput.innerHTML = ""
    printMeal(desserts)
    showOutput()
    break
    case 'Entire Meal':
    whatToMakeOutput.innerHTML = ""
    printMeal(mains)
    whatToMakeOutput.innerHTML += " with a side of "
    printMeal(sides)
    whatToMakeOutput.innerHTML += " and "
    printMeal(desserts)
    whatToMakeOutput.innerHTML += " for dessert."
    showOutput()
    break
  }
}

function showOutput() {
  whatToMakeSection.classList.remove('hidden')
  cookpot.classList.add('hidden')
}


function getRadioValue() {
for (var i = 0; i < radioBtns.length; i++ ) {
  if (radioBtns[i].checked) {
    return radioBtns[i].value
    }
  }
}

function randomItem(array) {
  var item = array[Math.floor(Math.random() * array.length)]
  return item
}

function printMeal(meal) {
  newMeal = randomItem(meal)
  whatToMakeOutput.innerHTML += `
 ${newMeal}
 `
}

//
