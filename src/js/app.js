//Startup
let app = {};
app.classes = {};
app.config = {};
app.data = {};

window.d = document;
window.d.$ = window.document.querySelector;

//Config
app.config.screen_type = "PC";
app.config.email_account = "davixt3";

//Engine
import {pubsub} from "./engine/pubsub.js.js";
app.events = new pubsub();

import {Functions} from "./engine/Functions.js.js";
app.functions = new Functions();

//Classes
import {Person} from "./classes/Person.js.js";
import {Student} from "./classes/Student.js.js";
import {Teacher} from "./classes/Teacher.js.js";

app.classes.Person = Person;
app.classes.Student = Student;
app.classes.Teacher = Teacher;

app.data.students = [];
app.data.teachers = [];

window.app = app;