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
