

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


//Exercise 4 Solution...
 window.onload = function(){ 

  	

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

 	let start = document.getElementById("start");  
 	let wall=document.getElementsByClassName("boundary");  

 		start.addEventListener("click", function() { 
		location.reload(); 

  	}); 

 } 

 //Exercise 5 Solution...
window.onload = function (){ 

let touchWall = false; 

 
 	let walls= document.querySelectorAll("#maze div.boundary");   
 	let status= document.getElementById("status");
	
 		for (var i=0; i<walls.length; i++){

 			walls[i].addEventListener("mouseover", function(){ 
 				
 				for (var x=0; x<walls.length; x++){ 
 				walls[x].classList.add("youlose");  
 				 
 				}    
 				status.innerHTML="You Lose!!!"; 
 				touchWall = true; 
 			}); 
          
 		}  

 
 	let finishM = document.querySelector("#maze #end");  
 	finishM.addEventListener("mouseover", function (){  

 		if (touchWall ===true ){ 
 			status.innerHTML="No cheating!!!"; 
 		} else{ 
 			status.innerHTML="You Win!!!";
 		}
 		 	
 		
 	});  

 	let start = document.getElementById("start");  
 	let wall=document.getElementsByClassName("boundary");  

 		start.addEventListener("click", function() { 
		location.reload(); 

  	}); 




} 


//Exercise 6 Solution...
window.onload = function (){ 

let touchWall = false; 

 
 	let walls= document.querySelectorAll("#maze div.boundary");   
 	let status= document.getElementById("status");
	
	
 		for (var i=0; i<walls.length; i++){

 			walls[i].addEventListener("mouseover", function(){ 
 				
 				for (var x=0; x<walls.length; x++){ 
 				walls[x].classList.add("youlose");   
 				
 				 
 				}     
 				
 				status.innerHTML="You Lose!!!"; 
 				touchWall = true; 
 			}); 
          
 		}   


 	let finishFlag =false; 
 	let finishM = document.querySelector("#maze #end");  
 	finishM.addEventListener("mouseover", function (){  
 		finishFlag=true; 
 		if (touchWall ===true ){ 
 			status.innerHTML="No cheating!!!";  

 		}else{ 
 			status.innerHTML="You Win!!!";
 		}
 		 	
 		
 	});  

 	let clickStart=false; 
 	let start = document.getElementById("start");  
 	let wall=document.getElementsByClassName("boundary");  

 		start.addEventListener("click", function() { 
		location.reload(); 
		clickStart=true; 

  	}); 

 	let mouseout= document.getElementById("maze");  
 	let mouseoutQ=document.querySelectorAll("#maze div.boundary"); 
 	mouseout.onmouseout = function (){ 

 		if (clickStart===true && finishFlag===true ){ 
 			for (var t= 0; t<mouseoutQ.length; t++){ 
 				mouseoutQ[i].classList.add("youlose"); 
 			}
 			status.innerHTML="You LOSE!!! CHEATER"; 
 		}else{ 
 			
 		}


 	}


}
