//DocumentReady
document.addEventListener("DOMContentLoaded", function() {
	
	//Add dynamic content
	let body_dom = d.$("body");
	body_dom.innerHTML = body_dom.innerHTML + "<br> <h4>Dynamic content</h4> <br> <button id='show_message' >Message</button>";

});

document.addEventListener("click", function(e){

	//Src element
	let element_id = e.srcElement.id;

	if(element_id === "button_1"){
		app.events.pub("createStudent");
	}

	if(element_id === "button_2"){
		app.events.pub("createTeacher");
	}
	
	if(element_id === "show_message"){
		app.functions.message("Hi! this is a message");
	}

});