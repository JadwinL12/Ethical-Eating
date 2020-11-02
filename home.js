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




