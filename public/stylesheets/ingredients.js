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

function filterCategory () {
  userInput = document.getElementById("searchCat");
  catList = document.getElementsByClassName("ingCat");
  userInput.addEventListener("keyup", function () {
    inputText = userInput.value.toUpperCase();
    for (let i = 0; i < catList.length; i++) {
      catName = catList[i].textContent.toUpperCase();
      if (catName.indexOf(inputText) > -1) {
        catList[i].style.display = "";
      }
      else {
        catList[i].style.display = "none";
      }
    }
  })
}

window.addEventListener("load", function() {
    addIngredient();
    changeMenuDisplay();
    filterCategory();
})

/* For ethics portion, merged with ingredients page */
var food = `[
  {
      "name": "Brocolli",
      "type": "Vegetable",
      "ethicRank": 5,
      "info":""
  },
  {
      "name": "Lettuce",
      "type": "Vegetable",
      "ethicRank": 5,
      "info":""
  },
  {
      "name": "Cauliflower",
      "type": "Vegetable",
      "ethicRank": 5,
      "info":""
  },
  {
      "name": "Spinach",
      "type": "Vegetable",
      "ethicRank": 3,
      "info":"https://www.cornucopia.org/2017/11/eat-organic-spinach-avoid-conventional/"
  },
  {
    "name": "Celery",
    "type": "Vegetable",
    "ethicRank": 5,
    "info":""
  },
  {
    "name": "Cabbage",
    "type": "Vegetable",
    "ethicRank": 5,
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
      "ethicRank": 2,
      "info":"https://www.animal-ethics.org/animal-exploitation-section/animals-used-food-introduction/pig-farms/"
  },
  {
      "name": "Turkey",
      "type": "Meat",
      "ethicRank": 3,
      "info":"https://www.latimes.com/opinion/op-ed/la-oe-singer-turkey-suffering-thanksgiving-20161122-story.html"
  },
  {
    "name": "Lamb",
    "type": "Meat",
    "ethicRank": 5,
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
      "ethicRank": 3,
      "info":"https://sustainability.ucsf.edu/1.713"
  },
  {
      "name": "Oat Milk",
      "type": "Dairy",
      "ethicRank": 5,
      "info":""
  },
  {
    "name": "Flour",
    "type": "Grain",
    "ethicRank": 5,
    "info":""
},
{
  "name": "Baking Soda",
  "type": "Premade",
  "ethicRank": 3,
  "info":"https://grist.org/living/where-does-baking-soda-come-from-and-is-it-really-so-eco-friendly/"
},
{
  "name": "Salt",
  "type": "Seasoning",
  "ethicRank": 3,
  "info":"https://www.npr.org/sections/thesalt/2019/10/03/763960436/pakistan-wants-you-to-know-most-pink-himalayan-salt-doesnt-come-from-india"
},
{
  "name": "Sugar",
  "type": "Seasoning",
  "ethicRank": 2,
  "info":"https://foodprint.org/blog/ethical-sugar/"
},
{
  "name": "Chicken Eggs",
  "type": "Meat",
  "ethicRank": 1,
  "info":"https://www.theguardian.com/commentisfree/2017/jan/30/free-range-eggs-con-ethical"
},
{
  "name": "Black Pepper",
  "type": "Seasoning",
  "ethicRank": 2,
  "info":"https://theecologist.org/2011/jan/25/pepper-how-our-favourite-spice-tainted-deadly-legacy"
},
{
  "name": "Oats",
  "type": "Premade",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Cinnamon",
  "type": "Seasoning",
  "ethicRank": 3,
  "info":"https://www.npr.org/sections/thesalt/2013/12/25/256602581/when-is-cinnamon-spice-not-so-nice-the-great-danish-debate"
},
{
  "name": "Parsley",
  "type": "Seasoning",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Mustard Powder",
  "type": "Seasoning",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Cheese",
  "type": "Dairy",
  "ethicRank": 1,
  "info":"https://link.springer.com/article/10.1007/s10806-018-9740-9"
},
{
  "name": "Yogurt",
  "type": "Dairy",
  "ethicRank": 1,
  "info":"https://link.springer.com/article/10.1007/s10806-018-9740-9"
},
{
  "name": "Strawberries",
  "type": "Fruit",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Raspberries",
  "type": "Fruit",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Blueberry",
  "type": "Fruit",
  "ethicRank": 3,
  "info":"https://www.npr.org/sections/thesalt/2016/07/13/484015376/for-pickers-blueberries-mean-easier-labor-but-more-upheaval"
},
{
  "name": "Garlic",
  "type": "Vegetable",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Olive Oil",
  "type": "Seasoning",
  "ethicRank": 2,
  "info":"https://www.ethicalconsumer.org/food-drink/olive-harvesting-bird-deaths"
},
{
  "name": "Anchovies",
  "type": "Meat",
  "ethicRank": 1,
  "info":"https://www.theguardian.com/environment/2008/sep/04/fishing.endangeredspecies"
},
{
  "name": "Black Beans",
  "type": "Meat",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Tortillas",
  "type": "Premade",
  "ethicRank": 2,
  "info":"https://www.npr.org/sections/thesalt/2014/08/08/338637182/what-are-those-parabens-doing-in-my-tortilla"
},
{
  "name": "Cilantro",
  "type": "Seasoning",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Sour Cream",
  "type": "Dairy",
  "ethicRank": 1,
  "info":"https://link.springer.com/article/10.1007/s10806-018-9740-9"
},
{
  "name": "Tomato",
  "type": "Fruit",
  "ethicRank": 3,
  "info":"https://www.apartmenttherapy.com/sustainable-tomatoes-the-ethic-159676"
},
{
  "name": "Potato",
  "type": "Vegetable",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Garlic Powder",
  "type": "Seasoning",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Carrot",
  "type": "Vegetable",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Thyme",
  "type": "Seasoning",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Mushrooms",
  "type": "Meat",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Basil",
  "type": "Seasoning",
  "ethicRank": 5,
  "info":""
},
{
  "name": "Noodles",
  "type": "Grain",
  "ethicRank": 3,
  "info":"https://thegoodshoppingguide.com/ethical-pasta-rice-pulse/"
},
{
  "name": "Bread",
  "type": "Premade",
  "ethicRank": 3,
  "info":"https://thegoodshoppingguide.com/ethical-bread/"
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
};

// using addIngredient() as base, add alternative ingredients
function addAltIngredient() {
  let buttonList = document.getElementsByClassName("addAltIngredient");
  let i;
  for (i = 0; i < buttonList.length; i++) {
      let button = buttonList[i];
      button.addEventListener("click", function() {
          let text = button.parentElement.textContent;
          let name = text.slice(0, text.length - 5);
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
    var liID = document.createAttribute("id");
    liID.value = "altIng"
    var bRank = document.createElement("b");
    var bClass = document.createAttribute("class")
    bClass.value = "rank"
    var bText = document.createTextNode(obj.ethicRank)
    bRank.setAttributeNode(bClass)
    bRank.appendChild(bText)
    li.appendChild(document.createTextNode(obj.name));
    li.appendChild(document.createTextNode(" - "))
    li.setAttributeNode(liID)
    li.appendChild(bRank);
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


function sortRank() {
  // function created using https://www.w3schools.com/howto/howto_js_sort_list.asp
  var list = document.getElementById("alts");
  var rank = list.getElementsByClassName("rank")
  var li = list.getElementsByTagName("li")
  var sorting = true;
  var exchange = false;
  while (sorting == true) {
    sorting = false;
    for (i = 0; i < li.length-1; i++) {
      exchange = false;
      if (rank[i].innerText < rank[i+1].innerText) {
        exchange = true;
        break;
      }
    }
    if (exchange == true) {
      li[i].parentNode.insertBefore(li[i+1], li[i]);
      sorting = true;
    }
  }
}
