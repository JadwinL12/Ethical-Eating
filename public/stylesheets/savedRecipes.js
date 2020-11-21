display = true
function showPopup(link){
	if(display){
		document.getElementById(link).style.display="block";
      display = false;
    }else{
    	document.getElementById(link).style.display="none";
          display = true;
    }
}

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}
