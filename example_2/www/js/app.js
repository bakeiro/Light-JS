
//Startup
let app = {};
app.classes = {};
app.config = {};
app.data = {};
window.document.$ = window.document.querySelector;

//Classes
import {person} from "./classes/person.js";
import {student} from "./classes/student.js";
import {teacher} from "./classes/teacher.js";

app.classes.person = person;
app.classes.student = student;
app.classes.teacher = teacher;

//Config
app.config.screen = "PC";
app.config.email_account = "davixt3";
//...

//Data
app.data.students = [];
app.data.teachers = [];

//Events
import {pubsub} from "./engine/pubsub.js";
app.events = new pubsub();

//Finish
window.app = app;