function pickRandomMeal (mealArray) { //inputs Array of Strings
    return mealArray[Math.floor(Math.random() * mealArray.length)];
    //outputs String
}

let proteinMeals = [
    'chicken shawarma bowl', 'miso chicken', 'cumin lamb', 'chicken fried chicken', 'harissa chicken bowl', 'pad see ew', 'beef rice rolls', 'veggie/ raw fish handrolls', 'banh xeo', 'fish with shirodashi butter', 'fish with beurre blanc', 'butter chicken', 'chicken bacon ranch sammy', 'teri chicken', 'teri beef', 'meat jun', 'steak sandwich', 'shortrib locomoco', 'garlic shrimp', '40 clove chicken', 'teriyaki salmon', 'Vietnamese fried fish', 'chicken piccata', 'ginger steamed fish', 'kalbijim', 'japanese curry', 'dijon braised chicken legs', 'chicken fricasee', 'grilled spicy chicken sandwich', 'pork katsu and cabbage', 'hainan chicken rice', 'thit kho', 'massaman curry', 'brown butter chicken breast', 'meatloaf and cheesy rice', 'chicken alfredo', 'jerk chicken', 'croque monsieur', 
];

let veggieMeals = [
    'hot and sour collards', 'curry cauliflower', 'brown butter carrots ','garlic pea shoots with nut broth ', 'garlic chili eggplant ', 'pineapple fried rice ', 'broccolini and anchovy breacrumbs','coconut and potato soup','black bean chili yuba with lap cheong', 'seared cabbage with tahini caesar', 'mushroom and allium fried rice', 'sashimi salad and soup', 'miso soup, veggies, and salmon', 'chicken caesar salad wraps', 'cobb salad', 'roasted veggie toast', 'chilled sesame noodles', ' veggie crudite with bagna cauda and green tahini', 'green tahini noodles with scallion ginger', 'mushroom tartine', 'bucatini amatraciana', 'spring vegetables ragu and poached egg', 'creamy mushroom pasta', 'kale caesar salad', 'cabbage salad with candied nuts and lemon vin', 'loaded baked potato', 'burrata and pesto foccacia', 'veggie bowls', 'burrata and peas', 'potato breakfast burritos', 'eggplant parm', 'grilled veggies with crunchy garlic', 'salade lyonnaise', ''
];


function addToMenu (mealString) { //inputs String
    return menuList.push(mealString);
    //.push returns the length of the array which is an Int
 
}

let menuList = [] //is an Array and Stores Strings


//these link the buttons to their respective tasks: Veggie and Protein
let buttonPro = document.querySelector("#buttonOne");  //protein button
let buttonVeg = document.querySelector("#buttonTwo");  //veggie button
let answer = document.querySelector("#answer"); //protein answer box
let answerTwo = document.querySelector("#answerTwo"); // veggie answer box


//function for selecting random protein dishes
buttonPro.addEventListener("click", function(){
    let proteinDish = pickRandomMeal(proteinMeals);
    answerProtein = proteinDish;
    answer.innerHTML = answerProtein;
    console.log(answerProtein);
    console.log(menuList);
        //this controls the "add to menu" button. uses the local variable answerProtein. But the bug is that it adds the dish on screen as many times as the "buttonPro" button is clicked. 
        let addProBtn = document.querySelector("#menuBtnPro");
        let menu = document.querySelector("#menuText");

     addProBtn.addEventListener("click", function(){
            
            addToMenu(answerProtein);
            menuText.innerHTML = menuList;
        })
})



//function for selecting random veggie dishes
buttonVeg.addEventListener("click", function(){
    let veggieDish = pickRandomMeal(veggieMeals);
    answerVeggie = veggieDish;

    answerTwo.innerHTML = answerVeggie;

})