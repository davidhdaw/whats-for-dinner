# Whats For Dinner?

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Deployment Link](#deployment-link)
- [Features](#features)
- [Reflection](#reflection)
- [Future Features](#future-features)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

### Introduction
Need help deciding what to make tonight? "What's for Dinner" can help. This lightweight page can give you a randomly selected meal, side or desert to have tonight. It can even make up a full dinner menu with the "Entire Meal" option. Don't like your selection? Just click "Let's cook" again to be given a new meal. You can even add your own favorite meals to the options.

### Technologies
- JavaScript
- HTML
- CSS

### Set Up
1.  Clone this [repository](https://github.com/davidhdaw/hang-in-there-project).
2. `cd` into the directory.
3. Run `open index.html`.

### Deployment Link
- Simply go to: https://davidhdaw.github.io/whats-for-dinner/

### Features
- Shows a random side, main dish or dessert when that radio button is selected and the "Let's Cook" button is clicked.
![Randomized meals](/assets/Dinner1.gif)
- "Lets Cook" button is hidden until a selection is made.
![Lets Cook button starts hidden](/assets/Dinner2.gif)
- User can select Entire Meal to be given an entire randomized menu.
![Entire Meal Randomized](/assets/Dinner3.gif)
- Randomized output has a clear button that can be clicked to reset the random menu form and show the cookpot image again.
![Clear Button Resets Fields](/assets/Dinner4.gif)
- "Add a recipe" button at top of page opens a form to add a new recipe at bottom of page.
![Add Recipe Form Popup](/assets/Dinner5.gif)
- New meals can be added to the randomized selections by filling out the form and pressing "Add New" Button.
- Add recipe form has error messages for both missing inputs and invalid recipe types.
![Adding recipes and error handling](/assets/Dinner6.gif)

### Reflection
This is a relatively simple project to show what you can do with basic HTML, CSS and JavaScript. However it also shows just how much coding and styling goes into even "basic" webpages. Even with several additional features added the project very much feels like a Minimum Viable Product with plenty of revisions possible on both the styling and the functionality

### Future Features
- Refactor meal arrays to be a single array with meal objects that have a mealType value.
- Add link value to meal objects with links to how to make each meal.
- Layout for mobile.
- Change "Recipe Type" in the new recipe form to a dropdown menu.
- Options to save or "favorite" recipes.
- Local storage so that added recipes persist between sessions.

### Contributors
- [David Daw](https://github.com/davidhdaw)

### Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/module-1/dinner.html).
