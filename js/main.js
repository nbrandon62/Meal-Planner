// ARRAYS --------------------------------------------------------
let proteinMeals = [
    'chicken shawarma bowl', 'miso chicken', 'cumin lamb', 'chicken fried chicken', 'harissa chicken bowl', 'pad see ew', 'beef rice rolls', 'veggie/ raw fish handrolls', 'banh xeo', 'fish with shirodashi butter', 'fish with beurre blanc', 'butter chicken', 'chicken bacon ranch sammy', 'teri chicken', 'teri beef', 'meat jun', 'steak sandwich', 'shortrib locomoco', 'garlic shrimp', '40 clove chicken', 'teriyaki salmon', 'Vietnamese fried fish', 'chicken piccata', 'ginger steamed fish', 'kalbijim', 'japanese curry', 'dijon braised chicken legs', 'chicken fricasee', 'grilled spicy chicken sandwich', 'pork katsu and cabbage', 'hainan chicken rice', 'thit kho', 'massaman curry', 'brown butter chicken breast', 'meatloaf and cheesy rice', 'chicken alfredo', 'jerk chicken', 'croque monsieur', 
];

let veggieMeals = [
    'hot and sour collards', 'curry cauliflower', 'brown butter carrots ','garlic pea shoots with nut broth ', 'garlic chili eggplant ', 'pineapple fried rice ', 'broccolini and anchovy breacrumbs','coconut and potato soup','black bean chili yuba with lap cheong', 'seared cabbage with tahini caesar', 'mushroom and allium fried rice', 'sashimi salad and soup', 'miso soup, veggies, and salmon', 'chicken caesar salad wraps', 'cobb salad', 'roasted veggie toast', 'chilled sesame noodles', ' veggie crudite with bagna cauda and green tahini', 'green tahini noodles with scallion ginger', 'mushroom tartine', 'bucatini amatraciana', 'spring vegetables ragu and poached egg', 'creamy mushroom pasta', 'kale caesar salad', 'cabbage salad with candied nuts and lemon vin', 'loaded baked potato', 'burrata and pesto foccacia', 'veggie bowls', 'burrata and peas', 'potato breakfast burritos', 'eggplant parm', 'grilled veggies with crunchy garlic', 'salade lyonnaise', ''
];

const menuList = [];



//these link the buttons to their respective tasks: Veggie and Protein
let buttonPro = document.querySelector("#buttonPro"); //protein button
let buttonVeg = document.querySelector("#buttonVeg"); //veggie button
let answerPro = document.querySelector("#answerPro"); //protein answer box
let answerVeg = document.querySelector("#answerVeg"); // veggie answer box

let addProBtn = document.querySelector("#menuBtnPro"); // add protein to menu button
let addVegBtn = document.querySelector("#menuBtnVeg"); // add veggie to menu button
let menu =document.querySelector("#menuText"); // weekly menu list 


//EVENT LISTENERS -------------------------------------------------
buttonPro.addEventListener('click', () => {
    pickDish("protein")
    console.log(pickDish);
})

buttonVeg.addEventListener('click', () => {
    pickDish("veggie")
})


addProBtn.addEventListener('click', () => {
    addToList("protein");
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
        answerPro.innerHTML = proteinDish;
    }else if (dish === 'veggie'){
        answerVeg.innerHTML = veggieDish;

    }
}

function addToList(dish){
    let addProtein = answerPro.innerHTML
    let addVeggie = answerVeg.innerHTML

    if (dish ==="protein"){
        addToMenu(addProtein);
        makeList();
        // menuText.innerHTML = menuList
    }else if (dish === "veggie") {
        addToMenu(addVeggie)
        // menuText.innerHTML = menuList
        makeList();

    }
}

function makeList() { 
    // Make a container element for the list
    let listContainer = document.createElement('div');
    // Make the list
    let listElement = document.createElement('ul');
    // create an item for each one
    let listItem = document.createElement('li');

    // Add it to the page
    document.getElementsByClassName('col-md-8')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    // Add the last item in the array 
    listItem.innerHTML = menuList[menuList.length - 1];

    // Add listItem to the listElement
    listElement.appendChild(listItem);
}
