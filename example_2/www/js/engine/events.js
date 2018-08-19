
//Functions
function createStudentObject(){
	let temp_student = new app.classes.student(5, "Test");
	app.data.students.push(temp_student);
}
function createStudentHtml(){
	let text_element = "<p>Student created!</p>";

	let button_1 = document.querySelector("#button_1");
	button_1.insertAdjacentHTML("afterend", text_element);
}

function createTeacherObject(){
	let temp_teacher = new app.classes.teacher(5, "Test");
	app.data.teachers.push(temp_teacher);
}
function createTeacherHtml(){
	let text_element = "<p>Teacher created!</p>";

	let button_2 = document.querySelector("#button_2");
	button_2.insertAdjacentHTML("afterend", text_element);
}

//Add events queue
app.pubsub.sub("createStudent", createStudentObject);
app.pubsub.sub("createStudent", createStudentHtml);

app.pubsub.sub("createTeacher", createTeacherObject);
app.pubsub.sub("createTeacher", createTeacherHtml);
