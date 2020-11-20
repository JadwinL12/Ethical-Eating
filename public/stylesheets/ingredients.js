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
            let removeButton = document.createElement("span");
            removeButton.className = "removeIngredient";
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function() {
                let parent = removeButton.parentElement;
                let grandParent = parent.parentElement;
                grandParent.removeChild(parent);
                showEthicsWindow();
            })
            ing.textContent = name;
            ing.className = "recipeIng";
            ing.appendChild(removeButton);
            list[0].appendChild(ing);
            setTimeout(function () {
              ing.style.backgroundColor = "white";
            }, 100)
            showEthicsWindow();
        });
    };
}

function changeMenuDisplay () {
  let titleButton = document.getElementsByClassName("changeDisplay");
  let i;
  for (i = 0; i < titleButton.length; i++) {
    let button = titleButton[i];
    button.addEventListener("click", function() {
      let leftContainer = document.getElementsByClassName("leftContainer")[0];
      let leftContainer2 = document.getElementsByClassName("leftContainer2")[0];
      if (leftContainer.style.display === "block") {
        leftContainer.style.display = "none";
        leftContainer2.style.display = "block";
      }
      else {
        leftContainer2.style.display = "none";
        leftContainer.style.display = "block";
      }
    })
  }
}

function showEthicsWindow () {
  let recipeList = document.getElementsByClassName("recipeIngredients")[0]
  let numOfIng = recipeList.childNodes.length;
  let rightCon = document.getElementsByClassName("rightContainer")[0];
  let rightCon2 = document.getElementsByClassName("rightContainer2")[0];
  let ethics = document.getElementsByClassName("ethics")[0];
  let alternatives = document.getElementsByClassName("alternatives")[0];
  if (numOfIng > 1) {
    rightCon.style.width = "25%";
    rightCon2.style.display = "block";
    ethics.style.width = "27.5%";
    alternatives.style.width = "27.5%";
  }
  else {
    ethics.style.width = "17.5%";
    alternatives.style.width = "17.5%";
    rightCon.style.width = "45%";
  }
}

window.addEventListener("load", function() {
    addIngredient();
    changeMenuDisplay();
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