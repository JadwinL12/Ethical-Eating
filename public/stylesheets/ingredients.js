var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


function addIngredient() {
    let buttonList = document.getElementsByClassName("addIngredient");
    let i;
    for (i = 0; i < buttonList.length; i++) {
        let button = buttonList[i];
        button.addEventListener("click", function() {
            let text = button.parentElement.textContent;
            let name = text.slice(0, text.length - 1);
            let list = document.getElementsByClassName("recipeIngredients")
            let ing = document.createElement("li");
            let removeButton = document.createElement("span")
            removeButton.className = "removeIngredient";
            removeButton.textContent = "x";
            removeButton.addEventListener("click", function() {
                let parent = removeButton.parentElement;
                let grandParent = parent.parentElement;
                grandParent.removeChild(parent);
            })
            ing.textContent = name;
            ing.className = "ing";
            ing.appendChild(removeButton);
            list[0].appendChild(ing);
        });
    };
}

window.addEventListener("load", function() {
    addIngredient();
})

/* For ethics page, to be merged with ingredients/meals page eventually*/
var food = `[
  {
      "name": "Brocolli",
      "type": "Vegetable",
      "ethicRank": 1
  },
  {
      "name": "Lettuce",
      "type": "Vegetable",
      "ethicRank": 1
  },
  {
      "name": "Cauliflower",
      "type": "Vegetable",
      "ethicRank": 1
  },
  {
      "name": "Spinach",
      "type": "Vegetable",
      "ethicRank": 1
  },
  {
      "name": "Chicken",
      "type": "Meat",
      "ethicRank": 1
  },
  {
      "name": "Beef",
      "type": "Meat",
      "ethicRank": 1
  },
  {
      "name": "Pork",
      "type": "Meat",
      "ethicRank": 1
  },
  {
      "name": "Turkey",
      "type": "Meat",
      "ethicRank": 1
  },
  {
      "name": "Butter",
      "type": "Dairy",
      "ethicRank": 1
  },
  {
      "name": "Cream",
      "type": "Dairy",
      "ethicRank": 1
  },
  {
      "name": "Cow Milk",
      "type": "Dairy",
      "ethicRank": 1
  },
  {
      "name": "Almond Milk",
      "type": "Dairy",
      "ethicRank": 1
  },
  {
      "name": "Oat Milk",
      "type": "Dairy",
      "ethicRank": 1
  }
]`

var mydata = JSON.parse(food);
var alt = document.getElementById("alts");

/* generates alternative ingredients based on food type, to be optimized later, so there aren't multiple functions that do the same thing*/
function altGeneratorMeat (){
  removeAlts()
  for (i=0; i < mydata.length; i++){
    var obj = mydata[i];
    if (obj.type == "Meat"){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(obj.name));
    alt.appendChild(li);
    }
}}

function altGeneratorDairy (){
  removeAlts()
  for (i=0; i < mydata.length; i++){
    var obj = mydata[i];
    if (obj.type == "Dairy"){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(obj.name));
    alt.appendChild(li);
    }
}}

function altGeneratorVeggies (){
  removeAlts()
  for (i=0; i < mydata.length; i++){
    var obj = mydata[i];
    if (obj.type == "Veggies"){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(obj.name));
    alt.appendChild(li);
    }
}}

function removeAlts(){
  var alt_ul = document.getElementById("alts");
  alt_ul.textContent = '';
}