document.addEventListener("DOMContentLoaded", function(){

	//createStudent
	function createStudentObject(){
		let temp_student = new app.classes.student(5, "Test");
		app.data.students.push(temp_student);
	}
	function createStudentHtml(){
		let text_element = "<p>Student created!</p>";
	
		let button_1 = document.querySelector("#button_1");
		button_1.insertAdjacentHTML("afterend", text_element);
	}
	
	
	//createTeacher
	function createTeacherObject(){
		let temp_teacher = new app.classes.teacher(5, "Test");
		app.data.teachers.push(temp_teacher);
	}
	function createTeacherHtml(){
		let text_element = "<p>Teacher created!</p>";
	
		let button_2 = document.querySelector("#button_2");
		button_2.insertAdjacentHTML("afterend", text_element);
	}


	//Refresh data
	function refreshData(){
		
		let string_data = JSON.stringify(app.data, null, "<p></p>");
		let app_data_box = d.$("#app_data");
		let data_html = `
			<h4>App data:</h4>
			${string_data}
		`;

		app_data_box.innerHTML = data_html;
	}


	//Bind teacher
	app.events.sub("createTeacher", createTeacherObject);
	app.events.sub("createTeacher", createTeacherHtml);
	app.events.sub("createTeacher", refreshData);

	//Bind student
	app.events.sub("createStudent", createStudentObject);
	app.events.sub("createStudent", createStudentHtml);
	app.events.sub("createStudent", refreshData);

});