
            /*==================
                PART - 01
           =====================*/
//Step-1: Data collection from https://www.themealdb.com/api.php through API

const loadMealFromDB = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(ref => ref.json())
    .then(data => displayMeals(data.meals))//localMealFromDB function link up with displayMeals.
}

//Step-2: We have to declare a another function for link up with fetching data base. and we will create card by appending child. we will use here forEach function.

// Step-2(1): Declare ES6 function 
const displayMeals = meals => {
    // console.log(meals)
    //Step-2(2): Get Id from HTML for appending child div
    const mealContainer = document.getElementById('meal-container');
    //Step-2(8): For empty previous card, for getting new result by searching.
    mealContainer.innerHTML = ``;
  
    //Step-2(3): declaring forEach function.
    meals?.forEach(meal =>{
        // console.log(meal);
        //Step-2(4): Creating div. 
        const mealDiv = document.createElement('div');
        // console.log(mealDiv)
          //Step-2(5): Creating class for div column.
    mealDiv.classList.add('col');
        //Step-2(6): Converting all creating div to innerHTML.
        mealDiv.innerHTML =
        //Step-2(7): Creating div by appending child.
        `
        <div onclick="loadMealDetail('${meal.idMeal}')" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
        </div>
        
        `;
        mealContainer.appendChild(mealDiv);
    });
}
      
            /*==================
                PART - 02
           =====================*/

//Step-3: Add search field for quick search food, for adding search filed we have to add parameter in the fetch api address function, then we have to do dynamic search bar in the api link, keep in mind should be api address by name for adding search bar. for doing this we have created input field and button in the HTML.

//Step-3(1): Declaring ES6 function for adding search bar.
const searchFood = () =>{
    //Step-3(1): Added id from input field from HTML tag
    const searchField = document.getElementById('search-field');
    //Step-3(2): For getting value from search bar, we have converted in the value.
    const searchText = searchField.value;
    //Step-3(3): Set search (input) field with fetching api address function for getting search results.
    loadMealFromDB(searchText);
    //Step-3(4):Empty search bar after searching food.
    searchField.value = '';  

}

            
            /*==================
                PART - 03
           =====================*/

//Step-4: Adding food card with api address id by fetching api, whenever we will click on the food card, card will be addded.

//Step-4(1): Declaring ES6 function for adding Id for showing card details.
const loadMealDetail = (idMeal) =>{
    //Step-4(2): Fetching api address with id form MealDB API.
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);
    
    fetch(url)
    .then(ref => ref.json())
    .then(data => displayMealDetail(data.meals[0]))

}

//Step-5: adding card for showing product details.
const displayMealDetail = meal =>{
    //Step-5(1): Get Id from HTML for adding div.
    const detailContainer = document.getElementById('detail-container');
    detailContainer.textContent = ``;
    //Step-5(2): Div created.
    const mealDiv2 = document.createElement('div');
    //Step-5(3): Class created.
    mealDiv2.classList.add('card');
    //Step-5(4): Created Card and Set div to innerHTML
    mealDiv2.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    //Step-5(5): appending created div to HTML.
    detailContainer.appendChild(mealDiv2);

}
// loadMealFromDB();

