function pickRandomMeal (mealArray) { //inputs Array of Strings
    return mealArray[Math.floor(Math.random() * mealArray.length)];
    //outputs String
}

let proteinMeals = [
    'chicken shawarma bowl', 'miso chicken', 'cumin lamb', 'chicken fried chicken', 'harissa chicken bowl', 'pad see ew', 'beef rice rolls', 'veggie/ raw fish handrolls', 'banh xeo', 'fish with shirodashi butter', 'fish with beurre blanc', 'butter chicken', 'chicken bacon ranch sammy', 'teri chicken', 'teri beef', 'meat jun', 'steak sandwich', 'shortrib locomoco', 'garlic shrimp', '40 clove chicken', 'teriyaki salmon', 'Vietnamese fried fish', 'chicken piccata', 'ginger steamed fish', 'kalbijim',
];

let veggieMeals = [
    ' hot and sour collards', ' curry cauliflower', ' brown butter carrots ',' garlic pea shoots with nut broth ', ' garlic chili eggplant ', ' pineapple fried rice ', ' broccolini and anchovy breacrumbs',' coconut and potato soup',' black bean chili yuba with lap cheong', ' seared cabbage with tahini caesar', ' mushroom and allium fried rice', ' sashimi salad and soup', ' miso soup, veggies, and salmon', ' chicken caesar salad wraps', ' cobb salad', ' roasted veggie toast', ' chilled sesame noodles', ' veggie crudite with bagna cauda and green tahini', ' chilled green tahini noodles with scallion ginger sauce', ' mushroom tartine', ' bucatini amatraciana'
];


function addToMenu (mealString) { //inputs String
    return menuList.push(mealString);
    //.push returns the length of the array which is an Int
 
}

let menuList = [] 
//is an Array and Stores Strings
//this will eventually be the place that lands all of the selected dish items to create my weekly menu. 


//these link the buttons to their respective tasks: Veggie and Protein

let button = document.querySelector("#buttonOne");  //protein button
let buttonTwo = document.querySelector("#buttonTwo");  //veggie button
let answer = document.querySelector("#answer"); //protein answer box
let answerTwo = document.querySelector("#answerTwo"); // veggie answer box

//function for selectin random protein dishes
button.addEventListener("click", function(){
    let meal = pickRandomMeal(proteinMeals);
    answerText = meal;

    answer.innerHTML = answerText;

})

//function for selecting random veggie dishes
buttonTwo.addEventListener("click", function(){
    let meal = pickRandomMeal(veggieMeals);

    answerText = meal;

    answerTwo.innerHTML = answerText;

})

