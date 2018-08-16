//DocumentReady
document.addEventListener("DOMContentLoaded", function() {
	
	//Events
	let button_1 = document.querySelector("#button_1");
	button_1.addEventListener("click", function(){
		
		let temp_student = new app.classes.student(5, "Test");
		app.data.students.push(temp_student);

		let text_element = "<p>Student created!</p>";
		button_1.insertAdjacentHTML("afterend", text_element);
	});

	let button_2 = document.querySelector("#button_2");
	button_2.addEventListener("mouseover", function(){
		
		let temp_teacher = new app.classes.teacher(5, "Test");
		app.data.teachers.push(temp_teacher);

		let text_element = "<p>Teacher created!</p>";
		button_2.insertAdjacentHTML("afterend", text_element);	
	});

});