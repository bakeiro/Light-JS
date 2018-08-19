//DocumentReady
document.addEventListener("DOMContentLoaded", function() {
	
	//Events
	let button_1 = document.querySelector("#button_1");
	button_1.addEventListener("click", function(){
		app.events.pub("createStudent");
	});

	let button_2 = document.querySelector("#button_2");
	button_2.addEventListener("mouseover", function(){
		app.events.pub("createTeacher");	
	});

});