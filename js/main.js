// ARRAYS --------------------------------------------------------
let proteinMeals = [
    'chicken shawarma bowl', 'miso chicken', 'cumin lamb', 'chicken fried chicken', 'harissa chicken bowl', 'pad see ew', 'beef rice rolls', 'veggie/ raw fish handrolls', 'banh xeo', 'fish with shirodashi butter', 'fish with beurre blanc', 'butter chicken', 'chicken bacon ranch sammy', 'teri chicken', 'teri beef', 'meat jun', 'steak sandwich', 'shortrib locomoco', 'garlic shrimp', '40 clove chicken', 'teriyaki salmon', 'Vietnamese fried fish', 'chicken piccata', 'ginger steamed fish', 'kalbijim', 'japanese curry', 'dijon braised chicken legs', 'chicken fricasee', 'grilled spicy chicken sandwich', 'pork katsu and cabbage', 'hainan chicken rice', 'thit kho', 'massaman curry', 'brown butter chicken breast', 'meatloaf and cheesy rice', 'chicken alfredo', 'jerk chicken', 'croque monsieur', 
];

let veggieMeals = [
    'hot and sour collards', 'curry cauliflower', 'brown butter carrots ','garlic pea shoots with nut broth ', 'garlic chili eggplant ', 'pineapple fried rice ', 'broccolini and anchovy breacrumbs','coconut and potato soup','black bean chili yuba with lap cheong', 'seared cabbage with tahini caesar', 'mushroom and allium fried rice', 'sashimi salad and soup', 'miso soup, veggies, and salmon', 'chicken caesar salad wraps', 'cobb salad', 'roasted veggie toast', 'chilled sesame noodles', ' veggie crudite with bagna cauda and green tahini', 'green tahini noodles with scallion ginger', 'mushroom tartine', 'bucatini amatraciana', 'spring vegetables ragu and poached egg', 'creamy mushroom pasta', 'kale caesar salad', 'cabbage salad with candied nuts and lemon vin', 'loaded baked potato', 'burrata and pesto foccacia', 'veggie bowls', 'burrata and peas', 'potato breakfast burritos', 'eggplant parm', 'grilled veggies with crunchy garlic', 'salade lyonnaise', ''
];

menuList = [];



//these link the buttons to their respective tasks: Veggie and Protein
let buttonPro = document.querySelector("#buttonOne");  //protein button
let buttonVeg = document.querySelector("#buttonTwo");  //veggie button
let answer = document.querySelector("#answer"); //protein answer box
let answerTwo = document.querySelector("#answerTwo"); // veggie answer box

let addProBtn = document.querySelector("#menuBtnPro");
let addVegBtn = document.querySelector("#menuBtnVeg");
let menu = document.querySelector("#menuText");


//EVENT LISTENERS -------------------------------------------------
buttonPro.addEventListener('click', () => {
    pickDish("protein")
})

buttonVeg.addEventListener('click', () => {
    pickDish("veggie")
})


addProBtn.addEventListener('click', () => {
    addToList("protein")
})

addVegBtn.addEventListener('click', () => {
    addToList("veggie")
})


//FUNCTIONS---------------------------------------------------------
function pickRandomMeal (mealArray) { //inputs Array of Strings
    return mealArray[Math.floor(Math.random() * mealArray.length)];
    //outputs String
}


function addToMenu (mealString) { //inputs String
    return menuList.push(mealString);
    //.push returns the length of the array which is an Int
}


function pickDish(dish){
    let proteinDish = pickRandomMeal(proteinMeals);
    let veggieDish = pickRandomMeal(veggieMeals);

    if (dish === 'protein'){
        answer.innerHTML = proteinDish;
    }else if (dish === 'veggie'){
        answerTwo.innerHTML = veggieDish;

    }
}

function addToList(dish){
    let addProtein = answer.innerHTML
    let addVeggie = answerTwo.innerHTML

    if (dish ==="protein"){
        addToMenu(addProtein)
        menuText.innerHTML = menuList
    }else if (dish === "veggie") {
        addToMenu(addVeggie)
        menuText.innerHTML = menuList

    }
}