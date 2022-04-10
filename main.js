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

var cookBtn = document.querySelector(".lets-cook")
var radioBtns = document.getElementsByName('meal')
var addRecipeBtn = document.querySelector(".add-a-recipe")
var clearBtn = document.querySelector(".clear")
var addNewBtn = document.querySelector(".add-new")

var whatToMakeSection = document.querySelector('.what-to-make')
var whatToMakeOutput = document.querySelector(".random-items")
var form = document.querySelector("form")
var cookpot = document.querySelector(".cookpot-image")
var footer = document.querySelector("footer")

var typeInput = document.querySelector("#recipe-type")
var nameInput = document.querySelector("#recipe-name")
var allFieldsError = document.querySelector(".all-fields-error")
var validTypeError = document.querySelector(".valid-type-error")

cookBtn.addEventListener('click', letsCook)
clearBtn.addEventListener('click', clearRecipes)
form.addEventListener('click', radioValue)
addNewBtn.addEventListener('click', addRecipe)
addRecipeBtn.addEventListener('click', showFooter)

function letsCook() {
  event.preventDefault()
  var meal = radioValue()
  whatToMakeOutput.innerHTML = ""
  switch (meal) {
    case 'Sides':
    printMeal(sides)
    showOutput()
    break
    case 'Mains':
    printMeal(mains)
    showOutput()
    break
    case 'Desserts':
    printMeal(desserts)
    showOutput()
    break
    case 'Entire Meal':
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

function showFooter() {
  footer.classList.remove('hidden')
}


function clearRecipes() {
  whatToMakeSection.classList.add('hidden')
  cookpot.classList.remove('hidden')
  cookBtn.classList.add('hidden')
  for (var i = 0; i < radioBtns.length; i++ ) {
    radioBtns[i].checked = false;
  }
}

function radioValue() {
  for (var i = 0; i < radioBtns.length; i++ ) {
    if (radioBtns[i].checked) {
      cookBtn.classList.remove('hidden')
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

function addRecipe() {
  validTypeError.classList.add('hidden')
  allFieldsError.classList.add('hidden')
  var recipeType = typeInput.value
  var recipeName = nameInput.value
  typeInput.value = ""
  nameInput.value = ""
  if (!recipeType || !recipeName) {
    allFieldsError.classList.remove('hidden')
  } else if (recipeType === "desserts") {
      desserts.push(recipeName)
  } else if (recipeType === "sides") {
      sides.push(recipeName)
  } else if (recipeType === "mains") {
      mains.push(recipeName)
  } else {
      validTypeError.classList.remove('hidden')
  }
}
