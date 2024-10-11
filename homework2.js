/*
    Name: Thinh Nguyen
    Name of file: homework2.js
    Date created: 09/09/2024
    Date last edited: 10/07/2024
    Description: Assignment 2 Javascript
*/

 //display Today Date on screen
 document.getElementById("today").innerHTML = 'Today date is: '+new Date().toLocaleDateString();
 
 //code for slider
 let slider = document.getElementById("healthBar");
 let output = document.getElementById("healthBarVal");
	output.innerHTML = slider.value;
	slider.oninput = function() {output.innerHTML = this.value;}
	 
	 
//don't allow dates in the future or more than 120 years ago
function checkDate(){
	
	let inputDate = document.getElementById("DOB").value;
	
	let [year, month, day] = inputDate.split('-');
	let myDate = new Date(year, month - 1, day);  // Month is zero-based in JS Date
	
	const currentDate = new Date();		
    var minDate = new Date();	
	minDate.setFullYear(minDate.getFullYear() - 120);	
	
	const msgLabel = document.getElementById("DOB_msg");
	
	if(myDate > currentDate){		
		msgLabel.className = 'errorMsg';
		msgLabel.innerHTML = "Invalid Date. Date in future.";
	}
	else if( myDate < minDate){		
		msgLabel.className = 'errorMsg';
		msgLabel.innerHTML = "Invalid Date. The date is older than 120 years.";
	}
	else{
		msgLabel.className = 'validMsg';
		msgLabel.innerHTML = "Valid Date";		
	}	
		
   

}

 