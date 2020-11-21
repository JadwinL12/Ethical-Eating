function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}


var Carbonara = ["Virgin Olive Oil", "Pancetta", "Garlic", "Eggs", "Spaghetti", "Salt", "Black Pepper"]
var HawaiianPizza = ["Olive Oil", "Chees"]
var BarbecueRibs = ["Pork ribs","Barbecue sauce","Salt"]

var addedRecipe = ["Carbonara","HawaiianPizza","BarbecueRibs"]


function showIng(data){
  var outString=""
  for (var i=0; i<data.length; i++){
    console.log(data[i])
    outString += "<li>" + data[i] + "</li>"
  }
  document.getElementById("output1").innerHTML = outString;

}



function showList(data){
  var SavedRecipeList=""
  for (var i=0; i<data.length; i++){
    console.log(data[i])
    SavedRecipeList += "<h3>" + data[i] + "<button onclick=showIng("+ data[i] + ")> + </button></h3>" 
    
  }
  document.getElementById("SavedRecipeList").innerHTML = SavedRecipeList;

}

showList(addedRecipe)