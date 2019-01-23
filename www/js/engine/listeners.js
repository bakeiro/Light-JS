//DocumentReady
document.addEventListener("DOMContentLoaded", function() {
	
	//Add dynamic content
	let div_right = d.$("#left_2");
	let html = `
		<div class="square">
			<h4>Dynamic content</h4>
			<br>
			<button id='show_message'>Message</button>
		</div>`;
	div_right.innerHTML = div_right.innerHTML + html;

});


//Click
document.addEventListener("click", function(e){

	let element_id = e.srcElement.id;

	if(element_id === "button_1"){
		app.events.pub("createStudent");
	}
	
	if(element_id === "show_message"){
		app.functions.message("Hi! this is a message");
	}

});

//Mouseover
document.addEventListener("mouseover", function(e){

	let element_id = e.srcElement.id;

	if(element_id === "button_2"){
		app.events.pub("createTeacher");
	}

});