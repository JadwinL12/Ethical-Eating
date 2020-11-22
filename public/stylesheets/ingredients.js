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
      "ethicRank": 1,
      "info":""
  },
  {
      "name": "Lettuce",
      "type": "Vegetable",
      "ethicRank": 1,
      "info":""
  },
  {
      "name": "Cauliflower",
      "type": "Vegetable",
      "ethicRank": 1,
      "info":""
  },
  {
      "name": "Spinach",
      "type": "Vegetable",
      "ethicRank": 1,
      "info":"https://www.cornucopia.org/2017/11/eat-organic-spinach-avoid-conventional/"
  },
  {
    "name": "Celery",
    "type": "Vegetable",
    "ethicRank": 1,
    "info":""
  },
  {
    "name": "Cabbage",
    "type": "Vegetable",
    "ethicRank": 1,
    "info":""
  },
  {
      "name": "Chicken",
      "type": "Meat",
      "ethicRank": 1,
      "info":"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7005410/"
  },
  {
      "name": "Beef",
      "type": "Meat",
      "ethicRank": 1,
      "info":"https://link.springer.com/referenceworkentry/10.1007%2F978-94-007-0929-4_453"
  },
  {
      "name": "Pork",
      "type": "Meat",
      "ethicRank": 1,
      "info":"https://www.animal-ethics.org/animal-exploitation-section/animals-used-food-introduction/pig-farms/"
  },
  {
      "name": "Turkey",
      "type": "Meat",
      "ethicRank": 1,
      "info":"https://www.latimes.com/opinion/op-ed/la-oe-singer-turkey-suffering-thanksgiving-20161122-story.html"
  },
  {
    "name": "Lamb",
    "type": "Meat",
    "ethicRank": 1,
    "info":""
  },
  {
      "name": "Butter",
      "type": "Dairy",
      "ethicRank": 1,
      "info":"https://www.ethicalconsumer.org/food-drink/shopping-guide/butter-spreads"
  },
  {
      "name": "Cream",
      "type": "Dairy",
      "ethicRank": 1,
      "info":"https://link.springer.com/article/10.1007/s10806-018-9740-9"
  },
  {
      "name": "Cow Milk",
      "type": "Dairy",
      "ethicRank": 1,
      "info":"https://link.springer.com/article/10.1007/s10806-018-9740-9"
  },
  {
      "name": "Almond Milk",
      "type": "Dairy",
      "ethicRank": 1,
      "info":"https://sustainability.ucsf.edu/1.713"
  },
  {
      "name": "Oat Milk",
      "type": "Dairy",
      "ethicRank": 1,
      "info":""
  }
]`

var mydata = JSON.parse(food);
var alt = document.getElementById("alts");
var ethics = document.getElementById("ethics");

function typeFind(onclickID){
  var idFound = onclickID;
  window.foodType = idFound;
};

function nameFind(onclickID){
  var nameFound = onclickID;
  window.ingName = nameFound
}

// using addIngredient() as base, add alternative ingredients
function addAltIngredient() {
  let buttonList = document.getElementsByClassName("addAltIngredient");
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

function altGenerator(){
  alt.textContent = ''
  ethicsGenerator()
  for (i=0; i < mydata.length; i++){
    var obj = mydata[i];
    if (obj.type == foodType){
      var li = document.createElement("li");
    var spanTag = document.createElement("span");
    var spanClass = document.createAttribute("class");
    spanClass.value = "addAltIngredient";
    var spanText = document.createTextNode("+");
    spanTag.setAttributeNode(spanClass);
    spanTag.appendChild(spanText);
    li.appendChild(document.createTextNode(obj.name));
    li.appendChild(spanTag);
    alt.appendChild(li);
    }
  }
  addAltIngredient();
};


function ethicsGenerator(){
  ethics.textContent = ''
  for (i=0; i < mydata.length; i++){
    var obj = mydata[i];
    if (obj.name == ingName){
      var li = document.createElement("li");
    var aTag = document.createElement("a");
    var ethicLink = document.createAttribute("href");
    var linkText = document.createTextNode(obj.info);
    ethicLink.value = obj.info;
    aTag.setAttributeNode(ethicLink);
    aTag.appendChild(linkText);
    li.appendChild(aTag);
    ethics.appendChild(li);
    }
  }
};
