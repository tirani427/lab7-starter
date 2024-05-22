// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
	// Get the recipes from localStorage
	let recipes = getRecipesFromStorage();
	// Add each recipe to the <main> element
	addRecipesToDocument(recipes);
	// Add the event listeners to the form elements
	initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
	// A9. TODO - Complete the functionality as described in this function
	//           header. It is possible in only a single line, but should
	//           be no more than a few lines.
	let recipes_stringified = localStorage.getItem('recipes');
	return JSON.parse(recipes_stringified);
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
	// A10. TODO - Get a reference to the <main> element
	const main_element = document.querySelector("main");
	// A11. TODO - Loop through each of the recipes in the passed in array,
	//            create a <recipe-card> element for each one, and populate
	//            each <recipe-card> with that recipe data using element.data = ...
	//            Append each element to <main>
	for(let i = 0; i < recipes.length; i++){
		const recipe_card = document.createElement('recipe-card');
		const recipe_data = recipes[i];
		recipe_card.data = recipe_data;
		document.querySelector("main").appendChild(recipe_card);
	}
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
	// EXPLORE - START (All explore numbers start with B)
	// B1. TODO - Complete the functionality as described in this function
	//            header. It is possible in only a single line, but should
	//            be no more than a few lines.
	let recipes_stringified = JSON.stringify(recipes);
	localStorage.setItem('recipes', recipes_stringified);
}

/**
 * Adds the necessary event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {
	// B2. TODO - Get a reference to the <form> element
	const form_element = document.getElementById('new-recipe');
	// B3. TODO - Add an event listener for the 'submit' event, which fires when the
	//            submit button is clicked
	const submit_button = document.getElementByType('submit');
	submit_button.addEventListener("click", () => {
		const new_form_data = new FormData(form_element);
		let recipeObject = new_form_data.keys;
		let recipe_card = document.createElement('recipe-card');
		recipe_card.data = {recipeObject};
		const mainElement = document.querySelector("main");
		mainElement.appendChild(recipe_card);
		const recipes_array_stringified = localStorage.getItem('recipes');
		const recipes_array = JSON.parse(recipes_array_stringified);
		recipes_array.push(recipe_card);
		saveRecipesToStorage(recipes_array);
		const recipes_array_string = localStorage.getItem('recipes');
		const new_recipes_array = JSON.parse(recipes_array_string);
		addRecipesToDocument(new_recipes_array);
	} );

	const clear_button = document.getElementsByClassName("danger");

	clear_button.addEventListener("click", () => {
		localStorage.clear();
		document.main.innerHTML = "";
	});
	// Steps B4-B9 will occur inside the event listener from step B3
	// B4. TODO - Create a new FormData object from the <form> element reference above
	// B5. TODO - Create an empty object (we'll refer to this object as recipeObject to
	//            make this easier to read), and then extract the keys and corresponding
	//            values from the FormData object and insert them into recipeObject
	// B6. TODO - Create a new <recipe-card> element
	// B7. TODO - Add the recipeObject data to <recipe-card> using element.data
	// B8. TODO - Append this new <recipe-card> to <main>
	// B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
	//            then save the recipes array back to localStorage
	// B10. TODO - Get a reference to the "Clear Local Storage" button
	// B11. TODO - Add a click event listener to clear local storage button
	// Steps B12 & B13 will occur inside the event listener from step B11
	// B12. TODO - Clear the local storage
	// B13. TODO - Delete the contents of <main>
}
