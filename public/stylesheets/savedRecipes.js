function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}


var Carbonara = ["Virgin Olive Oil", "Pancetta", "Garlic", "Eggs", "Spaghetti", "Salt", "Black Pepper"]
var HawaiianPizza = ["Olive Oil", "mozzarella","pineapple","bacon"]
var BarbecueRibs = ["Pork ribs","Barbecue sauce","Salt"]
var CaesarSalad = ["Garlic","Olive Oil","Anchovies","Lemon Juice", "Salt and Pepper","Chicken","Italian Bread","Romaine Lettuce","Parmesan Cheese"]

var addedRecipe = ["Carbonara","HawaiianPizza","BarbecueRibs","CaesarSalad"]


function showIng(data){
  var outString=""
  for (var i=0; i<data.length; i++){
    outString += "<li>" + data[i] + "</li>"
  }
  document.getElementById("output1").innerHTML = outString;

}



function showList(data){
  var SavedRecipeList=""
  for (var i=0; i<data.length; i++){
    SavedRecipeList += "<h3>" + data[i] + "<button onclick=showIng("+ data[i] + ")> + </button></h3>" 
    
  }
  document.getElementById("SavedRecipeList").innerHTML = SavedRecipeList;

}

showList(addedRecipe)