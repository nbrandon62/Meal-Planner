// ARRAYS --------------------------------------------------------
let proteinMeals = [
    'chicken shawarma bowl', 'miso chicken', 'cumin lamb', 'chicken fried chicken', 'harissa chicken bowl', 'pad see ew', 'beef rice rolls', 'veggie/ raw fish handrolls', 'banh xeo', 'fish and dashi', 'fish with beurre blanc', 'butter chicken', 'chicken bacon ranch', 'teri chicken', 'teri beef', 'meat jun', 'steak sandwich', 'shortrib locomoco', 'garlic shrimp', '40 clove chicken', 'teriyaki salmon', 'Vietnamese fried fish', 'chicken piccata', 'ginger steamed fish', 'kalbijim', 'japanese curry', 'dijon braised chicken legs', 'chicken fricasee', 'grilled spicy chicken sandwich', 'pork katsu and cabbage', 'hainan chicken rice', 'thit kho', 'massaman curry', 'brown butter chicken', 'meatloaf and cheesy rice', 'chicken alfredo', 'jerk chicken', 'croque monsieur', 'steak and potatoes', 'basil fish', 'black bean fish', 'salt & pepper fish', 'lap cheong sticky rice', 'peas and bacon pasta', 'roast chicken', 'pesto salmon', 'cheeseburgers', 'lion\'s head meatball soup', 'char siu pork ribs', 'late night nachos', 'shaking beef', 'khao soi',
];

let veggieMeals = [
    'hot and sour collards', 'curry cauliflower', 'brown butter carrots ','garlic pea shoots with nut broth ', 'garlic chili eggplant ', 'pineapple fried rice ', 'broccolini and anchovy breadcrumbs','coconut and potato soup','black bean chili yuba with lap cheong', 'seared cabbage with tahini caesar', 'mushroom and allium fried rice', 'sashimi salad and soup', 'miso soup, veggies, and salmon', 'chicken caesar salad wraps', 'cobb salad', 'roasted veggie toast', 'chilled sesame noodles', ' veggie crudite with bagna cauda and green tahini', 'green tahini noodles with scallion ginger', 'mushroom tartine', 'bucatini amatraciana', 'spring vegetables ragu and poached egg', 'creamy mushroom pasta', 'kale caesar salad', 'cabbage salad with candied nuts and lemon vin', 'loaded baked potato', 'burrata and pesto foccacia', 'veggie bowls', 'burrata and peas', 'potato breakfast burritos', 'eggplant parm', 'grilled veggies with crunchy garlic', 'salade lyonnaise', 'greens and oyster sauce', 'coconut vegetable soup', 'black bean chili eggplant', 'jap chae noodles', 'grilled broccoli and romesco', 'bok choy and dried shrimp'
];

const menuList = [];


//these link the buttons to their respective tasks: Veggie and Protein
let buttonPro = document.querySelector("#buttonPro"); //protein button
let buttonVeg = document.querySelector("#buttonVeg"); //veggie button
let answerPro = document.querySelector("#answerPro"); //protein answer box
let answerVeg = document.querySelector("#answerVeg"); // veggie answer box

let addProBtn = document.querySelector("#menuBtnPro"); // add protein to menu button
let addVegBtn = document.querySelector("#menuBtnVeg"); // add veggie to menu button
let menu = document.querySelector("#menuText"); // weekly menu list 
let menuClear = document.querySelector("#menuClear");


//EVENT LISTENERS -------------------------------------------------
buttonPro.addEventListener('click', () => {
    pickDish("protein")
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

menuClear.addEventListener('click', () => {
    empty();
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
        makeList(); //turns output into bulletpoint 
    }else if (dish === "veggie") {
        addToMenu(addVeggie)
        makeList(); // turns output into bulletpoint

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

function empty() {
    document.getElementById("menuText").innerHTML = "";
}