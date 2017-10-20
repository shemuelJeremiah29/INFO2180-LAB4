

//Exercise 1 Solution...
window.onload = function(){ 

 let wall= document.getElementById("boundary1"); 

	wall.addEventListener("mouseover", changeWall); 

	function changeWall(){ 
		document.getElementById("boundary1").classList.add("youlose"); 
	} 


//Exercise 2 Solution....
window.onload = function (){ 

	let walls= document.querySelectorAll("#maze div.boundary");  
 		
 		for (var i=0; i<walls.length; i++){

 			walls[i].addEventListener("mouseover", function(){ 
 				
 				for (var x=0; x<walls.length; x++){ 
 				walls[x].classList.add("youlose"); 
 				} 	
 			});
 		}  

 } 


 //Exercise 3 Solution.... 
 window.onload = function (){  

 	let touchWall = false; 

 
 	let walls= document.querySelectorAll("#maze div.boundary");  
	
 		for (var i=0; i<walls.length; i++){

 			walls[i].addEventListener("mouseover", function(){ 
 				
 				for (var x=0; x<walls.length; x++){ 
 				walls[x].classList.add("youlose");  
 				 
 				}    
 				alert("You Lose"); 
 				touchWall = true; 
 			}); 
          
 		}  

 
 	let finishM = document.querySelector("#maze #end");  
 	finishM.addEventListener("mouseover", function (){  

 		if (touchWall ===true ){ 
 			alert("No cheating"); 
 		} else{ 
 			alert("You Win");
 		}
 		 	
 		
 	});

 	

 }  