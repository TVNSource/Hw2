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
 var slider = document.getElementById("healthBar");
 var output = document.getElementById("healthBarVal");
   	 output.innerHTML = slider.value;
	 slider.oninput = function() {output.innerHTML = this.value;}

 