

//Exercise 1 Solution...
window.onload = function(){ 

 let wall= document.getElementById("boundary1"); 

	wall.addEventListener("mouseover", changeWall); 

	function changeWall(){ 
		document.getElementById("boundary1").classList.add("youlose"); 
	} 


	